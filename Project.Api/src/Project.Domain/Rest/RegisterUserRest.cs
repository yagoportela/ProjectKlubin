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
        public RestUserData email {get; set;}

        [JsonProperty("name")]
        public RestUserData name {get; set;}

        [JsonProperty("userName")]
        public RestUserData userName {get; set;}

        [JsonProperty("id")]
        public RestUserData id {get; set;}

    }

        public class RestUserResult
    {        
        [JsonProperty("value")]
        public RestUserValue value {get; set;}

    }

    public class RestUserValue
    {        
        [JsonProperty("email")]
        public bool success {get; set;}

        [JsonProperty("name")]
        public bool data {get; set;}

        [JsonProperty("userName")]
        public List<string> errors {get; set;}

    }
}