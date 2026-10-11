import "../Styles/feminino.css";
import { useNavigate } from "react-router-dom";
import { adicionarProdutoNaSacola, formatarPreco } from "../utils/sacola";

import feminino1 from "../assets/feminino1.jpg";
import feminino2 from "../assets/feminino2.jpg";
import feminino3 from "../assets/feminino3.jpg";
import feminino4 from "../assets/feminino4.jpg";
import feminino5 from "../assets/feminino5.jpg";
import feminino6 from "../assets/feminino6.jpg";

function Feminino() {
  const navigate = useNavigate();
  const produtos = [
    {
      id: "feminino-tenis-1",
      nome: "Nike Air Max 90",
      categoria: "Lifestyle",
      preco: 399.99,
      imagem: feminino1,
    },
    {
      id: "feminino-tenis-2",
      nome: "Nike Air Force 1",
      categoria: "Lifestyle",
      preco: 399.99,
      imagem: feminino2,
    },
    {
      id: "feminino-tenis-3",
      nome: "Nike Court Vision Low",
      categoria: "Lifestyle",
      preco: 399.99,
      imagem: feminino3,
    },
    {
      id: "feminino-tenis-4",
      nome: "Nike Revolution 7",
      categoria: "Corrida",
      preco: 399.99,
      imagem: feminino4,
    },
    {
      id: "feminino-tenis-5",
      nome: "Nike Waffle Debut",
      categoria: "Lifestyle",
      preco: 399.99,
      imagem: feminino5,
    },
    {
      id: "feminino-tenis-6",
      nome: "Nike Air Jordan 1",
      categoria: "Lifestyle",
      preco: 399.99,
      imagem: feminino6,
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
