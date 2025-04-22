using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Middlewares
{
    public class RequestLogging : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            Console.WriteLine($"HTTP Method: {context.Request.Method}");
            Console.WriteLine($"Path: {context.Request.Path}");
            await next(context);
        }
    }
}
