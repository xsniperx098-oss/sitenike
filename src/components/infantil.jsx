import "../Styles/infantil.css";
import { useNavigate } from "react-router-dom";
import { adicionarProdutoNaSacola, formatarPreco } from "../utils/sacola";

import tenis1 from "../assets/tenis1.jpg";
import tenis2 from "../assets/tenis2.jpg";
import tenis3 from "../assets/tenis3.jpg";

function Infantil() {
  const navigate = useNavigate();
  const produtos = [
    {
      id: "infantil-tenis-1",
      nome: "Nike Revolution 7",
      categoria: "Infantil",
      preco: 299.99,
      imagem: tenis1,
    },
    {
      id: "infantil-tenis-2",
      nome: "Nike Air Max SC",
      categoria: "Infantil",
      preco: 299.99,
      imagem: tenis2,
    },
    {
      id: "infantil-tenis-3",
      nome: "Nike Court Borough",
      categoria: "Infantil",
      preco: 299.99,
      imagem: tenis3,
    },
    {
      id: "infantil-tenis-4",
      nome: "Nike Flex Runner",
      categoria: "Infantil",
      preco: 279.99,
      imagem: tenis1,
    },
    {
      id: "infantil-tenis-5",
      nome: "Nike Star Runner",
      categoria: "Infantil",
      preco: 279.99,
      imagem: tenis2,
    },
    {
      id: "infantil-tenis-6",
      nome: "Nike Air Jordan 1",
      categoria: "Infantil",
      preco: 399.99,
      imagem: tenis3,
    },
  ];

  function adicionarNaSacola(produto) {
    adicionarProdutoNaSacola({ ...produto, tamanho: "30" });
    navigate("/sacola");
  }

  return (
    <main className="infantil">

      <div className="breadcrumb-infantil">
        Início / Infantil / Tênis
      </div>

      <div className="titulo-infantil">
        <h1>TÊNIS INFANTIS</h1>
        <p>Encontre o próximo par dos pequenos</p>
      </div>

      <div className="conteudo-infantil">

        {/* FILTROS */}
        <aside className="filtros-infantil">

          <h2>Filtros</h2>

          <div className="filtro-infantil">
            <h3>Categoria</h3>

            <label>
              <input type="checkbox" /> Lifestyle
            </label>

            <label>
              <input type="checkbox" /> Treino
            </label>

            <label>
              <input type="checkbox" /> Corrida
            </label>
          </div>

          <div className="filtro-infantil">
            <h3>Tamanho</h3>

            <div className="tamanhos-infantil">
              <button>28</button>
              <button>29</button>
              <button className="selecionado">30</button>
              <button>31</button>
              <button>32</button>
              <button>33</button>
              <button>34</button>
              <button>35</button>
            </div>
          </div>

          <div className="filtro-infantil">
            <h3>Cor</h3>

            <div className="cores-infantil">
              <span className="cor-infantil preta"></span>
              <span className="cor-infantil vermelha"></span>
              <span className="cor-infantil cinza"></span>
              <span className="cor-infantil verde"></span>
            </div>
          </div>

          <div className="filtro-infantil">
            <h3>Preço</h3>

            <input
              className="preco-infantil"
              type="text"
              placeholder="R$ 0,00"
            />

            <input
              className="preco-infantil"
              type="text"
              placeholder="R$ 999,99"
            />
          </div>

        </aside>

        {/* PRODUTOS */}
        <section className="produtos-infantil">

          {produtos.map((produto) => (
            <div
              className="produto-card-infantil"
              key={produto.id}
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
              <div className="produto-imagem-infantil">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                />
              </div>

              <h3>{produto.nome}</h3>

              <p>{produto.categoria}</p>

              <strong>{formatarPreco(produto.preco)}</strong>

            </div>
          ))}

        </section>

      </div>

    </main>
  );
}

export default Infantil;
