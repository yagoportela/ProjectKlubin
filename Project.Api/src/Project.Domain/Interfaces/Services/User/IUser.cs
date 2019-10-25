
using System.Threading.Tasks;
using Project.Domain.Rest;
using Project.Domain.DTOs;
using Project.Domain.Entities;

namespace Project.Domain.Interfaces.Services.User
{
    public interface IUser : IService<UserEntity>
    {
        Task<RegisterUserRest> PostAuth(UserRegisterDTO user);
        Task<bool> CheckedUserName(string user);
        Task<bool> CheckedEmail(string user);
    }
}