using ArmEvent.Models;

namespace ArmEvent.Services
{
    public class AuthService : IAuthService
    {
        public async Task<AuthResult> LoginAsync(LoginModel model)
        {
            throw new NotImplementedException();
        }

        public Task LogoutAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<AuthResult> RegisterAsync(RegisterModel model)
        {
            throw new NotImplementedException();
        }
    }
}
