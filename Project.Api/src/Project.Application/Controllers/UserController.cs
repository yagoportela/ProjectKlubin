using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Project.Application.interfaces;
using Project.Domain.Entities;
using Project.Domain.Interfaces.Services.User;
using System.Linq;

namespace Project.Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller, IUserApplication
    {
        private readonly IUser _workshop;
        
        public UserController(IUser workshop){
            _workshop = workshop;
        }

        [Route("Login/{id}")]
        public IActionResult login(Guid id)
        {
            var resultado = _workshop.Get(id);
            return Ok(resultado.Result);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] UserEntity workshopValue)
        {   
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            try {
                var result = await _workshop.Post(workshopValue);
                
                if (result != null)
                {
                    return Json(new {
                                Status = true,
                                result
                            });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (ArgumentException ex) {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(Guid id, [FromBody] UserEntity workshopValue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = await _workshop.Put(workshopValue, id);
                if (result != null)
                {
                    return Ok(result);
                }
                else
                {
                    return BadRequest();
                }

            }
            catch (ArgumentException e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, e.Message);
            }
        }

        [HttpGet]
        public async Task<ActionResult> Get(Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = await _workshop.Get(id);
                if (result != null)
                {
                    return Ok(result);
                }
                else
                {
                    return BadRequest();
                }

            }
            catch (ArgumentException e)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, e.Message);
            }
        }
    }
}