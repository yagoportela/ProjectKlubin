using System.Collections.Generic;
using Newtonsoft.Json;

namespace Project.Domain.Rest
{
    public class RegisterUserRest
    {
        [JsonProperty("result")]
        public RestUserResult result { get; set; }  

        [JsonProperty("data")]
        public RestUserData data {get; set;}
    }

    public class RestUserData 
    {        
        [JsonProperty("email")]
        public string email {get; set;}

        [JsonProperty("name")]
        public string name {get; set;}

        [JsonProperty("userName")]
        public string userName {get; set;}

        [JsonProperty("id")]
        public string id {get; set;}

    }

        public class RestUserResult
    {        
        [JsonProperty("value")]
        public RestUserValue value {get; set;}

    }

    public class RestUserValue
    {        
        [JsonProperty("success")]
        public bool success {get; set;}

        [JsonProperty("data")]
        public bool data {get; set;}

        [JsonProperty("errors")]
        public List<string> errors {get; set;}

    }
}