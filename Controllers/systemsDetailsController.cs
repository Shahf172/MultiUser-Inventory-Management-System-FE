using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;
using webApp.Models;

namespace webApp.Controllers
{
    public class systemsDetailsController : Controller
    {
        // GET: systemsDetails
        public ActionResult Index()
        {
            IEnumerable<systemsDetail> systemsDetail;

            HttpResponseMessage httpResponse = GlobalVariable.httpClient.GetAsync("systemsDetails").Result;
            systemsDetail = httpResponse.Content.ReadAsAsync<IEnumerable<systemsDetail>>().Result;

            return View(systemsDetail);
        }

        public ActionResult AddOrEdit(int id = 0)
        {
            if(id == 0)
            {
                return View(new systemsDetail());
            }
            else
            {
                HttpResponseMessage httpResponse = GlobalVariable.httpClient.GetAsync("systemDetails/" + id.ToString()).Result;
                return View(httpResponse.Content.ReadAsAsync<systemsDetail>().Result);
            }
        }

        [HttpPost]
        public ActionResult AddOrEdit(systemsDetail systemsDetail)
        {
            HttpResponseMessage httpResponse = GlobalVariable.httpClient.PostAsJsonAsync("systemsDetails", systemsDetail).Result;
            return RedirectToAction("Index");
        }

        public ActionResult Delete(int id)
        {
            HttpResponseMessage httpResponse = GlobalVariable.httpClient.DeleteAsync("systemsDetails/" + id.ToString()).Result;
            return RedirectToAction("Index");
        }
    }
}