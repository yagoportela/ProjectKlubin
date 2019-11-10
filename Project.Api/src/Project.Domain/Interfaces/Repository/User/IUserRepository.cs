using System.Threading.Tasks;
using Project.Domain.Abstracts;
using Project.Domain.Entities;

namespace Project.Domain.Interfaces.Repository.User
{
    public interface IUserRepository <T> : IRepository<T> where T : BaseEntity
    {    
         Task<UserEntity> ToRecover (string id);
    }
}