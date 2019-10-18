using System.Threading.Tasks;

namespace Onboarding.Framework
{
    public interface IApplicationService
    {
        Task Handle(object command);
    }
}