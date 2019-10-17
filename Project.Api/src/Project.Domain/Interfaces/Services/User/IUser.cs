using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Project.Domain.Entities;
using Project.Domain.Interfaces.Services;

namespace Project.Domain.Interfaces.Services.User
{
    public interface IUser : IService<UserEntity>
    {
    }
}