using Microsoft.EntityFrameworkCore;
using Project.Domain.Abstracts;
using Project.Domain.Interfaces;
using Project.Infra.Data.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Infra.Data.Repository
{
   public class BaseRepository<T> : IRepository<T> where T : BaseEntity {

        protected readonly ApplicationDbContext _context;
        private DbSet<T> _dataset;
        public BaseRepository (ApplicationDbContext context) {
            _context = context;
            _dataset = _context.Set<T> ();
        }
        public async Task<bool> DeleteAsync (Guid id) {
            try {
                var result = await _dataset.SingleOrDefaultAsync (p => p.Id.Equals (id));
                if (result == null)
                    return false;

                _dataset.Remove(result);
                await _context.SaveChangesAsync();
                return true;

            } catch (Exception ex) {
                throw ex;
            }
        }

        public async Task<T> InsertAsync (T item) {
            try {
                if (item.Id == Guid.Empty) {
                    item.Id = Guid.NewGuid();
                }

                item.CreateAt = DateTime.UtcNow;
                item.Id = Guid.NewGuid();
                _dataset.Add(item);

                await _context.SaveChangesAsync ();
            } catch (Exception ex) {
                throw ex;
            }

            return item;
        }

        public async Task<bool> ExistAsync (Guid id) {
            return await _dataset.AnyAsync(p => p.Id.Equals(id));
        }
        
        public async Task<T> SelectAsync (Guid id) {
            try {
                return await _dataset.SingleOrDefaultAsync(p => p.Id.Equals (id));
            } catch (Exception ex) {

                throw ex;
            }
        }

        public async Task<IEnumerable<T>> SelectAsync () {
            try {
                return await _dataset.ToListAsync();
            } catch (Exception ex) {
                throw ex;
            }
        }

        public async Task<T> UpdateAsync(T item, Guid id) {
            try {
                var result = await _dataset.SingleOrDefaultAsync(p => p.Id.Equals(id));
                if (result == null)
                    return null;

                item.Id = new Guid(id.ToString());
                item.UpdateAt = DateTime.UtcNow;
                item.CreateAt = result.CreateAt;

                _context.Entry (result).CurrentValues.SetValues(item);
                await _context.SaveChangesAsync ();
            } catch (Exception ex) {
                throw ex;
            }

            return item;
        }
    }
}
