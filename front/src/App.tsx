import React from 'react';
import ConsultarCEP from './components/samples/ConsultarCEP';
import ProdutoLista from './components/pages/produto/ProdutoLista';
import ProdutoCadastrar from './components/pages/produto/ProdutoCadastrar';

function App() {
  return (
    <div>
      <ProdutoCadastrar/>
      <ProdutoLista/>
    </div>
  );
}

export default App;
