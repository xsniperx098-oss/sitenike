import "../Styles/Home.css";
import useTamanhoSacola from "../hooks/useTamanhoSacola";
import SeletorTamanho from "./SeletorTamanho";
import { formatarPreco } from "../utils/sacola";
import { produtosHome as produtos } from "../data/catalogo";
import banner from "../assets/banner.jpg";

function Home() {
  const { tamanhoSelecionado, erroTamanho, selecionarTamanho, adicionarNaSacola } =
    useTamanhoSacola();
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

        <div style={{ maxWidth: 190, marginBottom: 10 }}>
          <SeletorTamanho
            label="Escolha o tamanho dos tênis"
            opcoes={[35, 36, 37, 38, 39, 40, 41, 42]}
            valor={tamanhoSelecionado}
            erro={erroTamanho}
            aoSelecionar={selecionarTamanho}
          />
        </div>

        <div className="products-grid">

          {produtos.map((produto, index) => (

            <div className="product" key={index}>

              <div
                className="product-image"
                onClick={() => adicionarNaSacola(produto)}
                onKeyDown={(evento) => {
                  if (evento.key === "Enter" || evento.key === " ") {
                    evento.preventDefault();
                    adicionarNaSacola(produto);
                  }
                }}
                role="button"
                tabIndex={0}
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
