using SenzoriTemperature.Services;
using Middlewares;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddTransient<ISenzorRepository, SQLSenzorRepository>();
builder.Services.AddControllers();
builder.Services.AddTransient<RequestLogging>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                      .AllowAnyMethod()
                      .AllowAnyHeader());
});

var app = builder.Build();

app.UseMiddleware<RequestLogging>();

app.Run(async (HttpContext context) =>
{
    Console.WriteLine($"Request end.\n");
});

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
