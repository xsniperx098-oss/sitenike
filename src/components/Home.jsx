import "../Styles/Home.css";
import { useNavigate } from "react-router-dom";
import { adicionarProdutoNaSacola, formatarPreco } from "../utils/sacola";

import banner from "../assets/banner.jpg";
import tenis1 from "../assets/tenis1.jpg";
import tenis2 from "../assets/tenis2.jpg";
import tenis3 from "../assets/tenis3.jpg";

function Home() {
  const navigate = useNavigate();
  const produtos = [
    {
      id: "home-tenis-1",
      imagem: tenis1,
      nome: "Nike Air Zoom Pegasus",
      categoria: "Lifestyle",
      preco: 399.99,
    },
    {
      id: "home-tenis-2",
      imagem: tenis2,
      nome: "Nike Air Max 90",
      categoria: "Lifestyle",
      preco: 399.99,
    },
    {
      id: "home-tenis-3",
      imagem: tenis3,
      nome: "Nike Blazer Mid 77",
      categoria: "Lifestyle",
      preco: 399.99,
    },
  ];

  function adicionarNaSacola(produto) {
    adicionarProdutoNaSacola({ ...produto, tamanho: "40" });
    navigate("/sacola");
  }

  return (
    <main>

      {/* BANNER */}

      <section
        className="hero"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1>
            SEU PRÓXIMO
            <br />
            MOVIMENTO.
          </h1>

          <p>
            Não importa de onde você parte.
            <br />
            O que importa é o que vem a seguir.
          </p>

          <button>
            Explorar coleção
          </button>

        </div>

      </section>

      {/* PRODUTOS */}

      <section className="products">

        <div className="products-header">

          <h2>
            Encontre seu próximo movimento
          </h2>

          <a href="#">
            Ver todos <span>→</span>
          </a>

        </div>

        <div className="products-grid">

          {produtos.map((produto, index) => (

            <div className="product" key={index}>

              <div
                className="product-image"
                onClick={() => adicionarNaSacola(produto)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                />
              </div>

              <div className="product-info">

                <div>
                  <h3>{produto.nome}</h3>
                  <p>{produto.categoria}</p>
                </div>

                <strong>
                  {formatarPreco(produto.preco)}
                </strong>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default Home;
