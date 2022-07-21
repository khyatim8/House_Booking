using RealEstate.Interfaces;
using RealEstate.Models;
using RealEstate.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealEstate.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        RealEstateDbContext db;
        IJWTMangerRepository iJWTMangerRepository;
        public LoginController(RealEstateDbContext _db, IJWTMangerRepository _iJWTMangerRepository)
        {
            db = _db;
            iJWTMangerRepository = _iJWTMangerRepository;
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login(LoginViewModel loginViewModel)
        {
            var token = iJWTMangerRepository.Authenicate(loginViewModel, false);
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register(RegisterViewModel registerViewModel)
        {
            LoginViewModel login = new LoginViewModel();
            login.UserName = registerViewModel.UserName;
            login.Password = registerViewModel.Password;
            login.Email = registerViewModel.Email;
            login.MobileNumber = registerViewModel.MobileNumber;
            login.IsVender = registerViewModel.IsVender;

            var token = iJWTMangerRepository.Authenicate(login, true);
            if (token.IsUserExits)
            {
                return Ok("User already exists");
            }
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }

    }
}