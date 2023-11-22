using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using webApp.Models;
using System.Net.Http;
using System.Text;
using System.Net.Http.Headers;

namespace webApp.Controllers
{
    public class adminSystemsController : Controller
    {
        
        // GET: adminSystems
        public ActionResult Index()
        {
            //customersAdmin customersAdmin = new customersAdmin();
            //string adminName = customersAdmin.userName;
            //string pass = customersAdmin.password;

             

            IEnumerable<adminSystem> adminSystem;
            var infoAuth = Convert.ToBase64String(Encoding.Default.GetBytes("Faizan:pass"));
            GlobalVariable.httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", infoAuth);
            HttpResponseMessage httpResponse = GlobalVariable.httpClient.GetAsync("adminSystems").Result;
            adminSystem = httpResponse.Content.ReadAsAsync<IEnumerable<adminSystem>>().Result;

            return View(adminSystem);
        }

        public ActionResult AddOrEdit(int id =0)
        {
            if (id == 0)
            {
                return View(new adminSystem());
            }
            else
            {
                HttpResponseMessage httpResponse = GlobalVariable.httpClient.GetAsync("adminSystems/" + id.ToString()).Result;
                return View(httpResponse.Content.ReadAsAsync<adminSystem>().Result);
            }

        }


        [HttpPost]
        public ActionResult AddOrEdit( adminSystem adminSystem)
        {
            HttpResponseMessage httpResponse = GlobalVariable.httpClient.PostAsJsonAsync("adminSystems", adminSystem).Result;

            return RedirectToAction("index"); 
        }

        public ActionResult Delete(int id =0)
        {
            if (id == 0)
            {
                return View(new adminSystem());
            }

            else
            {
                HttpResponseMessage httpResponse = GlobalVariable.httpClient.DeleteAsync("adminSystems/" + id.ToString()).Result;
                return RedirectToAction("Index");
            }
        }

    }
}