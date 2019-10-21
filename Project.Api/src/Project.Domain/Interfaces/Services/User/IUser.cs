using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Project.Domain.DTOs;
using Project.Domain.Entities;
using Project.Domain.Interfaces.Services;

namespace Project.Domain.Interfaces.Services.User
{
    public interface IUser : IService<UserEntity>
    {
        Task<UserRestDto> PostAuth(UserRegisterDTO user);
    }
}