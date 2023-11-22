using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webApp.Models
{
    public class customerSystem
    {

        public int Id { get; set; }
        public int customerId { get; set; }
        public string customerAccess { get; set; }
        public int systemId { get; set; }

        public virtual customer customer { get; set; }
        public virtual systemsDetail systemsDetail { get; set; }

    }
}