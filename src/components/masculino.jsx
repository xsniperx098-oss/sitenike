
import "../Styles/Masculino.css";
import { useNavigate } from "react-router-dom";

import tenis1 from "../assets/tenis1.jpg";
import tenis2 from "../assets/tenis2.jpg";
import tenis3 from "../assets/tenis3.jpg";
import tenis4 from "../assets/tenis4.jpg";
import tenis5 from "../assets/tenis5.jpg";
import tenis6 from "../assets/tenis6.jpg";

const produtos = [
  {
    id: "tenis-1",
    nome: "Nike Air Max 90",
    categoria: "Lifestyle",
    preco: 399.99,
    imagem: tenis1,
  },
  {
    id: "tenis-2",
    nome: "Nike Air Force 1",
    categoria: "Lifestyle",
    preco: 399.99,
    imagem: tenis2,
  },
  {
    id: "tenis-3",
    nome: "Nike Court Vision Low",
    categoria: "Lifestyle",
    preco: 399.99,
    imagem: tenis3,
  },
  {
    id: "tenis-4",
    nome: "Nike Revolution 7",
    categoria: "Corrida",
    preco: 399.99,
    imagem: tenis4,
  },
  {
    id: "tenis-5",
    nome: "Nike Waffle Debut",
    categoria: "Lifestyle",
    preco: 399.99,
    imagem: tenis5,
  },
  {
    id: "tenis-6",
    nome: "Nike Air Jordan 1",
    categoria: "Lifestyle",
    preco: 399.99,
    imagem: tenis6,
  },
];

function Masculino() {
  const navigate = useNavigate();

  function adicionarNaSacola(produto) {
    let sacola = [];

    try {
      const dados = JSON.parse(
        localStorage.getItem("sacola") || "[]"
      );

      if (Array.isArray(dados)) {
        sacola = dados;
      }
    } catch {
      sacola = [];
    }

    const existente = sacola.find(
      (item) => item.id === produto.id
    );

    if (existente) {
      sacola = sacola.map((item) =>
        item.id === produto.id
          ? {
              ...produto,
              ...item,
              imagem: produto.imagem,
              nome: produto.nome,
              preco: produto.preco,
              quantidade: Number(item.quantidade || 1) + 1,
            }
          : item
      );
    } else {
      sacola.push({
        ...produto,
        quantidade: 1,
        tamanho: "40",
      });
    }

    localStorage.setItem("sacola", JSON.stringify(sacola));

    navigate("/sacola");
  }

  return (
    <main className="masculino">
      <div className="breadcrumb-masculino">
        InÃ­cio / Masculino / TÃªnis
      </div>

      <div className="titulo-masculino">
        <h1>TÃŠNIS MASCULINOS</h1>
        <p>Encontre o seu prÃ³ximo par</p>
      </div>

      <div className="conteudo-masculino">
        <aside className="filtros-masculino">
          <h2>Filtros</h2>

          <div className="filtro-masculino">
            <h3>Categoria</h3>
            <label><input type="checkbox" /> Lifestyle</label>
            <label><input type="checkbox" /> Treino</label>
            <label><input type="checkbox" /> Basquete</label>
            <label><input type="checkbox" /> Corrida</label>
          </div>

          <div className="filtro-masculino">
            <h3>Tamanho</h3>
            <div className="tamanhos-masculino">
              {[35, 36, 37, 38, 39, 40, 41, 42].map((tamanho) => (
                <button key={tamanho}>{tamanho}</button>
              ))}
            </div>
          </div>

          <div className="filtro-masculino">
            <h3>PreÃ§o</h3>
            <input
              className="preco-masculino"
              type="text"
              placeholder="R$ 0,00"
            />
            <input
              className="preco-masculino"
              type="text"
              placeholder="R$ 999,99"
            />
          </div>
        </aside>

        <section className="produtos-masculino">
          {produtos.map((produto) => (
            <article
              className="produto-card-masculino"
              key={produto.id}
            >
              <div
                className="produto-imagem-masculino"
                onClick={() => adicionarNaSacola(produto)}
                style={{ cursor: "pointer" }}
              >
                <img src={produto.imagem} alt={produto.nome} />
              </div>

              <h3>{produto.nome}</h3>
              <p>{produto.categoria}</p>

              <strong>
                {produto.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Masculino;
