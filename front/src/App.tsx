import React from 'react';
import ConsultarCEP from './components/samples/ConsultarCEP';
import ProdutoLista from './components/pages/produto/ProdutoLista';
import ProdutoCadastrar from './components/pages/produto/ProdutoCadastrar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pages/produto/listar">Listar Produtos</Link>
          </li>
          <li>
            <Link to="/pages/produto/cadastrar">Cadastrar Produto</Link>
          </li>
          <li>
            <Link to="/pages/endereco/consultar">Consultar Endereço</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<ProdutoLista/>}/>
        <Route path='/pages/produto/listar' element={<ProdutoLista/>}/>
        <Route path='/pages/produto/cadastrar' element={<ProdutoCadastrar/>}/>
        <Route path='/pages/endereco/consultar' element={<ConsultarCEP/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
