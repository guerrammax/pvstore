using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace pvstore.web
{
    public class Program
    {

        public static void Main(string[] args)
        {
            BuilWebHost(args).Run();
        }

        public static IWebHost BuilWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>().Build();




        
        // public static void Main(string[] args)
        // {
        //     CreateWebHostBuilder(args).Build().Run();
        // }

        // public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
        //     WebHost.CreateDefaultBuilder(args)
        //         .UseStartup<Startup>();
    }
}
