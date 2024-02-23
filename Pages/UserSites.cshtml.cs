using iTech.Data;
using iTech.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using NToastNotify;
using NToastNotify.Helpers;
using System.IO;
using System.Runtime.InteropServices;
using System.Xml.Linq;
using Microsoft.AspNetCore.Localization;


namespace iTech.Pages
{

    public class UserSitesModel : PageModel
    {
        public IRequestCultureFeature locale;
        public string BrowserCulture;
        private readonly ILogger<UserSitesModel> _logger;
        private readonly IToastNotification _toastNotification;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly CRMDBContext _context;
        [BindProperty]
        public Models.Site SiteObj { get; set; }
        [BindProperty]
        public Template newTemplate { get; set; }
        public static int TemplateId { get; set; }
        public int TotalPageCount { get; set; }
       
        public int CurrentPage { get; set; }
        [BindProperty]
        public List<Site> Sites { get; set; }
        private readonly UserManager<ApplicationUser> _userManager;
        public UserSitesModel(ILogger<UserSitesModel> logger, CRMDBContext context, UserManager<ApplicationUser> userManager,IToastNotification toastNotification,IWebHostEnvironment webHostEnvironment)
        {
            _logger = logger;
            _context = context;
            _toastNotification = toastNotification;
             _webHostEnvironment = webHostEnvironment;
            _userManager = userManager;
            SiteObj = new Site();
            Sites = new List<Site>();

        }

        public async Task<IActionResult> OnGet(int pageNumber = 1, int pageSize = 12)
        {
            try
            {
                locale = Request.HttpContext.Features.Get<IRequestCultureFeature>();
                BrowserCulture = locale.RequestCulture.UICulture.ToString();
                var user = await _userManager.GetUserAsync(User);
                if (user is null)
                {
                    return Redirect("/Login");
                }

                var totalItemCount = _context.Sites.Count(e => e.UserID == user.Id);
                TotalPageCount = (int)Math.Ceiling((double)totalItemCount / pageSize);

                CurrentPage = pageNumber;
                if (pageNumber < 1)
                {
                    pageNumber = 1;
                }
                else if (pageNumber > TotalPageCount)
                {
                    pageNumber = TotalPageCount;
                }
                Sites = _context.Sites
                    .Include(e => e.Templates).ThenInclude(e => e.SiteCategories)
                    .Where(e => e.UserID == user.Id)
                    .Skip((pageNumber - 1) * pageSize)
                    .Take(pageSize)
                    .ToList();
                
            }
            catch (Exception)
            {
                return Page();
            }

            return Page();
        }


        public async Task<IActionResult> OnPostDelete(int id)
        {
            try
            {
                var user = await _userManager.GetUserAsync(User);
                if (user is null)
                {
                    return Redirect("/Login");
                }

                var site = _context.Sites.FirstOrDefault(e => e.SiteId == id && e.UserID == user.Id);
                if (site != null)
                {
                    _context.Sites.Remove(site);
                    await _context.SaveChangesAsync();
                }
            }
            catch (Exception)
            {
                
            }

            return RedirectToPage(); 
        }

        


        public IActionResult OnGetSingleSiteForDelete(int SiteId)
        {
            SiteObj = _context.Sites.Where(c => c.SiteId == SiteId).FirstOrDefault();
            return new JsonResult(SiteObj);
        }

        public async Task<IActionResult> OnPostDeleteSite(int siteId)
        {
            try
            {
                Site siteObj = _context.Sites.Where(e => e.SiteId == siteId).FirstOrDefault();


                if (siteObj != null)
                {
                    _context.Sites.Remove(siteObj);
                    _context.SaveChanges();

                    string pathName = siteObj.SiteTitle;
                    string PathtobeDeleted = Path.Combine(_webHostEnvironment.WebRootPath, pathName).ToLower();
                    string path = Path.Combine(_webHostEnvironment.WebRootPath, pathName).ToLower();

                    if (Directory.Exists(path))
                    {
                        Directory.Delete(path, true);
                    }

                    _toastNotification.AddSuccessToastMessage("Site Deleted successfully");


                    
                }
                else
                {
                    _toastNotification.AddErrorToastMessage("Something went wrong Try Again");
                }
            }
            catch (Exception)

            {
                _toastNotification.AddErrorToastMessage("Something went wrong");
            }

            return RedirectToPage("/UserSites");
        }


        private static void CopyFilesRecursively(DirectoryInfo source, DirectoryInfo target)
        {
            foreach (DirectoryInfo dir in source.GetDirectories())
                CopyFilesRecursively(dir, target.CreateSubdirectory(dir.Name));

            foreach (FileInfo file in source.GetFiles())
                file.CopyTo(Path.Combine(target.FullName, file.Name));
        }




        //public void CreateDir(string PagePath)
        //{
        //    string path = Path.Combine(_webHostEnvironment.WebRootPath, PagePath).ToLower();

        //    //if path does not exist -> create it
        //    if (!Directory.Exists(path))
        //    {
        //        Directory.CreateDirectory(path);
        //    }
        //}
    }
    
}
