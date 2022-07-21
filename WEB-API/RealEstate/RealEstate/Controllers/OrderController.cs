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
    public class OrderController : ControllerBase
    {
        RealEstateDbContext db = new RealEstateDbContext();
        [HttpGet]
        public List<TblOrder> Get()
        {
            return db.TblOrders.ToList();
        }

        [HttpPost]
        public string Post([FromBody] TblOrder order)
        {

            db.TblOrders.Add(order);
            db.SaveChanges();
            return "success";
        }

        [HttpPut]
        public string Put([FromBody] TblOrder tblorder)
        {

            var tblsampleObj = db.TblOrders.Where(x => x.OrderId == tblorder.OrderId);
            if (tblsampleObj != null)
            {
                db.TblOrders.Update(tblorder);
                db.SaveChanges();
                return "Success";
            }

            return "Fail";
        }

        [HttpDelete]
        public string Delete([FromBody] int OrderId)
        {

            var tblsampleObj = db.TblOrders.Where(x => x.OrderId == OrderId).FirstOrDefault();
            if (tblsampleObj != null)
            {
                db.TblOrders.Remove(tblsampleObj);
                db.SaveChanges();
                return "Success";
            }

            return "Fail";
        }


    }
}
