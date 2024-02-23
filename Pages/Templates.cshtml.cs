using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace iTech.Pages
{
     
    public class TemplatesModel : PageModel
    {
        public int planPriceId { get; set; }
        public void OnGet(int? planId)
        {
            if (planId != null)
            {
                planPriceId = planId.Value;
            }

        }
    }
}
