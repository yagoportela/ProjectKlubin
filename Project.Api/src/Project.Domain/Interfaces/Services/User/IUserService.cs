
using System.Threading.Tasks;
using Project.Domain.Rest;
using Project.Domain.DTOs;
using Project.Domain.Entities;
using System;

namespace Project.Domain.Interfaces.Services.User
{
    public interface IUserService : IService<UserEntity>
    {
        Task<RegisterUserRest> PostAuth(UserRegisterDTO user);
        Task<int> AdicionarMoedas(UserEntity user, int quantidade);
        Task<bool> CheckedUserName(string user);
        Task<bool> CheckedEmail(string user);
        Task<UserEntity> GetUser(string id);
    }
}