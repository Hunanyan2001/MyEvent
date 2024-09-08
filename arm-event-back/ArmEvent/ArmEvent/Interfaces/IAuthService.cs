using ArmEvent.Models;

public interface IAuthService
{
    // Returns a result indicating the success/failure of the login attempt and any token if applicable
    Task<AuthResult> LoginAsync(LoginModel model);

    // Handles the logout functionality, possibly returning a result or void
    Task LogoutAsync();

    // Returns a result indicating the success/failure of the registration process
    Task<AuthResult> RegisterAsync(RegisterModel model);
}