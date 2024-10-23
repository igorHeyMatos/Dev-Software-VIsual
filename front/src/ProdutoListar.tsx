import { useEffect } from "react";

function ProdutoListar(){
    useEffect(() => {
        // Função utilizada para executar algum código ao abrir ou renderizar o componente
        fetch("https://viacep.com.br/ws/81210000/json/")
            .then(resposta => {
                return resposta.json();
            })
            .then(cep => {
                console.log(cep);
            })
    });
    return (
        <div>

            <h1>Primeiro Post!</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur debitis earum perspiciatis natus molestias, non quam expedita fugiat saepe suscipit perferendis, iusto itaque nesciunt officiis dicta enim obcaecati nostrum autem!</p>

        </div>
    );
}

export default ProdutoListar;

// 1 - Exibir o alguma informação do CEP no navegador
// 2 - Realizar a requisição para a sua API
// 3 - Resolver o problema de CORS que será mostrado no console
// 4 - Exibir a lista de produtos no navegador