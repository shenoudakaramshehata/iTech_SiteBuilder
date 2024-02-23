using iTech.Data;
using iTech.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NToastNotify;
using RestSharp;

namespace iTech.Pages
{
    public class CallBackModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly CRMDBContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IToastNotification _toastNotification;
        public ApplicationUser AffiliateUser;
        private readonly ApplicationDbContext _db;
        public string PaymentStatus { get; set; }
        public CallBackModel(UserManager<ApplicationUser> userManager, CRMDBContext context, IWebHostEnvironment webHostEnvironment
                                        , IToastNotification toastNotification, ApplicationDbContext db)
        {
            _userManager = userManager;
            _context = context;
            _webHostEnvironment = webHostEnvironment;
            _toastNotification = toastNotification;
            _db = db;
        }

        public async Task<ActionResult> OnGet(string tap_id, string data)
        {
            try
            {
                if (tap_id is null || data is null)
                {
                    return RedirectToPage("SomethingwentError");
                }

                string Id = tap_id;
                string Data = data;

                var client = new RestClient("https://api.tap.company/v2/charges/" + Id);
                var request = new RestRequest();
                request.AddHeader("authorization", "Bearer sk_test_XKokBfNWv6FIYuTMg5sLPjhJ");
                request.AddParameter("undefined", "{}", ParameterType.RequestBody);
                RestResponse response = client.Execute(request);

                var DeserializedResponse = JsonConvert.DeserializeObject<JObject>(response.Content);

                var Status = DeserializedResponse["status"].ToString();
                PaymentStatus = Status.ToString();

                var MetaData = DeserializedResponse["metadata"];
                var SiteName = MetaData?["udf2"];
                var UserId = MetaData?["udf1"];
                var Token = MetaData?["udf3"];
                var PlanId = MetaData?["udf4"];
                var Domain = MetaData?["udf5"];

                var Reference = DeserializedResponse["reference"];
                var TemplateId = Reference?["order"];


                if (Status == "CAPTURED")
                {

                    var IsSiteNameExisted = _context.Sites.Any(o => o.SiteTitle == SiteName.ToString());

                    //if (IsSiteNameExisted)
                    //{
                    //    _toastNotification.AddInfoToastMessage("You already have a site with the same name");

                    //    return Redirect("/index");
                    //}



                    var TemplateFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Preview").ToLower();
                    var TargetPath="";
                    //if (Domain is not null)
                    //{
                    //    TargetPath = Path.Combine(_webHostEnvironment.WebRootPath, Domain.ToString()).ToLower();

                    //}
                    //else
                    //{
                        TargetPath = Path.Combine(_webHostEnvironment.WebRootPath, SiteName.ToString()).ToLower();

                    //}
                    var Template = _context.Templates.Where(i => i.TemplateId == (int)TemplateId).FirstOrDefault();
                    var planObj = _context.Plans.Where(i => i.PlanId == (int)PlanId).FirstOrDefault();
                    string SitePath = TemplateFolder + "\\" + Template.TemplateName;

                    DirectoryInfo TemplateFolders = new DirectoryInfo(SitePath);
                    DirectoryInfo TargetPaths = new DirectoryInfo(TargetPath);

                    CopyFilesRecursively(TemplateFolders, TargetPaths);
                    string TokenValue = (string)Token;

                    if (TokenValue != null)
                    {
                        AffiliateUser = _userManager.Users.Where(e => e.AffiliateToken == TokenValue).FirstOrDefault();
                        if (AffiliateUser != null)
                        {
                            double Points = 0;
                            var affiliatePrices = _context.AffiliatePrices.ToList();
                            foreach (var item in affiliatePrices)
                            {
                                if(planObj.PriceAfterDiscount > 0)
                                {
                                    if (planObj.PriceAfterDiscount >= item.From && planObj.PriceAfterDiscount <= item.To)
                                    {
                                        Points = item.Point;
                                        break;
                                    }
                                }
                                else
                                {
                                    if (planObj.Price >= item.From && planObj.Price <= item.To)
                                    {
                                        Points = item.Point;
                                        break;
                                    }
                                }
                               

                            }
                            AffiliateUser.Point = AffiliateUser.Point + Points;
                            _db.SaveChanges();

                        }

                    }

                    Site NewSite = new Site
                    {
                        TemplateId = (int)TemplateId,
                        UserID = UserId.ToString(),
                        SiteTitle = SiteName.ToString(),
                        CreatedDate = DateTime.Now.Date,
                        IsActive = true,
                        UserDomain = (string)Domain,
                        IsPaid = true,
                        UserTemplatePrice = Template.TemplatePrice,
                        AffiliateUser = AffiliateUser == null ? null : AffiliateUser.Id,
                    };
                    

                    _context.Sites.Add(NewSite);
                    _context.SaveChanges();
                    SiteSubscription siteSubscription = new SiteSubscription
                    {
                        SiteId = NewSite.SiteId,
                        Price = Template.TemplatePrice+planObj.Price,
                        StartDate = DateTime.Now,
                        EndDate = DateTime.Now.AddMonths(12),
                        PlanId=planObj.PlanId,
                    };
                    _context.SiteSubscriptions.Add(siteSubscription);
                    _context.SaveChanges();
                    return Page();
                }

                return Page();
            }
            catch (Exception ex)
            {

                return RedirectToPage("SomethingwentError", new { Message = ex.Message });
                //return Page();
            }

        }

        private void CopyFilesRecursively(DirectoryInfo source, DirectoryInfo target)
        {
            foreach (DirectoryInfo dir in source.GetDirectories())
                CopyFilesRecursively(dir, target.CreateSubdirectory(dir.Name));


            foreach (FileInfo file in source.GetFiles())
                file.CopyTo(Path.Combine(target.FullName, file.Name));
        }
    }
}
