using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Project.Infra.Data.Context
{
    public class ContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
    {
        public ApplicationDbContext CreateDbContext (string[] args){

            var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();            
            optionsBuilder.UseMySql("Server=localhost;port=3306;DataBase=projectUsers;Uid=root;Pwd=");
            return new ApplicationDbContext (optionsBuilder.Options);

        }

    }
}