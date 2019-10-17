using Project.Domain.Enum;
using Project.Domain.Abstracts;

namespace Project.Domain.Entities
{
    public class UserEntity : BaseEntity
    {
        public string ImgPerfil { get; set; }
        public typeUsers Tipo {get; set;}    
        public string nome {get; set;}
        public string cpf {get; set;}
        public string moedas {get; set;}
        public string codigoDeBarras {get; set;}

        
    }
}

