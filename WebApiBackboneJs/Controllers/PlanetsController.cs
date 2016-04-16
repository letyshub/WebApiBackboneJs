using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiBackboneJs.Models;

namespace WebApiBackboneJs.Controllers
{
    public class PlanetsController : ApiController
    {
        private static IList<Planet> planets = new List<Planet>
        {
            new Planet { Id = 1, Name = "Mercury", Diameter = 4878, Orbit = 88, Day = 58.6m },
            new Planet { Id = 2, Name = "Venus", Diameter = 12104, Orbit = 225, Day = 241m },
            new Planet { Id = 3, Name = "Earth", Diameter = 12760, Orbit = 365.4m, Day = 1m },
            new Planet { Id = 4, Name = "Mars", Diameter = 6787, Orbit = 687, Day = 1.01m },
            new Planet { Id = 5, Name = "Jupiter", Diameter = 139822, Orbit = 11.9m * 365, Day = 9.8m / 24.0m }
        };

        [HttpGet]
        [Route("api/planets")]
        public HttpResponseMessage Get()
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, planets);

            return response;
        }

        [HttpGet]
        [Route("api/planets/{id}")]
        public HttpResponseMessage Get(int id)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, planets.FirstOrDefault(x => x.Id == id));

            return response;
        }

        [HttpPost]
        [Route("api/planets")]
        public HttpResponseMessage Post([FromBody]Planet value)
        {
            value.Id = planets.Max(x => x.Id) + 1;
            planets.Add(value);

            return Request.CreateResponse(HttpStatusCode.OK, value);
        }

        [HttpPut]
        [Route("api/planets/{id}")]
        public HttpResponseMessage Put(int id, [FromBody]Planet value)
        {
            Planet planet = planets.FirstOrDefault(x => x.Id == id);
            int index = planets.IndexOf(planet);
            planets[index] = value;

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpDelete]
        [Route("api/planets/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            Planet planet = planets.FirstOrDefault(x => x.Id == id);
            planets.Remove(planet);


            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
