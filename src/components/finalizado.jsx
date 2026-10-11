import { useLocation } from "react-router-dom";
import "../Styles/finalizado.css";

function lerProdutosDaSacola() {
  try {
    const produtos = JSON.parse(localStorage.getItem("sacola") || "[]");
    return Array.isArray(produtos) ? produtos : [];
  } catch {
    return [];
  }
}

function valorNumerico(valor) {
  const direto = Number(valor);
  if (Number.isFinite(direto)) return direto;

  const convertido = Number(
    String(valor || "")
      .replace(/[^\d,-]/g, "")
      .replace(",", ".")
  );
  return Number.isFinite(convertido) ? convertido : 0;
}

function dinheiro(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function Finalizado() {
  const { state } = useLocation();
  const produtos = Array.isArray(state?.produtos)
    ? state.produtos
    : lerProdutosDaSacola();
  const subtotal = produtos.reduce(
    (soma, produto) =>
      soma + valorNumerico(produto.preco) * Number(produto.quantidade || 1),
    0
  );
  const frete = produtos.length > 0 ? Number(state?.frete ?? 79.9) : 0;
  const total = subtotal + frete;

  return (
    <div className="container-pagina">
      <div className="breadcrumb">
        <span>Início</span> / <span>Sacola</span>
      </div>

      <section className="secao-confirmacao">
        <div className="icone-check-principal">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1 className="titulo-confirmacao">PEDIDO CONFIRMADO</h1>
        <p className="subtitulo-confirmacao">
          Tudo certo! Seu próximo passo já está a caminho.<br />
          Enviamos a confirmação para o seu e-mail cadastrado.
        </p>
      </section>

      <main className="conteudo-principal">
        <section className="card-acompanhamento">
          <h2>Acompanhe seu pedido</h2>

          <div className="linha-tempo">
            <div className="linha-fundo"></div>

            <div className="etapa concluida">
              <div className="circulo-etapa">✓</div>
              <span>Confirmado</span>
            </div>
            <div className="etapa concluida">
              <div className="circulo-etapa">✓</div>
              <span>Em preparação</span>
            </div>
            <div className="etapa concluida">
              <div className="circulo-etapa">✓</div>
              <span>Enviado</span>
            </div>
            <div className="etapa pendente">
              <div className="circulo-etapa"></div>
              <span>Entregue</span>
            </div>
          </div>

          <p className="previsao-entrega">
            Previsão de entrega - SEDEX <strong>1 a 3 dias úteis</strong>
          </p>
        </section>

        <aside className="card-resumo">
          <h2>Resumo do pedido</h2>

          {produtos.map((produto, indice) => (
            <div className="item-produto" key={`${produto.id}-${indice}`}>
              <div className="container-imagem-produto">
                <img src={produto.imagem} alt={produto.nome} />
              </div>
              <div className="detalhes-produto">
                <h3>{produto.nome}</h3>
                <p>{produto.categoria}</p>
                <p>Tam. {produto.tamanho || "40"} - Qtd. {produto.quantidade || 1}</p>
                <p>{dinheiro(valorNumerico(produto.preco) * Number(produto.quantidade || 1))}</p>
              </div>
            </div>
          ))}

          {produtos.length === 0 && <p>Sua sacola está vazia.</p>}

          <div className="valores-resumo">
            <div className="linha-valor">
              <span>Produtos</span>
              <span>{dinheiro(subtotal)}</span>
            </div>
            <div className="linha-valor">
              <span>Frete</span>
              <span>{dinheiro(frete)}</span>
            </div>
            <div className="linha-valor">
              <span>Desconto</span>
              <span>{dinheiro(0)}</span>
            </div>
            <div className="linha-valor total">
              <strong>Total</strong>
              <div className="container-total">
                <strong>{dinheiro(total)}</strong>
                <small>3x de {dinheiro(total / 3)} sem juros</small>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
