using Microsoft.EntityFrameworkCore;
using SenzoriTemperature.Models;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace SenzoriTemperature.Data
{
    public class SenzorContext:DbContext
    {

        public DbSet<Senzor> Senzori { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB; Database='SenzoriDB';Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");
            }
        }

    }
}
