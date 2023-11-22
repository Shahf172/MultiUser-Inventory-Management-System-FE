using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webApp.Models
{
    public class userSystem
    {
        public int customerId { get; set; }
        public string userName { get; set; }
        public string designation { get; set; }
        public string customerAccess { get; set; }
        public int Id { get; set; }
        public string qrCode { get; set; }
    }
}