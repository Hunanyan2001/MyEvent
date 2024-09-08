using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace ArmEvent.Interfaces
{
    public interface IRepository<T> where T : class
    {
        Task AddAsync(T entity);

        void Update(T entity);

        void Remove(T entity);

        Task<T> GetByIdAsync(int id); // If your IDs are always int

        Task<IEnumerable<T>> GetAllAsync();

        Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate);

        Task SaveChangesAsync();
    }
}
