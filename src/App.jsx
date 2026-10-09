import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Masculino from "./components/masculino";
import Feminino from "./components/feminino";
import Infantil from "./components/infantil";
import Sacola from "./components/sacola";
import Pagamento from "./components/pagamento";
import Finalizado from "./components/finalizado";

function Pagina({ titulo }) {
  return (
    <div>
      <h1>{titulo}</h1>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />


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
          element={<Pagina titulo="Produto" />}
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
