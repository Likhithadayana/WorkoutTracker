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
        public IHttpActionResult Get()
        {
            return Ok();
        }
    }
}
