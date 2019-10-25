using System;
using System.Net;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Project.Application.interfaces;
using Project.Domain.Core.Bus;
using Project.Domain.Core.Notifications;
using Project.Domain.DTOs;
using Project.Domain.Entities;
using Project.Domain.Interfaces.Services.User;

namespace Project.Application.Services
{
    public class User : IUserApplication
    {
        private readonly IUser _user;
        internal readonly IMediatorHandler _bus;
        private readonly DomainNotificationHandler _notifications;
                
        public User(IUser user, IMediatorHandler bus, INotificationHandler<DomainNotification> notifications){
            _user = user;
            _bus = bus;
            _notifications = (DomainNotificationHandler)notifications;
        }

        public UserEntity login(Guid id)
        {
            var resultado = _user.Get(id);
            return resultado.Result;
        }

        [HttpPost]
        public async Task<bool> Post([FromBody] UserRegisterDTO userValue)
        {   
            try {
                 if(await _user.CheckedUserName(userValue.username)){
                    await _bus.RaiseEvent(new DomainNotification("1001", "Username já existe."));
                 }

                 if(await _user.CheckedEmail(userValue.email)){
                    await _bus.RaiseEvent(new DomainNotification("1001", "E-mail já existe"));
                 }

                var result = await _user.PostAuth(userValue);
                
                 if (result.result.value.success == false)
                 {       
                     //return Json(result); 
                     return true;             
                 }

                var resultUser = await _user.Post(userValue.userEntity);
                    // return Json(new {
                    //             success = true,
                    //             resultUser,
                    //             result
                    //         });
                    return true;
            
            }
            catch (ArgumentException ex) {
                await _bus.RaiseEvent(new DomainNotification("" + HttpStatusCode.InternalServerError, ex.Message));
                return false;
            }
        }
        public async Task<bool> Put(Guid id, [FromBody] UserEntity userValue)
        {
            try
            {
                var result = await _user.Put(userValue, id);
                if (result != null)
                {
                    //return Ok(result);
                    return true;
                }
                else
                {
                    await _bus.RaiseEvent(new DomainNotification("" + HttpStatusCode.InternalServerError, "Erro na atualização."));
                    return false;
                }

            }
            catch (ArgumentException ex)
            {
                await _bus.RaiseEvent(new DomainNotification("" + HttpStatusCode.InternalServerError, ex.Message));
                return false;
            }
        }

        public async Task<bool> Get(Guid id)
        {
            try
            {
                var result = await _user.Get(id);
                if (result != null)
                {
                    return true;
                    //return Ok(result);
                }
                else
                {
                    await _bus.RaiseEvent(new DomainNotification("" + HttpStatusCode.InternalServerError, "Erro na atualização.")); 
                    return false;
                }

            }
            catch (ArgumentException ex)
            {                
                await _bus.RaiseEvent(new DomainNotification("" + HttpStatusCode.InternalServerError, ex.Message));
                return false;
            }
        }
    }
}