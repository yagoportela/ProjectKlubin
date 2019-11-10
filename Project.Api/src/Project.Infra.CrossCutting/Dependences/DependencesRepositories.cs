using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Project.Domain.Interfaces;
using Project.Domain.Interfaces.Repository.User;
using Project.Infra.Data.Context;
using Project.Infra.Data.Repository;

namespace Project.Infra.CrossCutting.Dependences
{
    public class DependencesRepositories
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped(typeof(IRepository<>), typeof(BaseRepository<>));
            services.AddScoped(typeof(IUserRepository<>), typeof(UserRepository<>));

            services.AddDbContext<ApplicationDbContext> (
                options => options.UseMySql("Server=localhost;port=3306;DataBase=projectUsers;Uid=root;Pwd=")
            );
        }
        
    }
}