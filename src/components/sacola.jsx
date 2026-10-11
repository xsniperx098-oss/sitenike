import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../Styles/sacola.css";

function Sacola() {
  const navigate = useNavigate();

  const [produtos, setProdutos] = useState(() => {
    try {
      const dados = JSON.parse(localStorage.getItem("sacola") || "[]");
      return Array.isArray(dados) ? dados : [];
    } catch {
      return [];
    }
  });

  function removerProduto(id, tamanho) {
    const atualizados = produtos.filter(
      (produto) => produto.id !== id || produto.tamanho !== tamanho
    );
    localStorage.setItem("sacola", JSON.stringify(atualizados));
    setProdutos(atualizados);
  }

  const dinheiro = (valor) =>
    Number(valor || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const subtotal = produtos.reduce(
    (total, produto) =>
      total + Number(produto.preco || 0) * Number(produto.quantidade || 1),
    0
  );
  const frete = produtos.length > 0 ? 79.9 : 0;

  return (
    <main className="sacola-page">
      <div className="sacola-conteudo">
        <section className="sacola-esquerda">
          <div className="sacola-titulo">
            <span>Início / Sacola</span>
            <h1>SUA SACOLA</h1>
            <p>{produtos.length} produto(s)</p>
          </div>

      {produtos.length === 0 ? (
        <div className="sacola-vazia">
          <h2>Sua sacola está vazia</h2>
          <button onClick={() => navigate("/masculino")}>
            Continuar comprando
          </button>
        </div>
      ) : (
        produtos.map((produto, indice) => (
          <article
            className="produto-sacola"
            key={`${produto.id}-${indice}`}
          >
            <div className="produto-imagem">
              <img
                src={produto.imagem}
                alt={produto.nome}
              />
            </div>

            <div className="produto-info">
              <h2>{produto.nome}</h2>
              <p>{produto.categoria}</p>
              <strong>{dinheiro(produto.preco)}</strong>
              <p>Tamanho: {produto.tamanho || "40"}</p>
              <p>Quantidade: {produto.quantidade || 1}</p>

              <button
                className="remover"
                onClick={() => removerProduto(produto.id, produto.tamanho)}
              >
                Remover
              </button>
            </div>
          </article>
        ))
      )}

      <button
        className="continuar-comprando"
        onClick={() => navigate("/masculino")}
      >
        ← Continuar comprando
      </button>
    </section>

    <aside className="resumo">
      <h2>Resumo do pedido</h2>
      <div className="linha">
        <span>Subtotal</span>
        <span>{dinheiro(subtotal)}</span>
      </div>
      <div className="linha">
        <span>Frete</span>
        <span>{dinheiro(frete)}</span>
      </div>
      <hr />
      <div className="linha total">
        <strong>Total</strong>
        <strong>{dinheiro(subtotal + frete)}</strong>
      </div>

      <button
        className="pagamento"
        disabled={produtos.length === 0}
        onClick={() =>
          navigate("/pagamento", {
            state: {
              produtos,
              subtotal,
              frete,
              total: subtotal + frete,
            },
          })
        }
      >
        Continuar para pagamento →
      </button>

      <p className="proxima-etapa">
        🔒 Próxima etapa: endereço e entrega
      </p>
    </aside>
  </div>
</main>

);
}

export default Sacola;
