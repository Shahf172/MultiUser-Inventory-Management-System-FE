using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;
using webApp.Models;

namespace webApp.Controllers
{
    public class customersAdminsController : Controller
    {
        // GET: customersAdmins
        public ActionResult Index()
        {
            IEnumerable<customersAdmin> customersAdmin;
            HttpResponseMessage httpResponse = GlobalVariable.httpClient.GetAsync("customersAdmins").Result;
            customersAdmin = httpResponse.Content.ReadAsAsync<IEnumerable<customersAdmin>>().Result;

            return View(customersAdmin);
        }

        public ActionResult AddOrEdit(int id = 0)
        {
            if (id == 0)
            {
                return View(new customersAdmin());
            }
            else
            {
                HttpResponseMessage httpResponse = GlobalVariable.httpClient.GetAsync("customersAdmins/"+id.ToString()).Result;
                return View(httpResponse.Content.ReadAsAsync<customersAdmin>().Result);
            }
        }

        [HttpPost]
        public ActionResult AddOrEdit(customersAdmin customersAdmin)
        {
            HttpResponseMessage httpResponseMessage = GlobalVariable.httpClient.PostAsJsonAsync("customersAdmins", customersAdmin).Result;

            return RedirectToAction("Index");
        }

        public ActionResult Delete(int id)
        {
           
                HttpResponseMessage httpResponse = GlobalVariable.httpClient.DeleteAsync("customersAdmins/"+ id.ToString()).Result;
                return RedirectToAction("Index");
            
        }
    }
}