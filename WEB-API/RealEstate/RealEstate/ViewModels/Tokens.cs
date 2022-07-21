using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealEstate.ViewModels
{
    public class Tokens
    {
        public string Token { get; set; }

        public string RefreshToken { get; set; }

        public bool IsAdmin { get; set; }
        public bool IsVender { get; set; }

        public bool IsUserExits { get; set; }
    }
}
