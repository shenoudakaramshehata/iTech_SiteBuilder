using iTech.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Localization;
using Microsoft.EntityFrameworkCore;
using System.Globalization;
using Microsoft.OpenApi.Models;
using System.Text.RegularExpressions;
using System.Reflection;
using Microsoft.Extensions.Localization;
using NToastNotify;
using iTech;
using Microsoft.AspNetCore.Authentication.Cookies;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

#region Identity Configuration

builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = false).AddRoles<IdentityRole>().AddEntityFrameworkStores<ApplicationDbContext>();


//builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = false).AddEntityFrameworkStores<ApplicationDbContext>();


builder.Services.Configure<IdentityOptions>(options =>
{
    // Password settings.
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireNonAlphanumeric = true;
    options.Password.RequireUppercase = true;
    options.Password.RequiredLength = 6;
    options.Password.RequiredUniqueChars = 1;

    // Lockout settings.
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
    options.Lockout.MaxFailedAccessAttempts = 5;
    options.Lockout.AllowedForNewUsers = true;

    // User settings.
    options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
    options.User.RequireUniqueEmail = false;
});

builder.Services.ConfigureApplicationCookie(options =>
{
    // Cookie settings
    options.Cookie.HttpOnly = true;
    options.ExpireTimeSpan = TimeSpan.FromMinutes(30);

    options.LoginPath = "/Identity/Account/Login";
    options.AccessDeniedPath = "/Identity/Account/AccessDenied";
    options.SlidingExpiration = true;
});

#endregion

#region "Data Context"

builder.Services.AddDbContext<CRMDBContext>(options => options.UseSqlServer(connectionString));

#endregion

#region "Localization"

builder.Services.AddLocalization(options => options.ResourcesPath = "Resources");

builder.Services.AddRazorPages().AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null).AddDataAnnotationsLocalization(
               options =>
               {
                   var type = typeof(SharedResource);
                   var assembblyName = new AssemblyName(type.GetTypeInfo().Assembly.FullName);
                   var factory = builder.Services.BuildServiceProvider().GetService<IStringLocalizerFactory>();
                   var localizer = factory.Create("SharedResource", assembblyName.Name);
                   options.DataAnnotationLocalizerProvider = (t, f) => localizer;
               }
               );
builder.Services.AddControllers().AddDataAnnotationsLocalization(
          options =>
          {
              var type = typeof(SharedResource);
              var assembblyName = new AssemblyName(type.GetTypeInfo().Assembly.FullName);
              var factory = builder.Services.BuildServiceProvider().GetService<IStringLocalizerFactory>();
              var localizer = factory.Create("SharedResource", assembblyName.Name);
              options.DataAnnotationLocalizerProvider = (t, f) => localizer;
          });
builder.Services.AddControllersWithViews().AddDataAnnotationsLocalization(
          options =>
          {
              var type = typeof(SharedResource);
              var assembblyName = new AssemblyName(type.GetTypeInfo().Assembly.FullName);
              var factory = builder.Services.BuildServiceProvider().GetService<IStringLocalizerFactory>();
              var localizer = factory.Create("SharedResource", assembblyName.Name);
              options.DataAnnotationLocalizerProvider = (t, f) => localizer;
          }
          );

#endregion

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});


builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddRazorPages();

builder.Services.AddDistributedMemoryCache();

builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromDays(7);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});
builder.Services.AddAuthentication().AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options => { options.ExpireTimeSpan = System.TimeSpan.FromMinutes(90); });

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerGeneratorOptions.IgnoreObsoleteActions = true;
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
});
//Toast

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddAntiforgery(o => o.HeaderName = "XSRF-TOKEN");

builder.Services.AddRazorPages().AddNToastNotifyToastr(new ToastrOptions()
{
    PositionClass = ToastPositions.TopRight,

    ProgressBar = true,
    PreventDuplicates = false,
    CloseButton = true
});
builder.Services.AddDistributedMemoryCache(); // You can use other distributed cache providers as well
builder.Services.AddSession(options =>
{
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

var app = builder.Build();
System.Net.ServicePointManager.SecurityProtocol |= System.Net.SecurityProtocolType.Tls12;
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
    app.UseDeveloperExceptionPage();

    app.UseSwagger();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseDeveloperExceptionPage();
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    app.UseSwagger();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
};



app.UseSession();

app.UseRequestRoutingRequest();
app.UseAffiliateRequestMiddleware();
app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting();
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();
app.UseNToastNotify();

app.MapRazorPages();

var supportedCultures = new[]
           {
                new CultureInfo("en-US"),

                new CultureInfo("ar-EG")

            };


app.UseRequestLocalization(new RequestLocalizationOptions
{
    DefaultRequestCulture = new RequestCulture("en-US"),
    SupportedCultures = supportedCultures,
    SupportedUICultures = supportedCultures
});

app.UseEndpoints(endpoints =>
{

    endpoints.MapRazorPages();
    endpoints.MapControllers();
    endpoints.MapSwagger();
});

app.UseSwagger();

app.UseSwaggerUI(options =>
{
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");

});


//app.Run(async (context) =>
//{
//    if (context.Request.Query.TryGetValue("affiliateId", out var affiliateId))
//    {
       
//        context.Session.SetString("AffiliateId", affiliateId);
//    }
//    Console.WriteLine("affiliateId is :" + affiliateId);
//    //await context.Response.WriteAsync(
//    //    $"affiliateId is : {affiliateId}");
//});

//app.Use(async (context, next) =>
//{
//    if (context.Request.Query.TryGetValue("affiliateId", out var affiliateId))
//    {
//        Console.WriteLine("affiliateId is :" + affiliateId);
//        context.Session.SetString("AffiliateId", affiliateId);
//    }

//    await next.Invoke();
//});


app.Run();