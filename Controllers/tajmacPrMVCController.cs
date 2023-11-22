using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using webApp.Models;
using System.Net.Http;

namespace webApp.Controllers
{
    public class tajmacPrMVCController : Controller
    {
        // GET: tajmacPrMVC
        public ActionResult Index(int id)
        {
            IEnumerable<completeDetailDTO> completeDetail;

            HttpResponseMessage httpResponseMessage = GlobalVariable.httpClient.GetAsync("tajmacPr/"+id.ToString()).Result;
            completeDetail = httpResponseMessage.Content.ReadAsAsync<IEnumerable<completeDetailDTO>>().Result;

            return View(completeDetail);
        }
    }
}