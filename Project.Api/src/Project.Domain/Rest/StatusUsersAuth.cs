using System.Collections.Generic;
using Newtonsoft.Json;

namespace Project.Domain.Rest
{
    public class StatusUsersAuth
    {
        [JsonProperty("success")]
        public bool success { get; set; }  

        [JsonProperty("data")]
        public bool data {get; set;}

        [JsonProperty("errors")]
        public List<string> errors {get; set;}

    }
}