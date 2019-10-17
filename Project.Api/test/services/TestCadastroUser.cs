using System;
using System.Threading.Tasks;
using Moq;
using Project.Domain.Entities;
using Project.Domain.Enum;
using Project.Domain.Interfaces.Services.User;
using Project.Services.Services.User;
using Xunit;

namespace services
{
    public class CadastroUser
    {
        
        [Fact]
        public async Task TestCadastroUser(){

            var _user = new Mock<IUser>();

            var userEntity = new UserEntity();            
            userEntity.Id = Guid.NewGuid();
            userEntity.ImgPerfil = "asdfdsfadsdasds.png";
            userEntity.Tipo = typeUsers.Cliente;
            var inserir = await _user.Object.Post(userEntity);

            var addressEntity = new AddressEntity();
        }
    }
}
