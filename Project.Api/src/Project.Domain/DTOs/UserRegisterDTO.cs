using Project.Domain.Entities;
using Project.Domain.Enum;

namespace Project.Domain.DTOs
{
    public class UserRegisterDTO 
    {   
        public UserEntity userEntity;
        public string email {get; set;}
        public string Password {get; set;}
        public string ConfirmPassword {get; set;}
        public string phoneNumber {get; set;}
        public string name {get; set;}
        public string username {get; set;}
        public string picture {get; set;}
        public string provider {get; set;}
        public string providerId {get; set;}

    }
}