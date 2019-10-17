using FluentValidation;
using Project.Domain.Abstracts;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project.Domain.Interfaces.Services
{
    public interface IService<T> where T : BaseEntity
    {
        Task<T> Post(T obj);
        Task<T> Put(T obj);
        Task<bool> Delete(Guid id);
        Task<T> Get(Guid id);
        Task<IEnumerable<T>> GetAll();
    }
}
