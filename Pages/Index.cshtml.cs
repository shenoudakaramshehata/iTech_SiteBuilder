using iTech.Data;
using iTech.Migrations;
using iTech.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using NToastNotify;

namespace iTech.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        
		private readonly IToastNotification _toastNotification;
		public IRequestCultureFeature locale;
		public string BrowserCulture;
		private readonly CRMDBContext _context;
		private readonly UserManager<ApplicationUser> _userManager;
		
		[BindProperty]
		public ContactUs ContactUs { get; set; }

		public Models.Brands brands { get; set; }

		public IndexModel(IToastNotification toastNotification, ILogger<IndexModel> logger, CRMDBContext context, UserManager<ApplicationUser> userManager)
		{
			_logger = logger;
			_toastNotification = toastNotification;
			_context = context;
			_userManager = userManager;
			brands = new Models.Brands();
            ContactUs = new ContactUs();
		}


		public void OnGet(string affiliateId)
        {
			if(!string.IsNullOrEmpty(affiliateId) && !string.IsNullOrWhiteSpace(affiliateId)) {
				if (!_userManager.Users.Any(a => a.AffiliateToken == affiliateId)) 
				{
					_toastNotification.AddErrorToastMessage("Invalid Token: Enter another TOKEN");

				}
			}
			
		}

		public async Task<IActionResult> OnPostAddSubscribe(string newsletterEmail)
		{
			try
			{
				var EmailsfromNewLetter = _context.Newsletters.Any(i => i.Email == newsletterEmail);
				if (EmailsfromNewLetter)
				{
					_toastNotification.AddInfoToastMessage("This Email Is already Subscribed");
					return RedirectToPage("/index");
				}

				var newSubscribe = new Newsletter()
				{
					Date = DateTime.Now,
					Email = newsletterEmail
				};
				_context.Newsletters.Add(newSubscribe);
				_context.SaveChanges();
				_toastNotification.AddSuccessToastMessage("You Are Subscribed Successifully Of ITECH News Letter");

			}
			catch (Exception)
			{

				_toastNotification.AddErrorToastMessage("Something Went Error");
			}
			return Redirect("/Index");
		}


        public IActionResult OnPostAddContactUS(string name, string email, string message)
        {
            try
            {
                var contactus = new ContactUs()
                {
                    SendingDate = DateTime.Now,
                    Email = email,
					Message=message,
					Name=name
                };
                
                _context.contactUs.Add(contactus);
                _context.SaveChanges();
                _toastNotification.AddSuccessToastMessage("Message Send successfully");
            }
            catch (Exception e)
            {
                _toastNotification.AddErrorToastMessage(e.Message);
            }
            return Redirect("/Index");
        }
    }
}