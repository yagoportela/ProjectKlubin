using System;
using Microsoft.AspNetCore.Mvc;
using Project.Application.interfaces;
using Microsoft.AspNetCore.Authorization;
using Project.Domain.DTOs;
using System.Threading.Tasks;

namespace Project.Klubin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserApplication _user;
        
        public UserController(IUserApplication user){
            _user = user;
        }

        [Route("Login1")]
        [HttpGet]
        public IActionResult login1()
        {
            var valor = _user.login1();
            return Json(valor);
        }

        [Route("Login/{id}")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public IActionResult login(Guid id)
        {
            var resultado = _user.Get(id);
            return Ok(resultado.Result);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] UserRegisterDTO userValue)
        {   
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var resultado = await _user.Post(userValue);
            return Json(new {resultado});
        }

        /*[HttpPut("{id}")]        
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<ActionResult> Put(Guid id, [FromBody] UserEntity userValue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = await _user.Put(userValue, id);
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
                var result = await _user.Get(id);
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
        }*/
    }
}