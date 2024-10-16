using System.Runtime.ConstrainedExecution;
using API.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();
var app = builder.Build();

app.MapGet("/olamundo", () => "Ola mundo");

app.MapPost("/api/produto/cadastrar", ([FromBody] Produto produto, [FromServices] AppDataContext ctx) =>
{
    ctx.Produtos.Add(produto);
    ctx.SaveChanges();
    return Results.Created("", produto);
});

app.MapGet("/api/produto/listar", ([FromServices] AppDataContext ctx) =>
{

    if (ctx.Produtos.Any())
    {
        return Results.Ok(ctx.Produtos.ToList());
    }
    return Results.NotFound();

});

app.MapGet("/api/produto/buscar/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{

    Produto? produto = ctx.Produtos.Find(id);
    if (produto is null)
    {
        return Results.NotFound();
    }
    return Results.Ok(produto);

});

app.MapDelete("/api/produto/deletar/{id}", ([FromRoute] int id, [FromServices] AppDataContext ctx) =>
{

    Produto? produto = ctx.Produtos.Find(id);
    if (produto is null)
    {
        return Results.NotFound();
    }
    ctx.Produtos.Remove(produto);
    ctx.SaveChanges();
    return Results.Ok(produto);

});

app.MapPut("/api/produto/alterar/{id}", ([FromBody] Produto produtoAlterado, [FromRoute] int id, [FromServices] AppDataContext ctx) =>
{

    Produto? produto = ctx.Produtos.Find(id);
    if (produto is null)
    {
        return Results.NotFound();
    }
    produto.Nome = produtoAlterado.Nome;
    produto.Descricao = produtoAlterado.Descricao;
    ctx.Produtos.Update(produto);
    ctx.SaveChanges();
    return Results.Ok(produto);

});

app.Run();
