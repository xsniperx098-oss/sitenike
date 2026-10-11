
import "../Styles/Masculino.css";
import useTamanhoSacola from "../hooks/useTamanhoSacola";
import useFiltrosProdutos from "../hooks/useFiltrosProdutos";
import { formatarPreco } from "../utils/sacola";
import { produtosMasculinos as produtos } from "../data/catalogo";

function Masculino() {
  const { tamanhoSelecionado, selecionarTamanho, adicionarNaSacola } =
    useTamanhoSacola();
  const filtros = useFiltrosProdutos(produtos);

  return (
    <main className="masculino">
      <div className="breadcrumb-masculino">
        Início / Masculino / Tênis
      </div>

      <div className="titulo-masculino">
        <h1>TÊNIS MASCULINOS</h1>
        <p>Encontre o seu próximo par</p>
      </div>

      <div className="conteudo-masculino">
        <aside className="filtros-masculino">
          <h2>Filtros</h2>

          <div className="filtro-masculino">
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

          <div className="filtro-masculino">
            <h3>Tamanho</h3>
            <div className="tamanhos-masculino">
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

          <div className="filtro-masculino">
            <h3>Preço</h3>
            <input
              className="preco-masculino"
              type="number"
              min="0"
              aria-label="Preço mínimo"
              value={filtros.precoMinimo}
              onChange={(evento) => filtros.setPrecoMinimo(evento.target.value)}
              placeholder="R$ 0,00"
            />
            <input
              className="preco-masculino"
              type="number"
              min="0"
              aria-label="Preço máximo"
              value={filtros.precoMaximo}
              onChange={(evento) => filtros.setPrecoMaximo(evento.target.value)}
              placeholder="R$ 999,99"
            />
          </div>
        </aside>

        <section className="produtos-masculino">
          {filtros.produtosFiltrados.map((produto) => (
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

              <strong>{formatarPreco(produto.preco)}</strong>
            </article>
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

export default Masculino;
