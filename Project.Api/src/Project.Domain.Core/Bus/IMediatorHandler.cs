using System.Threading.Tasks;
using Project.Domain.Core.Commands;
using Project.Domain.Core.Events;

namespace Project.Domain.Core.Bus
{
    public interface IMediatorHandler
    {
        Task<bool> SendCommand<T>(T command) where T : Command;
        Task RaiseEvent<T>(T @event) where T : Event;
    }
}
