using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;


namespace webApp
{
    public static class GlobalVariable
    {
        public static HttpClient httpClient = new HttpClient();
        //public static string authInfo;
        
        static GlobalVariable()
        {

           
            //httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic");
            

            httpClient.BaseAddress = new Uri("http://localhost:50555/api/");
            httpClient.DefaultRequestHeaders.Clear();
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            
        }

    }
}