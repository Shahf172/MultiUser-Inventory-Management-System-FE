using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace webApp.Controllers
{
    public class testingClientController : Controller
    {
        // GET: testingClient
        public ActionResult Index()
        {
            //string result;

            //HttpResponseMessage httpResponse = GlobalVariable.httpClient.GetAsync("testing").Result;
            var infoAuth = Convert.ToBase64String(Encoding.Default.GetBytes("Faizan:pass"));
            GlobalVariable.httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", infoAuth);
            HttpResponseMessage httpResponse = GlobalVariable.httpClient.GetAsync("GetData").Result;
            var result = httpResponse.Content.ReadAsAsync<string>().Result;

            ViewBag.name = result;
            ViewBag.fullName = "result";
            return View();
        }
    }
}