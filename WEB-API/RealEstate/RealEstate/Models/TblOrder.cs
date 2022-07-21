using System;
using System.Collections.Generic;

#nullable disable

namespace RealEstate.Models
{
    public partial class TblOrder
    {
        public int OrderId { get; set; }
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string PropertyImage { get; set; }
        public string VenderName { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public int? HousePrice { get; set; }
    }
}
