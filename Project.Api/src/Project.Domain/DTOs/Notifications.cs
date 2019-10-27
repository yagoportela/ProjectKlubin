using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project.Domain.DTOs
{
    public class Notifications<T>
    {
        public Notifications(bool status, string erro){
            Status = status;
            Erros.Add(erro);
        }

        public Notifications(bool status, List<string> erro){
            Status = status;
            Erros.AddRange(erro);
        }

        public Notifications(bool status, T result){
            Status = status;
            Result = result;
        }

        public bool Status {get; private set;}
        private List<string> _erros {get; set;}
        public List<string> Erros => _erros == null ? _erros = new List<string>() : _erros;
        public T Result {get; private set;}
    }

    public class Notifications {
        public Notifications(bool status, string erro){
            Status = status;
            Erros.Add(erro);
        }

        public Notifications(bool status, List<string> erro){
            Status = status;
            Erros.AddRange(erro);
        }
        
        public bool Status {get; private set;}
        private List<string> _erros {get; set;}
        public List<string> Erros => _erros == null ? _erros = new List<string>() : _erros;
    }
}