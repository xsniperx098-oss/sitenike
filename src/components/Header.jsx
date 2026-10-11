import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../Styles/Header.css";
import { obterSessaoLocal, sairContaLocal } from "../utils/authLocal";

function Header() {
  const navigate = useNavigate();
  const [termoBusca, setTermoBusca] = useState("");
  const sessao = obterSessaoLocal();

  function buscar(evento) {
    evento.preventDefault();
    const termo = termoBusca.trim();
    if (termo) navigate(`/busca?q=${encodeURIComponent(termo)}`);
  }

  return (
    <header className="header">

      <Link to="/">
        <img
          className="nike-logo"
          src="/src/assets/nike.jpg"
          alt="Nike"
        />
      </Link>

      <nav className="menu">
        <Link to="/masculino">Masculino</Link>
        <Link to="/feminino">Feminino</Link>
        <Link to="/infantil">Infantil</Link>
      </nav>

      <div className="header-right">

        {sessao ? (
          <button
            className="sair-conta"
            type="button"
            onClick={() => {
              sairContaLocal();
              navigate("/login");
            }}
          >
            Sair
          </button>
        ) : (
          <Link className="link-entrar" to="/login">Entrar</Link>
        )}

        <form className="search" onSubmit={buscar} role="search">
          <button type="submit" aria-label="Buscar">⌕</button>
          <input
            type="text"
            placeholder="Buscar"
            value={termoBusca}
            onChange={(evento) => setTermoBusca(evento.target.value)}
          />
        </form>

        <button>♡</button>

        <Link to="/sacola">
          <button>♧</button>
        </Link>

      </div>

    </header>
  );
}

export default Header;
