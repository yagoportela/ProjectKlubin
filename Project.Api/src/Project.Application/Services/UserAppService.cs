using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using MediatR;
using Project.Application.interfaces;
using Project.Domain.DTOs;
using Project.Domain.Entities;
using Project.Domain.Interfaces.Services.User;

namespace Project.Application.Services
{
    public class UserAppService : IUserApplication
    {
        private readonly IUserService _user;
                
        public UserAppService(IUserService user){
            _user = user;
        }

        public Notifications<UserEntity> login1()
        {            
            var teste = new UserEntity();
            teste.ImgPerfil="testenewimagemss.png";
            teste.Tipo=0;
            teste.nome="teste";
            teste.cpf="1646546";
            teste.moedas="21";
            teste.codigoDeBarras="1654646546546545646546545646";
            return new Notifications<UserEntity>(true, teste);
        }

        public UserEntity login(Guid id)
        {
            var resultado = _user.Get(id.ToString());
            return resultado.Result;
        }

        public async Task<Notifications<UserEntity>> Post(UserRegisterDTO userValue)
        {   
            try {
                 if(await _user.CheckedUserName(userValue.username)){
                     return new Notifications<UserEntity>(false, "Username já existe.");
                 }

                 if(await _user.CheckedEmail(userValue.email)){
                     return new Notifications<UserEntity>(false, "E-mail já existe");
                 }

                var result = await _user.PostAuth(userValue);
                
                 if (result.result.value.success == false)
                 {       
                     return new Notifications<UserEntity>(false, result.result.value.errors); 
                 }

                userValue.userEntity.idIdentity = result.data.id;
                var resultUser = await _user.Post(userValue.userEntity);
                
                return new Notifications<UserEntity>(true, resultUser); 
            
            }
            catch (ArgumentException ex) {                
                return new Notifications<UserEntity>(false, ex.Message);
            }
        }
        public async Task<Notifications> Put(Guid id, UserEntity userValue)
        {
            try
            {
                var result = await _user.Put(userValue, id);
                if (result != null)
                {                    
                     return new Notifications(true, "");
                }
                else
                {
                    return new Notifications(false, "Erro na atualização.");
                }

            }
            catch (ArgumentException ex)
            {
                return new Notifications(false, ex.Message);
            }
        }

        public async Task<Notifications<object>> Get(string token)
        {
            try
            {
                var result = await _user.Get(token);
                if (result != null)
                {
                    return new Notifications<object>(true, result);
                }
                else
                {
                    return new Notifications<object>(false, "Erro 500.");
                }

            }
            catch (ArgumentException ex)
            {                
                return new Notifications<object>(false, ex.Message);
            }
        }
    }
}