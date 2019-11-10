using Newtonsoft.Json;

namespace Project.Domain.Rest
{
    public class UserRest
    {
        [JsonProperty("sub")]
        public string sub { get; set; }  

        [JsonProperty("email")]
        public string email {get; set;}

        [JsonProperty("preferred_username")]
        public string preferred_username {get; set;}
        
        [JsonProperty("name")]
        public string name {get; set;}

        [JsonProperty("email_verified")]
        public bool email_verified {get; set;}
    }
}