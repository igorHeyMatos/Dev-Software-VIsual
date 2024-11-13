import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";

function ProdutoCadastrar(){

    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [quantidade, setQuantidade] = useState<string>('');

    function digitarNome(e : any){
        setNome(e.target.value);
    }

    function enviarProduto(e : any){
        e.preventDefault();

        const produto : Produto = {
            nome : nome,
            descricao : descricao,
            preco : Number(preco),
            quantidade : Number(quantidade)
        }

        fetch("http://localhost:5020/api/produto/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
            })
            .then(resposta => {
                return resposta.json();
            })
            .then(produto => {
                console.log("Produto cadastrado!", produto)
            })

    }

    return (
        <div id="cadastrar_produto">
            <h1>Produto Cadastrar</h1>

            <form onSubmit={enviarProduto}>
                <div className="divs">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" onChange={(e : any) => setNome(e.target.value)}  />
                </div>
                
                <div className="divs">
                    <label htmlFor="descricao">Descrição:</label>
                    <input type="text" id="descricao" name="descricao" onChange={(e : any) => setDescricao(e.target.value)}  />
                </div>

                <div className="divs">
                    <label htmlFor="preco">Preço:</label>
                    <input type="number" id="preco" name="preco" onChange={(e : any) => setPreco(e.target.value)}  />
                </div>

                <div className="divs">
                    <label htmlFor="quantidade">Quantidade:</label>
                    <input type="number" id="quantidade" name="quantidade" onChange={(e : any) => setQuantidade(e.target.value)}  />
                </div>

                <div>
                    <label htmlFor="categoria">Categorias</label>
                    <select onChange={(e : any) => console.log(e.target.value)}>
                        <option value="1">Tecnologia</option>
                        <option value="2">Roupas</option>
                        <option value="3">Acessorios</option>
                    </select>
                </div>
                

                <button type="submit" id="btn_cadastrar">Cadastrar</button>
            </form>
        </div>
    );
}

export default ProdutoCadastrar;