using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using BussinessLogic;
namespace WorkoutApi.Controllers
{
    public class CategoriesController : ApiController
    {

        CasestudylikiEntities objcontext = new CasestudylikiEntities();
        public IHttpActionResult Get()
        {
            return Ok(objcontext.workoutcategories.ToList());
        }



        public IHttpActionResult post(workoutcategory obj)
        {
            objcontext.workoutcategories.Add(obj);
            var rows = objcontext.SaveChanges();
            if (rows > 0)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            else
            {
                return BadRequest("not saved");
            }
        }
                public IHttpActionResult get(int id)
                {
                    var data = objcontext.workoutcategories.Find(id);
                    if (data == null)
                    {
                        return NotFound();
                    }
                    return Ok(data);
                }


                public IHttpActionResult put(workoutcategory obj)
                {
                    objcontext.workoutcategories.Attach(obj);
                    objcontext.Entry(obj).State = System.Data.Entity.EntityState.Modified;
                    var rows = objcontext.SaveChanges();
                    if (rows > 0)
                    {
                        return StatusCode(HttpStatusCode.Accepted);

                    }
                    else
                    {
                        return BadRequest("catagory is not updated");
                    }
                }

                public IHttpActionResult delete(int id)
                {
                    var data = objcontext.workoutcategories.Find(id);
                    if (data == null)

                    {
                        return NotFound();

                    }
                    objcontext.workoutcategories.Remove(data);
                    var rows = objcontext.SaveChanges();
                    if (rows > 0)
                    {
                        return StatusCode(HttpStatusCode.NoContent);

                    }
                    else
                    {
                        return BadRequest("catagories is not deleted");
                    }

                }
                
    }
}
