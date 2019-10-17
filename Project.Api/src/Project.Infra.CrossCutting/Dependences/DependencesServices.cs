using Microsoft.Extensions.DependencyInjection;
using Project.Domain.Entities;
using Project.Domain.Interfaces.Services.User;
using Project.Services.Services.User;

namespace Project.Infra.CrossCutting.Dependences
{
    public class DependencesServices
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IUser, UserServices>();
        }
    }
}