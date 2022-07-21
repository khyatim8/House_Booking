using System;
using System.Collections.Generic;

#nullable disable

namespace RealEstate.Models
{
    public partial class TblLogin
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int? MobileNumber { get; set; }
        public int? IsAdmin { get; set; }
        public int? IsVender { get; set; }
    }
}
