import "../Styles/Masculino.css";

import tenis1 from "../assets/tenis1.jpg";
import tenis2 from "../assets/tenis2.jpg";
import tenis3 from "../assets/tenis3.jpg";

function Masculino() {
  const produtos = [
    {
      nome: "Nike Air Zoom Pegasus",
      categoria: "Lifestyle",
      preco: "R$ 399,99",
      imagem: tenis1,
    },
    {
      nome: "Nike Air Max 90",
      categoria: "Lifestyle",
      preco: "R$ 399,99",
      imagem: tenis2,
    },
    {
      nome: "Nike Blazer Mid '77",
      categoria: "Lifestyle",
      preco: "R$ 399,99",
      imagem: tenis3,
    },
    {
      nome: 'Nike Air Low "Panda"',
      categoria: "Lifestyle",
      preco: "R$ 399,99",
      imagem: tenis1,
    },
    {
      nome: "Nike Shox R4",
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
    <main className="masculino">

      <div className="breadcrumb">
        Início / Masculino / Tênis
      </div>

      <div className="titulo-masculino">
        <h1>TÊNIS MASCULINOS</h1>
        <p>Encontre o seu próximo par</p>
      </div>

      <div className="conteudo-masculino">

        {/* FILTROS */}
        <aside className="filtros">

          <h2>Filtros</h2>

          <div className="filtro">
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

          <div className="filtro">
            <h3>Tamanho</h3>

            <div className="tamanhos">
              <button>37</button>
              <button>38</button>
              <button className="selecionado">39</button>
              <button>40</button>
              <button>41</button>
              <button>42</button>
              <button>43</button>
              <button>44</button>
            </div>
          </div>

          <div className="filtro">
            <h3>Cor</h3>

            <div className="cores">
              <span className="cor preta"></span>
              <span className="cor vermelha"></span>
              <span className="cor cinza"></span>
              <span className="cor verde"></span>
            </div>
          </div>

          <div className="filtro">
            <h3>Preço</h3>

            <input
              className="preco"
              type="text"
              placeholder="R$ 0,00"
            />

            <input
              className="preco"
              type="text"
              placeholder="R$ 999,99"
            />
          </div>

        </aside>

        {/* PRODUTOS */}
        <section className="produtos-masculino">

          {produtos.map((produto, index) => (
            <div className="produto-card" key={index}>

              <div className="produto-imagem">
                <img src={produto.imagem} alt={produto.nome} />
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

export default Masculino;