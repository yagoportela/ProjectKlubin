﻿using Project.Domain.Abstracts;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Project.Domain.Interfaces
{
    public interface IRepository<T> where T : BaseEntity    {
        Task<T> InsertAsync (T item);
        Task<T> UpdateAsync (T item);
        Task<bool> DeleteAsync (Guid id);
        Task<T> SelectAsync (Guid id);
        Task<IEnumerable<T>> SelectAsync ();
        Task<bool> ExistAsync (Guid id);
    }
}

