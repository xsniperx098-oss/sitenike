import "../Styles/infantil.css";
import useTamanhoSacola from "../hooks/useTamanhoSacola";
import useFiltrosProdutos from "../hooks/useFiltrosProdutos";
import { formatarPreco } from "../utils/sacola";
import { produtosInfantis as produtos } from "../data/catalogo";

function Infantil() {
  const { tamanhoSelecionado, selecionarTamanho, adicionarNaSacola } =
    useTamanhoSacola();
  const filtros = useFiltrosProdutos(produtos);

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

          <div className="filtro-infantil">
            <h3>Tamanho</h3>

            <div className="tamanhos-infantil">
              {[28, 29, 30, 31, 32, 33, 34, 35].map((tamanho) => (
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

          <div className="filtro-infantil">
            <h3>Preço</h3>

            <input
              className="preco-infantil"
              type="number"
              min="0"
              aria-label="Preço mínimo"
              value={filtros.precoMinimo}
              onChange={(evento) => filtros.setPrecoMinimo(evento.target.value)}
              placeholder="R$ 0,00"
            />

            <input
              className="preco-infantil"
              type="number"
              min="0"
              aria-label="Preço máximo"
              value={filtros.precoMaximo}
              onChange={(evento) => filtros.setPrecoMaximo(evento.target.value)}
              placeholder="R$ 999,99"
            />
          </div>

        </aside>

        {/* PRODUTOS */}
        <section className="produtos-infantil">

          {filtros.produtosFiltrados.map((produto) => (
            <div
              className="produto-card-infantil"
              key={produto.id}
            >
              <div
                className="produto-imagem-infantil"
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

export default Infantil;
