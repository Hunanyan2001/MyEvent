using ArmEvent.Context;
using ArmEvent.Interfaces;
using ArmEvent.Models;
using ArmEvent.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ArmEvent.Extensions
{
    public static class ServiceCollectionExtensions
    {
        // Method to add all required services
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            // Register services here
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            // Add controllers if you want to register them in the service collection
            services.AddControllers();

            // Add other necessary configurations
            // For example, adding DbContext or HttpClients, etc.
            // services.AddDbContext<ApplicationDbContext>(options => ...);
            // services.AddHttpClient();

            return services;
        }

        public static IServiceCollection AddDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseMySql(configuration.GetConnectionString("DefaultConnection"),
                    new MySqlServerVersion(new Version(8, 0, 21)) // Specify MySQL version
                ));

            return services;
        }
    }
}
