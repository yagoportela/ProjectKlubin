using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Project.Domain.DTOs;
using Project.Domain.Rest;
using Project.Domain.Entities;
using Project.Domain.Interfaces;
using Project.Domain.Interfaces.Services.User;

namespace Project.Services.Services.User
{
    public class UserServices : IUser
    {
        private readonly IRepository<UserEntity> _repository;

        public UserServices(IRepository<UserEntity> repository){
            _repository = repository;
        }

        public async Task<bool> Delete (Guid id) {
            return await _repository.DeleteAsync (id);
        }

        public async Task<UserEntity> Get (Guid id) {
            return await _repository.SelectAsync (id);
        }

        public async Task<IEnumerable<UserEntity>> GetAll () {
            return await _repository.SelectAsync ();
        }

        public async Task<UserEntity> Post (UserEntity user) {
            return await _repository.InsertAsync (user);
        }
        
        public async Task<UserEntity> Put (UserEntity user, Guid id) {
            return await _repository.UpdateAsync (user, id);
        }

        public async Task<RegisterUserRest> PostAuth (UserRegisterDTO user) {
            
            using (HttpClient client = new HttpClient())
            {  
                var content = new StringContent(JsonConvert.SerializeObject(user),
                                                Encoding.UTF8,
                                                "application/json");

                content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

                HttpResponseMessage response = client.PostAsync("http://localhost:5003/User/register-user",
                                                    content).Result;
                
                string conteudo = await response.Content.ReadAsStringAsync();
                var conteudoJson = JsonConvert.DeserializeObject<RegisterUserRest>(conteudo);

                return conteudoJson;
            }

        }

        public async Task<bool> CheckedUserName(string username)
        {
            using (HttpClient client = new HttpClient()){

                HttpResponseMessage response = await client.GetAsync($"http://localhost:5003/User/checkUsername/?username={username}");
                
                string conteudo = await response.Content.ReadAsStringAsync();
                var conteudoJson = JsonConvert.DeserializeObject<StatusUsersAuth>(conteudo);

                if(conteudoJson.success == true && conteudoJson.data == true){
                    return true;
                }

                return false;
            }
        }

        public async Task<bool> CheckedEmail(string email)
        {
            using (HttpClient client = new HttpClient()){

                HttpResponseMessage response = await client.GetAsync($"http://localhost:5003/User/checkEmail/?email={email}");
                
                string conteudo = await response.Content.ReadAsStringAsync();
                var conteudoJson = JsonConvert.DeserializeObject<StatusUsersAuth>(conteudo);

                if(conteudoJson.success == true && conteudoJson.data == true){
                    return true;
                }

                return false;
            }
        }
        
    }
}