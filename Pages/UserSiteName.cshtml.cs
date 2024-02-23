using iTech.Data;
using iTech.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NToastNotify;
using RestSharp;
using static System.Net.WebRequestMethods;

namespace iTech.Pages
{
    public class UserSiteNameModel : PageModel
    {
        //private readonly ILogger<UserSitesModel> _logger;
        private readonly IToastNotification _toastNotification;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly CRMDBContext _context;

        [BindProperty]
        public Template newTemplate { get; set; }
        [BindProperty]
        public int TemplateId { get; set; }
        [BindProperty]
        public Models.Site SiteObj { get; set; }
        [BindProperty]
        public List<Site> Sites { get; set; }
        [BindProperty]
        public Template TemplateObj { get; set; }
        [BindProperty]
        public string TokenValue { get; set; }
        public static double planCost = 0;
        public static int SelectedplanId = 0;

        private readonly UserManager<ApplicationUser> userManager;
        public UserSiteNameModel(CRMDBContext context, UserManager<ApplicationUser> userManager, IToastNotification toastNotification, IWebHostEnvironment webHostEnvironment)
        {
            
            _context = context;
            this.userManager = userManager;
            _toastNotification = toastNotification;
            _webHostEnvironment = webHostEnvironment;
        }

        public async Task<IActionResult> OnGet(int id,int planId)
        {
            try
            {
                TemplateId = id;
                var user = await userManager.GetUserAsync(User);
                if (user is null)
                {
                    return Redirect("/Login");
                }
                TemplateObj = _context.Templates.Where(i => i.TemplateId == id).FirstOrDefault();
                var PlanObj = _context.Plans.Where(e => e.PlanId == planId).FirstOrDefault();
                if (PlanObj == null)
                {
                    return Redirect($"/PlanPrice?TemplateId={TemplateId}");
                }
                if(PlanObj.PriceAfterDiscount > 0)
                {
                    planCost = PlanObj.PriceAfterDiscount;

                }else
                {
                    planCost = PlanObj.Price;
                }
                SelectedplanId = planId;


                var tokenAffiliate = HttpContext.Session.GetString("AffiliateId");


					if (!string.IsNullOrEmpty(tokenAffiliate) && !string.IsNullOrWhiteSpace(tokenAffiliate))
				{
					TokenValue = HttpContext.Session.GetString("AffiliateId");
				}

            }
            catch (Exception)
            {
                return Page();
            }

            return Page();
        }

        public async Task<IActionResult> OnPost(string siteName,string siteDomain, int id)
        {
            try
            {
                var user = await userManager.GetUserAsync(User);
                var Template = _context.Templates.Where(i => i.TemplateId == id).FirstOrDefault();
                //var Site = _context.Sites.Any(s=>s.TemplateId == id && s.UserID==user.Id && s.IsPaid);
                if(Template is not null)
                {
                    TemplateObj = Template;
                }
            
                if (siteName != null)
                {
                    var IsSiteNameExisted = _context.Sites.Any(o => o.SiteTitle == siteName);

                    if (IsSiteNameExisted)
                    {
                        
                        ModelState.AddModelError(string.Empty, "That name already taken");

                        _toastNotification.AddInfoToastMessage("You already have a site with the same name");
                        
                        return Page();
                    }
                    var IsSiteDomainExisted = _context.Sites.Where(o => o.UserDomain == siteDomain)
                        .Select(a => a.UserDomain).FirstOrDefault();

                    if(IsSiteDomainExisted is null)
                    {
                        _toastNotification.AddInfoToastMessage("Your domain is added");

                    }
                    else if (IsSiteDomainExisted is not null || !IsSiteDomainExisted.Equals(string.IsNullOrEmpty))
                    {

                        ModelState.AddModelError(string.Empty, "That Domain already used");

                        _toastNotification.AddInfoToastMessage("You already have a site with the same domain");

                        return Page();
                    }
                    
                    var TemplateObj = _context.Templates.Where(e => e.TemplateId == id).FirstOrDefault();
                        var totalAmount = planCost + TemplateObj.TemplatePrice;
                        var TapMessage = new
                        {
                            amount = totalAmount,
                            currency = "KWD",
                            threeDSecure = true,
                            save_card = false,
                            description = "iTech Site Fees",
                            statement_descriptor = "Sample",
                            metadata = new
                            {
                                udf1 = user.Id,
                                udf2 = siteName,
                                udf3 = TokenValue,
                                udf4 = SelectedplanId,
                                udf5 = siteDomain,
                            },
                            reference = new
                            {
                                transaction = "txn_0001",
                                order = TemplateObj.TemplateId
                            },
                            receipt = new
                            {
                                email = false,
                                sms = true
                            },
                            customer = new
                            {
                                first_name = user.UserName,
                                middle_name = "test",
                                last_name = "test",
                                email = user.UserName,
                                phone = new
                                {
                                    country_code = "965",
                                    number = "50143413"
                                }
                            },
                            merchant = new { id = "ID25045774" },
                            username = "Username182063@tap", 
                            password = "Password182063@q8", 
                            api_key = "Key96tap25",
                            source = new { id = "src_kw.knet" },

                            //redirect = new { url = "https://localhost:44352/CallBack" }
                            redirect = new { url = "https://techsitekw.com/CallBack" }

                        };

                        var sendPaymentRequestJSON = JsonConvert.SerializeObject(TapMessage);

                        var client = new RestClient("https://api.tap.company/v2/charges");
                        var request = new RestRequest();
                        request.AddHeader("content-type", "application/json");
                        request.AddHeader("authorization", "Bearer sk_test_XKokBfNWv6FIYuTMg5sLPjhJ");
                        request.AddParameter("application/json", sendPaymentRequestJSON, ParameterType.RequestBody);
                        RestResponse response = await client.PostAsync(request);


                        //Response as below
                        //Redirect to  "url": "https://sandbox.payments.tap.company/test_gosell/v2/payment/tap_process.aspx?chg=8D9e9fdEo5N2FTRb5POoT6b%2fkIhg5nP3QgCJug6HnFA%3d",

                        var DeserializeObjectResopnse = JsonConvert.DeserializeObject<JObject>(response.Content);

                        var Transaction = DeserializeObjectResopnse.GetValue("transaction");

                        var Url = Transaction["url"].ToString();

                        return Redirect(Url);
                   // }
                }
                else
                {
                    return Redirect("/UserSites");
                }
            }
            catch (Exception ex)
            {
                _toastNotification.AddErrorToastMessage(ex.Message);

                return RedirectToPage("/UserSiteName", new { id });
            }

        }

        private  void CopyFilesRecursively(DirectoryInfo source, DirectoryInfo target)
        {
            foreach (DirectoryInfo dir in source.GetDirectories())
              CopyFilesRecursively(dir, target.CreateSubdirectory(dir.Name));


            //foreach (FileInfo file in source.GetFiles())
            //{
            //    using (FileStream sourceStream = new FileStream(file.FullName, FileMode.Open))
            //    {
            //        using (FileStream destinationStream = new FileStream(Path.Combine(target.FullName, file.Name), FileMode.CreateNew))
            //        {
            //             sourceStream.CopyToAsync(destinationStream);
            //        }
            //    }
            //}
            foreach (FileInfo file in source.GetFiles())
                file.CopyTo(Path.Combine(target.FullName, file.Name));
        }

        //public JsonResult OnPostCheckSiteName(string SiteTitle)
        //{
        //    bool Flag = false;
        //    try 
        //    {
        //        bool IsEsixt = _context.Sites.Any(s=>s.SiteTitle == SiteTitle);

        //        Flag= IsEsixt;

        //        return new JsonResult(Flag);
        //    }
        //    catch
        //    {
        //        Flag = false;
        //        return new JsonResult(Flag);
        //    }
        //}
    }
}
