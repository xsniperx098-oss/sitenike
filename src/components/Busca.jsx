import { useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { todosProdutos } from "../data/catalogo";
import { adicionarProdutoNaSacola, formatarPreco } from "../utils/sacola";
import "../Styles/Busca.css";

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");
}

function Busca() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const termo = params.get("q") || "";
  const [tamanhos, setTamanhos] = useState({});
  const [erros, setErros] = useState({});
  const resultados = useMemo(() => {
    const consulta = normalizar(termo.trim());
    if (!consulta) return [];
    return todosProdutos.filter((produto) =>
      normalizar(`${produto.nome} ${produto.categoria} ${produto.departamento}`).includes(consulta)
    );
  }, [termo]);

  function adicionar(produto) {
    const tamanho = tamanhos[produto.id];
    if (!tamanho) {
      setErros((atuais) => ({ ...atuais, [produto.id]: true }));
      return;
    }
    adicionarProdutoNaSacola({ ...produto, tamanho });
    navigate("/sacola");
  }

  return (
    <main className="pagina-busca">
      <h1>{termo ? `Resultados para “${termo}”` : "Buscar tênis"}</h1>
      {resultados.length ? (
        <section className="busca-grade">
          {resultados.map((produto) => {
            const opcoesTamanho = produto.departamento === "Infantil"
              ? [28, 29, 30, 31, 32, 33, 34, 35]
              : [35, 36, 37, 38, 39, 40, 41, 42];
            return (
              <article className="busca-card" key={produto.id}>
                <img src={produto.imagem} alt={produto.nome} />
                <h2>{produto.nome}</h2>
                <p>{produto.departamento} · {produto.categoria}</p>
                <strong>{formatarPreco(produto.preco)}</strong>
                <label>
                  <span>Tamanho</span>
                  <select
                    value={tamanhos[produto.id] || ""}
                    onChange={(evento) => {
                      setTamanhos((atuais) => ({ ...atuais, [produto.id]: evento.target.value }));
                      setErros((atuais) => ({ ...atuais, [produto.id]: false }));
                    }}
                  >
                    <option value="">Selecione</option>
                    {opcoesTamanho.map((tamanho) => <option key={tamanho} value={tamanho}>{tamanho}</option>)}
                  </select>
                </label>
                {erros[produto.id] && <small>Escolha um tamanho para continuar.</small>}
                <button type="button" onClick={() => adicionar(produto)}>Adicionar à sacola</button>
              </article>
            );
          })}
        </section>
      ) : (
        <p className="busca-vazia">
          {termo ? "Nenhum tênis encontrado. Tente outro nome ou categoria." : "Digite o nome de um tênis na busca do cabeçalho."}
        </p>
      )}
    </main>
  );
}

export default Busca;
