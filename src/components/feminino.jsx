import "../Styles/Feminino.css";

import tenis1 from "../assets/tenis1.jpg";
import tenis2 from "../assets/tenis2.jpg";
import tenis3 from "../assets/tenis3.jpg";

function Feminino() {
  const produtos = [
    {
      nome: "Nike Air Max 90",
      categoria: "Lifestyle",
      preco: "R$ 399,99",
      imagem: tenis1,
    },
    {
      nome: "Nike Air Force 1",
      categoria: "Lifestyle",
      preco: "R$ 399,99",
      imagem: tenis2,
    },
    {
      nome: "Nike Court Vision Low",
      categoria: "Lifestyle",
      preco: "R$ 399,99",
      imagem: tenis3,
    },
    {
      nome: "Nike Revolution 7",
      categoria: "Corrida",
      preco: "R$ 399,99",
      imagem: tenis1,
    },
    {
      nome: "Nike Waffle Debut",
      categoria: "Lifestyle",
      preco: "R$ 399,99",
      imagem: tenis2,
    },
    {
      nome: "Nike Air Jordan 1",
      categoria: "Lifestyle",
      preco: "R$ 399,99",
      imagem: tenis3,
    },
  ];

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

          {produtos.map((produto, index) => (
            <div className="produto-card-feminino" key={index}>

              <div className="produto-imagem-feminino">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                />
              </div>

              <h3>{produto.nome}</h3>

              <p>{produto.categoria}</p>

              <strong>{produto.preco}</strong>

            </div>
          ))}

        </section>

      </div>

    </main>
  );
}

export default Feminino;