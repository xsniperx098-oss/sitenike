import "../Styles/feminino.css";
import useTamanhoSacola from "../hooks/useTamanhoSacola";
import useFiltrosProdutos from "../hooks/useFiltrosProdutos";
import { formatarPreco } from "../utils/sacola";
import { produtosFemininos as produtos } from "../data/catalogo";

function Feminino() {
  const { tamanhoSelecionado, selecionarTamanho, adicionarNaSacola } =
    useTamanhoSacola();
  const filtros = useFiltrosProdutos(produtos);

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

            {["Lifestyle", "Treino", "Basquete", "Corrida"].map((categoria) => (
              <label key={categoria}>
                <input
                  type="checkbox"
                  checked={filtros.categorias.includes(categoria)}
                  onChange={() => filtros.alternarCategoria(categoria)}
                /> {categoria}
              </label>
            ))}
          </div>

          <div className="filtro-feminino">
            <h3>Tamanho</h3>

            <div className="tamanhos-feminino">
              {[35, 36, 37, 38, 39, 40, 41, 42].map((tamanho) => (
                <button
                  className={tamanhoSelecionado === String(tamanho) ? "selecionado" : ""}
                  key={tamanho}
                  type="button"
                  aria-pressed={tamanhoSelecionado === String(tamanho)}
                  onClick={() => selecionarTamanho(String(tamanho))}
                >
                  {tamanho}
                </button>
              ))}
            </div>
          </div>

          <div className="filtro-feminino">
            <h3>Preço</h3>

            <input
              className="preco-feminino"
              type="number"
              min="0"
              aria-label="Preço mínimo"
              value={filtros.precoMinimo}
              onChange={(evento) => filtros.setPrecoMinimo(evento.target.value)}
              placeholder="R$ 0,00"
            />

            <input
              className="preco-feminino"
              type="number"
              min="0"
              aria-label="Preço máximo"
              value={filtros.precoMaximo}
              onChange={(evento) => filtros.setPrecoMaximo(evento.target.value)}
              placeholder="R$ 999,99"
            />
          </div>

        </aside>

        <section className="produtos-feminino">

          {filtros.produtosFiltrados.map((produto) => (
            <div
              className="produto-card-feminino"
              key={produto.id}
            >
              <div
                className="produto-imagem-feminino"
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

              <h3>{produto.nome}</h3>

              <p>{produto.categoria}</p>

              <strong>{formatarPreco(produto.preco)}</strong>

            </div>
          ))}
          {filtros.produtosFiltrados.length === 0 && (
            <p className="sem-produtos" style={{ gridColumn: "1 / -1" }}>
              Nenhum tênis encontrado com esses filtros.
            </p>
          )}

        </section>

      </div>

    </main>
  );
}

export default Feminino;
