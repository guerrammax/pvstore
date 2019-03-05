using Microsoft.EntityFrameworkCore;

namespace pvstore.web.Models
{
    public class AplicationDbContext :DbContext
    {
          public AplicationDbContext(DbContextOptions<AplicationDbContext> options)
        : base(options)
        {

        }

        //Creatin Roles for or appLocation
       
       public DbSet<Persona> Personas {get;set;}
       public DbSet<Direccion> Direccions { get; set; }

    }
}