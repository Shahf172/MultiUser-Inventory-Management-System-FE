using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webApp.Models
{
    public class adminSystem
    {
        public int Id { get; set; }
        public int adminId { get; set; }
        public int sysId { get; set; }

        public virtual customersAdmin customersAdmin { get; set; }
        public virtual systemsDetail systemsDetail { get; set; }

    }
}