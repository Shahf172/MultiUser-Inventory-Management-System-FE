﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webApp.Models
{
    public class detailBySysIdDTO
    {
        public int sysId { get; set; }
        public Nullable<long> partType { get; set; }
        public Nullable<long> serial { get; set; }
        public string qrCode { get; set; }
        public string modelNo { get; set; }
        public string productId { get; set; }
        public int adminId { get; set; }
        public int customerId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string userName { get; set; }
        public string designation { get; set; }
        public string email { get; set; }
    }
}