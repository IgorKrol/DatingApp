using System.Threading.Tasks;
using Entities;

namespace API.Interfaces
{
    public interface ITokenService
    {
        Task<string> CreateToken(AppUser user);
    }
}