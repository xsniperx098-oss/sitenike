import { Link } from "react-router-dom";
import "../Styles/Header.css";

function Header() {
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

        <div className="search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Buscar"
          />
        </div>

        <button>♡</button>

        <Link to="/sacola">
          <button>♧</button>
        </Link>

      </div>

    </header>
  );
}

export default Header;