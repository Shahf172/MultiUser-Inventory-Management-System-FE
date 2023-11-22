using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Http;
using webApp.Models;

namespace webApp.Controllers
{
    public class customerSystemsController : Controller
    {
        // GET: customerSystems
        public ActionResult Index()
        {
            IEnumerable<userSystem> userSystem;
            HttpResponseMessage httpResponseMessage = GlobalVariable.httpClient.GetAsync("customerSystems/limited").Result;
            userSystem = httpResponseMessage.Content.ReadAsAsync<IEnumerable<userSystem>>().Result;

            return View(userSystem);
        }

        public ActionResult AddOrEdit(int id = 0)
        {
            if(id == 0)
            {
                return View(new customerSystem());
            }
            else
            {
                HttpResponseMessage httpResponse = GlobalVariable.httpClient.GetAsync("customerSystems/" + id.ToString()).Result;
                return View(httpResponse.Content.ReadAsAsync<customerSystem>().Result);
            }
        }

        public ActionResult AddOrEdit(customerSystem customerSystem)
        {
            HttpResponseMessage httpResponseMessage = GlobalVariable.httpClient.PostAsJsonAsync("customerSystems", customerSystem).Result;

            return RedirectToAction("Index");
        }

        public ActionResult Delete(int id)
        {
            HttpResponseMessage httpResponse = GlobalVariable.httpClient.DeleteAsync("customerSystems/" + id.ToString()).Result;
            return RedirectToAction("Index");
        }
    }
}