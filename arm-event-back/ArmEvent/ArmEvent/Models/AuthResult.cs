public class AuthResult
{
    public bool IsSuccess { get; set; }
    public string? Token { get; set; } // Optional: JWT token or session ID
    public string? Message { get; set; }
}