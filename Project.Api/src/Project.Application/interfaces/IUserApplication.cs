using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Project.Domain.Entities;

namespace Project.Application.interfaces
{
    public interface IUserApplication
    {
        //IActionResult login();
        Task<ActionResult> Post([FromBody] UserEntity workshopValue);
        Task<ActionResult> Put(Guid id, [FromBody] UserEntity workshopValue);
        Task<ActionResult> Get(Guid id);
    }
}