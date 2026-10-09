import "../Styles/feminino.css";
import { useNavigate } from "react-router-dom";
import { adicionarProdutoNaSacola, formatarPreco } from "../utils/sacola";

import tenis1 from "../assets/tenis1.jpg";
import tenis2 from "../assets/tenis2.jpg";
import tenis3 from "../assets/tenis3.jpg";

function Feminino() {
  const navigate = useNavigate();
  const produtos = [
    {
      id: "feminino-tenis-1",
      nome: "Nike Air Max 90",
      categoria: "Lifestyle",
      preco: 399.99,
      imagem: tenis1,
    },
    {
      id: "feminino-tenis-2",
      nome: "Nike Air Force 1",
      categoria: "Lifestyle",
      preco: 399.99,
      imagem: tenis2,
    },
    {
      id: "feminino-tenis-3",
      nome: "Nike Court Vision Low",
      categoria: "Lifestyle",
      preco: 399.99,
      imagem: tenis3,
    },
    {
      id: "feminino-tenis-4",
      nome: "Nike Revolution 7",
      categoria: "Corrida",
      preco: 399.99,
      imagem: tenis1,
    },
    {
      id: "feminino-tenis-5",
      nome: "Nike Waffle Debut",
      categoria: "Lifestyle",
      preco: 399.99,
      imagem: tenis2,
    },
    {
      id: "feminino-tenis-6",
      nome: "Nike Air Jordan 1",
      categoria: "Lifestyle",
      preco: 399.99,
      imagem: tenis3,
    },
  ];

  function adicionarNaSacola(produto) {
    adicionarProdutoNaSacola({ ...produto, tamanho: "37" });
    navigate("/sacola");
  }

  return (
    <main className="feminino">

      <div className="breadcrumb-feminino">
        Início / Feminino / Tênis
      </div>

      <div className="titulo-feminino">
        <h1>TÊNIS FEMININOS</h1>
        <p>Encontre o seu próximo par</p>
      </div>

      <div className="conteudo-feminino">

        <aside className="filtros-feminino">

          <h2>Filtros</h2>

          <div className="filtro-feminino">
            <h3>Categoria</h3>

            <label>
              <input type="checkbox" /> Lifestyle
            </label>

            <label>
              <input type="checkbox" /> Treino
            </label>

            <label>
              <input type="checkbox" /> Basquete
            </label>

            <label>
              <input type="checkbox" /> Corrida
            </label>
          </div>

          <div className="filtro-feminino">
            <h3>Tamanho</h3>

            <div className="tamanhos-feminino">
              <button>35</button>
              <button>36</button>
              <button className="selecionado">37</button>
              <button>38</button>
              <button>39</button>
              <button>40</button>
              <button>41</button>
              <button>42</button>
            </div>
          </div>

          <div className="filtro-feminino">
            <h3>Cor</h3>

            <div className="cores-feminino">
              <span className="cor-feminina preta"></span>
              <span className="cor-feminina vermelha"></span>
              <span className="cor-feminina cinza"></span>
              <span className="cor-feminina verde"></span>
            </div>
          </div>

          <div className="filtro-feminino">
            <h3>Preço</h3>

            <input
              className="preco-feminino"
              type="text"
              placeholder="R$ 0,00"
            />

            <input
              className="preco-feminino"
              type="text"
              placeholder="R$ 999,99"
            />
          </div>

        </aside>

        <section className="produtos-feminino">

          {produtos.map((produto) => (
            <div
              className="produto-card-feminino"
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
              <div className="produto-imagem-feminino">
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

export default Feminino;
