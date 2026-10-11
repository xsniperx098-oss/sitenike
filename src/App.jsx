import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Masculino from "./components/masculino";
import Feminino from "./components/feminino";
import Infantil from "./components/infantil";
import Sacola from "./components/sacola";
import Pagamento from "./components/pagamento";
import Finalizado from "./components/finalizado";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Busca from "./components/Busca";

function HeaderDaLoja() {
  const { pathname } = useLocation();
  if (pathname === "/login" || pathname === "/cadastro") return null;
  return <Header />;
}

function App() {
  return (
    <BrowserRouter>

      <HeaderDaLoja />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/busca" element={<Busca />} />


        {/* CATEGORIAS */}
        <Route
          path="/masculino"
          element={<Masculino />}
        />

        <Route
          path="/feminino"
          element={<Feminino />}
        />

        <Route
          path="/infantil"
          element={<Infantil />}
        />


        {/* PRODUTO */}
        <Route
          path="/produto"
          element={<div><h1>Produto</h1></div>}
        />


        {/* SACOLA */}
        <Route
          path="/sacola"
          element={<Sacola />}
        />


        {/* PAGAMENTO */}
        <Route
          path="/pagamento"
          element={<Pagamento />}
        />


       {/* PAGAMENTO FINALIZADO */}
<Route
  path="/pagamento-finalizado"
  element={<Finalizado />}
/>
        

      </Routes>

    </BrowserRouter>
  );
}


export default App;
