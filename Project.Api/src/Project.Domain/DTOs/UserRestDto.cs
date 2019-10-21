using System.Collections.Generic;
using Newtonsoft.Json;

namespace Project.Domain.DTOs
{
    public class UserRestDto
    {
        [JsonProperty("success")]
        public bool success { get; set; }  

        [JsonProperty("data")]
        public bool data {get; set;}

        [JsonProperty("errors")]
        public List<string> error {get; set;}
    }
}