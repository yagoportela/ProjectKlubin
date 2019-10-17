using System;
using System.ComponentModel.DataAnnotations;

namespace Project.Domain.Abstracts
{
    public abstract class BaseEntity
    {
        [Key]
        private Guid _id { get; set; }
        public Guid Id
        {
            get {return _id == Guid.Empty ? (_id = Guid.NewGuid()) : _id;  }
            set {_id =_id == null ? Guid.NewGuid() : _id; }
        }

        private bool Ativo { get; set; }
                
        private DateTime? _createAt;
        public DateTime? CreateAt
        {
            get {return _createAt == null ? (_createAt = DateTime.UtcNow) : _createAt;  }
            set {_createAt = (value == null ? DateTime.UtcNow : value);}
        }
        public DateTime? UpdateAt {get; set;}
    }
}