using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;
using webApp.Models;

namespace webApp.Controllers
{
    public class Log_InController : Controller
    {
        

        // GET: Log_In
        public ActionResult Index()
        {
            return View();
        }

        // get login credentials from api
        [HttpGet]
        public ActionResult LogIn(string username, string password)
        {
            
           if (username == null && password == null)
            {
                return View() ;
            }
            else
            {
                HttpResponseMessage httpResponse = GlobalVariable.httpClient.GetAsync("Log_In?username=" + username + "&pass=" + password).Result;

                return ViewBag.result = httpResponse.Content.ReadAsAsync<string>().Result;
            }
            
        }



        //[HttpPost]
        //public ActionResult LogIn(string username, string pass)
        //{
        //    //Lon_In _In = new Lon_In();
        //    //string username = _In.userName;
        //    //string pass = ;

        //    //HttpRequestMessage requestMessage = GlobalVariable.httpClient.PostAsJsonAsync("Log_In/?username=" + username + "password=" + pass).Result;


        //    return View();
        //}
    }
}