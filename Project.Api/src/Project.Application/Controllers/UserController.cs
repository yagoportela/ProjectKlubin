using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Project.Application.interfaces;
using Project.Domain.DTOs;
using Project.Domain.Entities;
using Project.Domain.Interfaces.Services.User;
using Microsoft.AspNetCore.Authorization;
using System.Linq;

namespace Project.Application.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller, IUserApplication
    {
        private readonly IUser _user;
        
        public UserController(IUser user){
            _user = user;
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

            try {
                 if(await _user.CheckedUserName(userValue.username)){

                        return Json(new {
                                success = true,
                                data = false,
                                errors = new string[]{"Este username já existe!"}
                            });
                 }

                 if(await _user.CheckedEmail(userValue.email)){
                        return Json(new {
                            success = true,
                            data = false,
                            errors = new string[]{"Este e-mail já existe!"}
                        });
                 }

                var result = await _user.PostAuth(userValue);
                
                 if (result.result.value.success == false)
                 {       
                     return Json(result);              
                 }

                var resultUser = await _user.Post(userValue.userEntity);
                    return Json(new {
                                success = true,
                                resultUser,
                                result
                            });
            
            }
            catch (ArgumentException ex) {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpPut("{id}")]        
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
        }
    }
}