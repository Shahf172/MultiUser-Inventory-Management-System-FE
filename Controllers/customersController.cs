using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using webApp.Models;
using System.Net.Http;

namespace webApp.Controllers
{
    public class customersController : Controller
    {
        // GET: customers
        public ActionResult Index()
        {
          
            IEnumerable<customerDTO> customer;

            HttpResponseMessage httpResponseMessage = GlobalVariable.httpClient.GetAsync("customers/1").Result;
            customer = httpResponseMessage.Content.ReadAsAsync<IEnumerable<customerDTO>>().Result;

            return View(customer);
        }

        public ActionResult AddOrEdit(int id = 0)
        {
            if (id == 0)
            {
                return View(new customer());
            }
            else
            {
                HttpResponseMessage httpResponse = GlobalVariable.httpClient.GetAsync("customers/" + id.ToString()).Result;
                return View(httpResponse.Content.ReadAsAsync<customer>().Result);
            }
        }

        [HttpPost]
        public ActionResult AddOrEdit(customer customer)
        {
            HttpResponseMessage httpResponseMessage = GlobalVariable.httpClient.PostAsJsonAsync("customers", customer).Result;
            return RedirectToAction("index");
        }

        public ActionResult Delete(int id)
        {
            HttpResponseMessage httpResponse = GlobalVariable.httpClient.DeleteAsync("customers/" + id.ToString()).Result;
            return RedirectToAction("Index");
        }

    }
}