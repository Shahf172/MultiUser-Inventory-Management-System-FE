using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using webApp.Models;
using System.Net.Http;


namespace webApp.Controllers
{
    public class tajmacPr1Controller : Controller
    {
        // GET: tajmacPr1
        public ActionResult Index()
        {

            IEnumerable<detailBySysIdDTO> detail;

            HttpResponseMessage httpResponseMessage = GlobalVariable.httpClient.GetAsync("tajmacPr1/1").Result;
            detail = httpResponseMessage.Content.ReadAsAsync<IEnumerable<detailBySysIdDTO>>().Result;

            return View(detail);
        }
    }
}