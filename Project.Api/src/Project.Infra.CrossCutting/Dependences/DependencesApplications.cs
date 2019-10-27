using Microsoft.Extensions.DependencyInjection;
using Project.Application.interfaces;
using Project.Application.Services;

namespace Project.Infra.CrossCutting.Dependences
{
    public class DependencesApplications
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IUserApplication, UserAppService>();
        }
    }    
}