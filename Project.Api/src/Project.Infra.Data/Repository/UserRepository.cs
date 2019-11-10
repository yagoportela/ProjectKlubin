using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Project.Domain.Abstracts;
using Project.Domain.Entities;
using Project.Domain.Interfaces.Repository.User;
using Project.Infra.Data.Context;

namespace Project.Infra.Data.Repository
{
    public class UserRepository<T> : BaseRepository<T>, IUserRepository<T> where T : BaseEntity
    {
        public UserRepository(ApplicationDbContext context) : base(context)
        {
        }
        public async Task<UserEntity> ToRecover (string id) {
            try{
                return await base._context.User.SingleOrDefaultAsync(p => p.idIdentity.Equals(id));
            }catch(Exception ex){
                throw ex;
            }            
        }

    }
}