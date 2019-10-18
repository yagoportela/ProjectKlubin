using System.Threading.Tasks;

namespace Onboarding.Framework
{
    public interface IAggregateStore
    {
        Task<bool> Exists<T, TId>(TId aggregateId) where T : AggregateRoot<TId> where TId : Value<TId>;
        
        Task Save<T, TId>(T aggregate) where T : AggregateRoot<TId> where TId : Value<TId>;
        
        Task<T> Load<T, TId>(TId aggregateId) where T : AggregateRoot<TId> where TId : Value<TId>;
    }
}