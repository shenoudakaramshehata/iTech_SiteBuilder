using iTech.Data;
using iTech.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.WebUtilities;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;
using System.Text.Encodings.Web;
using System.Text;
using System.Xml.Linq;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using RestSharp;
using iTech.ViewModel;
using System.Configuration;
using iTech.Migrations.ApplicationDb;

namespace iTech.Pages
{
    public class RegisterAffiliateModel : PageModel
    {
		public Business business { get; set; }
		public string businessID { get; set; }
		public string EntityID { get; set; }
		public Merchant Merchant { get; set; }
		public Entity entity { get; set; }
		private readonly CRMDBContext _context;
		private readonly SignInManager<ApplicationUser> _signInManager;
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly IUserStore<ApplicationUser> _userStore;
		private readonly IUserEmailStore<ApplicationUser> _emailStore;
		private readonly ILogger<RegisterAffiliateModel> _logger;
		private readonly IEmailSender _emailSender;
		private readonly ApplicationDbContext _db;

		private readonly RoleManager<IdentityRole> _roleManager;
		public RegisterAffiliateModel(
			CRMDBContext context,
			ApplicationDbContext db,
			UserManager<ApplicationUser> userManager,
			IUserStore<ApplicationUser> userStore,
			SignInManager<ApplicationUser> signInManager,
			ILogger<RegisterAffiliateModel> logger,
			IEmailSender emailSender,
			RoleManager<IdentityRole> roleManager)
		{
			_userManager = userManager;
			_userStore = userStore;
			_emailStore = GetEmailStore();
			_signInManager = signInManager;
			_logger = logger;
			_emailSender = emailSender;
			_context = context;
			_roleManager = roleManager;
			_db = db;
			business = new Business();
		}

		/// <summary>
		///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
		///     directly from your code. This API may change or be removed in future releases.
		/// </summary>
		[BindProperty]
		public InputModel Input { get; set; }

		/// <summary>
		///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
		///     directly from your code. This API may change or be removed in future releases.
		/// </summary>
		public string? ReturnUrl { get; set; }

		/// <summary>
		///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
		///     directly from your code. This API may change or be removed in future releases.
		/// </summary>
		public IList<AuthenticationScheme> ExternalLogins { get; set; }

		/// <summary>
		///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
		///     directly from your code. This API may change or be removed in future releases.
		/// </summary>
		public class InputModel
		{
			/// <summary>
			///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
			///     directly from your code. This API may change or be removed in future releases.
			/// </summary>
			[Required]
			[EmailAddress]
			[Display(Name = "Email")]
			public string Email { get; set; }
			[Required]
			public string FullName { get; set; }
			[Required]
			public string LastName { get; set; }
			[Required]
			public string AccountNumber { get; set; }
			
			[Required]
			public string BankName { get; set; }
			[Required]
			public string Address { get; set; }
			[Required]
			public string IPan { get; set; }
			[Required]
			public string PhoneNumber { get; set; }

			[Required]
			public int CountryId { get; set; }
			public string? AffiliateToken { get; set; }
			[Required]
			public int Point { get; set; }
			[Required]
			public DateTime RegisterdData { get; set; }
			/// <summary>
			///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
			///     directly from your code. This API may change or be removed in future releases.
			/// </summary>
			[Required]
			[StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
			[DataType(DataType.Password)]
			[Display(Name = "Password")]
			public string Password { get; set; }

			/// <summary>
			///     This API supports the ASP.NET Core Identity default UI infrastructure and is not intended to be used
			///     directly from your code. This API may change or be removed in future releases.
			/// </summary>
			[DataType(DataType.Password)]
			[Display(Name = "Confirm password")]
			[Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
			public string ConfirmPassword { get; set; }
		}

		public List<Country> countries { get; set; }
		public async Task OnGetAsync(string? returnUrl = null)
		{
			//countries = _context.Countries.ToList();
			ReturnUrl = returnUrl;
			ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
		}
		public async Task<IActionResult> OnPostAsync(string? returnUrl = null)
		{
			returnUrl ??= Url.Content("~/");
			ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
			//var country = Request.Form["CountryId"];
			//var parseCountry = int.Parse(country);

			if (ModelState.IsValid)
			{

				var user = new ApplicationUser
				{
					UserName = Input.Email,
					Email = Input.Email,
					FullName = Input.FullName,
					RegisterdData = DateTime.Now,
					Address = Input.Address,
					AccountNumber = String.Join("", Input.AccountNumber.Split("-")),
					//CountryId = parseCountry,
					IPan = Input.IPan,
					BankName = Input.BankName,
					
					//TypeofBusiness = Input.TypeofBusiness,
					LastName = Input.LastName,
					PhoneNumber = Input.PhoneNumber,
					//licensednumber = Input.licensednumber != null ? Input.licensednumber : null,
					//licensedtype = Input.licensedtype != null ? Input.licensedtype : null,

					Point = 0,
					AffiliateToken = GenerateToken()
				};
				var result = await _userManager.CreateAsync(user, Input.Password);

				if (result.Succeeded)
				{
					_logger.LogInformation("User created a new account with password.");


					await _userManager.AddToRoleAsync(user, "Affiliate");

					await _signInManager.SignInAsync(user, isPersistent: true);


                    //var countryName = _context.Countries.Where(e => e.CountryId == user.CountryId).FirstOrDefault().TitleEn;

                    //				var tapMessage = new
                    //				{
                    //					name = new
                    //					{
                    //						en = user.FullName,
                    //						ar = user.FullName
                    //					},
                    //					type = "corp",
                    //					entity = new
                    //					{
                    //						legal_name = new
                    //						{
                    //							en = user.Legalname,
                    //							ar = user.Legalname
                    //						},
                    //						is_licensed = user.is_licensed.ToString(),
                    //						country = "KW",
                    //						bank_account = new
                    //						{
                    //							iban = user.IPan,
                    //							account_number = user.AccountNumber
                    //						}
                    //					},
                    //					contact_person = new
                    //					{
                    //						name = new
                    //						{
                    //							title = "Mr",
                    //							first = user.FullName,
                    //							last = user.LastName
                    //						},
                    //						contact_info = new
                    //						{
                    //							primary = new
                    //							{
                    //								email = user.Email,
                    //								phone = new
                    //								{
                    //									number = user.PhoneNumber
                    //								}
                    //							}
                    //						}
                    //					},
                    //					brands = new[]
                    //{
                    //	new
                    //	{
                    //		name = new
                    //		{
                    //			en = user.BrandName,
                    //			ar = user.BrandName
                    //		}
                    //	}
                    //}
                    //				};
                    //				var sendPaymentRequestJSON = JsonConvert.SerializeObject(tapMessage);

                    //				var client = new RestClient("https://api.tap.company/v2/business");
                    //				var request = new RestRequest();
                    //				request.AddHeader("content-type", "application/json");
                    //				request.AddHeader("authorization", "Bearer sk_test_BPmcTgEfuK1dHslMaLGY42Ry");
                    //				request.AddParameter("application/json", sendPaymentRequestJSON, ParameterType.RequestBody);
                    //				RestResponse response = await client.PostAsync(request);
                    //				var stringrespone = response.Content.ToString();
                    //				var model = _userManager.Users.Where(e => e.Id == user.Id).FirstOrDefault();
                    //				model.response = stringrespone;
                    //				var UpdatedUser = _db.Users.Attach(model);
                    //				UpdatedUser.State = Microsoft.EntityFrameworkCore.EntityState.Modified;

                    //				_db.SaveChanges();
                    //Response as below
                    //Redirect to  "url": "https://sandbox.payments.tap.company/test_gosell/v2/payment/tap_process.aspx?chg=8D9e9fdEo5N2FTRb5POoT6b%2fkIhg5nP3QgCJug6HnFA%3d",

                    //var DeserializeObjectResopnse = JsonConvert.DeserializeObject<JObject>(response.Content);

                    //var Transaction = DeserializeObjectResopnse.GetValue("transaction");

                    //var Url = Transaction["url"].ToString();

                    //return Redirect(Url);
                    //MakeMerchant(user.Id);
                    return Redirect("/Affiliate/Index");

				}
				foreach (var error in result.Errors)
				{
					ModelState.AddModelError(string.Empty, error.Description);
				}

			}

            // If we got this far, something failed, redisplay form
            return LocalRedirect(returnUrl);

            // If we got this far, something failed, redisplay form

        }
        public void MakeMerchant(string userId)
		{
			if (userId != null)
			{
				var model = _userManager.Users.Where(e => e.Id == userId).FirstOrDefault();
				if (model != null)
				{
					business = JsonConvert.DeserializeObject<Business>(model.response);
					if (business.Status == "Active")
					{
						JObject jObject = JObject.Parse(model.response);
						entity = jObject["entity"].ToObject<Entity>();
						businessID = business.Id;
						EntityID = entity.Id;
						var merchant = new
						{
							display_name = model.FullName + model.LastName,
							business_id = businessID,
							business_entity_id = EntityID,
							charge_currenices = new[]
	{
		"KWD"
	},
							country = "KW",
							email = model.Email
						};
						var sendPaymentRequestJSON = JsonConvert.SerializeObject(merchant);

						var client = new RestClient("https://api.tap.company/v2/merchant");
						var request = new RestRequest();
						request.AddHeader("content-type", "application/json");
						request.AddHeader("authorization", "Bearer sk_test_BPmcTgEfuK1dHslMaLGY42Ry");
						request.AddParameter("application/json", sendPaymentRequestJSON, ParameterType.RequestBody);
						RestResponse response = client.Post(request);
						var Merchantrespone = response.Content.ToString();
						Merchant = JsonConvert.DeserializeObject<Merchant>(Merchantrespone);
						if (Merchant.Status == "New")
						{
							model.MerchantID = Merchant.Id;
							var UpdatedUser = _db.Users.Attach(model);
							UpdatedUser.State = Microsoft.EntityFrameworkCore.EntityState.Modified;

							_db.SaveChanges();
						}

						//transaction.successIndicator = sessionInfo.successIndicator;
						//var Updatedpayment = _context.Payments.Attach(transaction);
						//Updatedpayment.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
						//_context.SaveChanges();
						//return Page();
					}
				}
			}
		}
		//public async Task<IActionResult> OnPostAsync(string? returnUrl = null)
		//{
		//    returnUrl ??= Url.Content("~/");
		//    ExternalLogins = (await _signInManager.GetExternalAuthenticationSchemesAsync()).ToList();
		//    if (ModelState.IsValid)
		//    {
		//        Input.RegisterdData = DateTime.Now;
		//        Input.Point = 0;
		//        Input.AffiliateToken = GenerateToken();
		//        var user = CreateUser();
		//        await _userManager.AddToRoleAsync(user, "Affiliate");
		//        await _context.SaveChangesAsync();
		//        await _userStore.SetUserNameAsync(user, Input.Email, CancellationToken.None);
		//        await _emailStore.SetEmailAsync(user, Input.Email, CancellationToken.None);
		//        var result = await _userManager.CreateAsync(user, Input.Password);

		//        if (result.Succeeded)
		//        {
		//            _logger.LogInformation("User created a new account with password.");

		//            var userId = await _userManager.GetUserIdAsync(user);
		//            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
		//            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
		//            var callbackUrl = Url.Page(
		//                "/Account/ConfirmEmail",
		//                pageHandler: null,
		//                values: new { area = "Identity", userId = userId, code = code, returnUrl = returnUrl },
		//                protocol: Request.Scheme);

		//            await _emailSender.SendEmailAsync(Input.Email, "Confirm your email",
		//                $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");

		//            if (_userManager.Options.SignIn.RequireConfirmedAccount)
		//            {
		//                return RedirectToPage("RegisterConfirmation", new { email = Input.Email, returnUrl = returnUrl });
		//            }
		//            else
		//            {
		//                await _signInManager.SignInAsync(user, isPersistent: false);
		//                return LocalRedirect(returnUrl);
		//            }
		//        }
		//        foreach (var error in result.Errors)
		//        {
		//            ModelState.AddModelError(string.Empty, error.Description);
		//        }
		//    }

		//    // If we got this far, something failed, redisplay form
		//    return Page();
		//}

		private ApplicationUser CreateUser()
		{
			try
			{
				return Activator.CreateInstance<ApplicationUser>();
			}
			catch
			{
				throw new InvalidOperationException($"Can't create an instance of '{nameof(ApplicationUser)}'. " +
					$"Ensure that '{nameof(ApplicationUser)}' is not an abstract class and has a parameterless constructor, or alternatively " +
					$"override the register page in /Areas/Identity/Pages/Account/Register.cshtml");
			}
		}


		public static string GenerateToken()
		{
			const int tokenLength = 5;
			const string allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

			byte[] randomBytes = new byte[tokenLength];
			using (RandomNumberGenerator rng = new RNGCryptoServiceProvider())
			{
				rng.GetBytes(randomBytes);
			}

			char[] chars = new char[tokenLength];
			for (int i = 0; i < tokenLength; i++)
			{
				int index = randomBytes[i] % allowedChars.Length;
				chars[i] = allowedChars[index];
			}

			return new string(chars);
		}

		private IUserEmailStore<ApplicationUser> GetEmailStore()
		{
			if (!_userManager.SupportsUserEmail)
			{
				throw new NotSupportedException("The default UI requires a user store with email support.");
			}
			return (IUserEmailStore<ApplicationUser>)_userStore;
		}
	}
}
