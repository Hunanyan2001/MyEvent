using ArmEvent.Context;
using ArmEvent.Interfaces;
using System.Linq.Expressions;

namespace ArmEvent.Services
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly ApplicationDbContext _dbContext; 

        public Repository(ApplicationDbContext dbContext) 
        {
            _dbContext = dbContext;        
        }
        public async Task AddAsync(T entity)
        {
            await _dbContext.Set<T>().AddAsync(entity);
            await SaveChangesAsync();
        }

        public async  Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public  void Remove(T entity)
        {
            throw new NotImplementedException();
        }

        public async Task SaveChangesAsync()
        {
            throw new NotImplementedException();
        }

        public  void Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
