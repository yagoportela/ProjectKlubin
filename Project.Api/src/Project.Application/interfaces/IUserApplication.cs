using System;
using System.Threading.Tasks;
using Project.Domain.DTOs;
using Project.Domain.Entities;

namespace Project.Application.interfaces
{
    public interface IUserApplication
    {
        //IActionResult login();
        Task<Notifications<UserEntity>> Post(UserRegisterDTO workshopValue);
        Task<Notifications> Put(Guid id, UserEntity workshopValue);
        Task<Notifications> Get(Guid id);
        Notifications<UserEntity>  login1();
        UserEntity login(Guid id);
    }
}