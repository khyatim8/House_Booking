using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RealEstate.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealEstate.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        RealEstateDbContext db = new RealEstateDbContext();
        [HttpGet]
        public List<TblProperty> Get()
        {
            return db.TblProperties.ToList();
        }


        [HttpPost]
        public string Post([FromBody] TblProperty property)
        {

            db.TblProperties.Add(property);
            db.SaveChanges();
            return "success";
        }
        [HttpPut]
        public string Put([FromBody] TblProperty tblpropty)
        {

            var tblsampleObj = db.TblProperties.Where(x => x.Id == tblpropty.Id);
            if (tblsampleObj != null)
            {
                db.TblProperties.Update(tblpropty);
                db.SaveChanges();
                return "Success";
            }

            return "Fail";
        }

        [HttpDelete]
        public string Delete([FromBody] int Id)
        {

            var tblsampleObj = db.TblProperties.Where(x => x.Id == Id).FirstOrDefault();
            if (tblsampleObj != null)
            {
                db.TblProperties.Remove(tblsampleObj);
                db.SaveChanges();
                return "Success";
            }

            return "Fail";
        }


    }
}
