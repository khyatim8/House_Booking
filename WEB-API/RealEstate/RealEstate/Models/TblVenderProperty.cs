using System;
using System.Collections.Generic;

#nullable disable

namespace RealEstate.Models
{
    public partial class TblVenderProperty
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string PropertyName { get; set; }
        public string PropertyDescription { get; set; }
        public string PropertyImage { get; set; }
        public string PropertySize { get; set; }
        public string Propertylocation { get; set; }
        public int? PropertyPrice { get; set; }
        public int? Discount { get; set; }
    }
}
