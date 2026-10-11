import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/pagamento.css";

function Pagamento() {

  const navigate = useNavigate();
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

  const [metodo, setMetodo] = useState("cartao");

  return (

    <div className="pagamento-page">

      <main className="pagamento-container">

        {/* CAMINHO */}

        <div className="breadcrumb">
          Início / Sacola / Pagamento
        </div>


        {/* TÍTULO */}

        <h1>
          COMO VOCÊ PREFERE PAGAR?
        </h1>

        <p className="pagamento-subtitle">
          Escolha uma opção e confira seu pedido antes de finalizar
        </p>


        <div className="pagamento-layout">


          {/* ESQUERDA */}

          <section className="pagamento-main">


            {/* MÉTODOS */}

            <div className="metodos">

              <MetodoPagamento
                selecionado={metodo === "pix"}
                onClick={() => setMetodo("pix")}
                tipo="pix"
                titulo="Pix"
                descricao="À vista"
              />


              <MetodoPagamento
                selecionado={metodo === "cartao"}
                onClick={() => setMetodo("cartao")}
                tipo="cartao"
                titulo="Cartão de crédito"
                descricao="Até 5x sem juros"
              />


              <MetodoPagamento
                selecionado={metodo === "boleto"}
                onClick={() => setMetodo("boleto")}
                tipo="boleto"
                titulo="Boleto"
                descricao="À vista"
              />


              <MetodoPagamento
                selecionado={metodo === "cripto"}
                onClick={() => setMetodo("cripto")}
                tipo="cripto"
                titulo="Criptomoedas"
                descricao="À vista"
              />

            </div>


            {/* CARTÃO */}

            {metodo === "cartao" && (
              <FormularioCartao />
            )}


            {/* PIX */}

            {metodo === "pix" && (

              <div className="pagamento-box">

                <h2>
                  Pagamento via Pix
                </h2>

                <div className="pix-content">

                  <div className="pix-symbol">
                    ◆
                  </div>

                  <p>
                    Ao finalizar o pedido, você receberá
                    o código Pix para realizar o pagamento.
                  </p>

                </div>

              </div>

            )}


            {/* BOLETO */}

            {metodo === "boleto" && (

              <div className="pagamento-box">

                <h2>
                  Pagamento via boleto
                </h2>

                <p>
                  O boleto será gerado após a finalização
                  do pedido.
                </p>

              </div>

            )}


            {/* CRIPTO */}

            {metodo === "cripto" && (

              <div className="pagamento-box">

                <h2>
                  Pagamento com criptomoeda
                </h2>

                <p>
                  Escolha sua criptomoeda após finalizar
                  o pedido.
                </p>

              </div>

            )}


            <p className="aviso">
              Revise os dados antes de finalizar.
            </p>


            <div className="informacoes">

              <p>
                <strong>Pix:</strong> o código será exibido
                após finalizar o pedido.
              </p>

              <p>
                <strong>Boleto:</strong> o documento será
                gerado após finalizar o pedido.
              </p>

            </div>

          </section>


          {/* DIREITA */}

          <ResumoPedido
            produtos={produtos}
            subtotal={subtotal}
            frete={frete}
            total={total}
          />

        </div>

      </main>

    </div>
  );
}

function lerProdutosDaSacola() {
  try {
    const produtos = JSON.parse(localStorage.getItem("sacola") || "[]");
    return Array.isArray(produtos) ? produtos : [];
  } catch {
    return [];
  }
}

function dinheiro(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
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


/* =====================================================
   MÉTODO DE PAGAMENTO
===================================================== */

function MetodoPagamento({
  selecionado,
  onClick,
  tipo,
  titulo,
  descricao
}) {

  return (

    <button
      type="button"
      className={`metodo ${selecionado ? "ativo" : ""}`}
      onClick={onClick}
    >

      <span className="radio">

        {selecionado && (
          <span />
        )}

      </span>


      <span className={`metodo-icon ${tipo}`}>

        {tipo === "pix" && "◆"}

        {tipo === "cartao" && "▣"}

        {tipo === "boleto" && "▤"}

        {tipo === "cripto" && "₿"}

      </span>


      <span className="metodo-texto">

        <strong>
          {titulo}
        </strong>

        <small>
          {descricao}
        </small>

      </span>

    </button>

  );
}


/* =====================================================
   CARTÃO
===================================================== */

function FormularioCartao() {

  return (

    <div className="cartao-form">

      <h2>
        Dados do Cartão
      </h2>


      <div className="campo">

        <label>
          Número do Cartão
        </label>

        <input
          type="text"
          placeholder="Número do cartão"
          maxLength="19"
        />

      </div>


      <div className="campo">

        <label>
          Nome impresso no cartão
        </label>

        <input
          type="text"
          placeholder="Nome completo"
        />

      </div>


      <div className="campo-row">

        <div className="campo">

          <label>
            Validade
          </label>

          <input
            type="text"
            placeholder="MM/AA"
            maxLength="5"
          />

        </div>


        <div className="campo">

          <label>
            Código de segurança
          </label>

          <input
            type="password"
            placeholder="CVV"
            maxLength="4"
          />

        </div>

      </div>


      <div className="campo">

        <label>
          CPF do titular
        </label>

        <input
          type="text"
          placeholder="000.000.000-00"
        />

      </div>


      <label className="check">

        <input type="checkbox" />

        <span>
          Salvar cartão para próximas compras
        </span>

      </label>


      <label className="check">

        <input
          type="checkbox"
          defaultChecked
        />

        <span>
          Usar o mesmo endereço da entrega
        </span>

      </label>

    </div>

  );
}


/* =====================================================
   RESUMO
===================================================== */

function ResumoPedido({ produtos, subtotal, frete, total }) {

  const navigate = useNavigate();

  return (

    <aside className="resumo">

      <h2>
        Resumo do pedido
      </h2>


      <div className="produtos-pedido">
        {produtos.length === 0 ? (
          <p>Sua sacola está vazia.</p>
        ) : (
          produtos.map((produto, indice) => (
            <div className="produto" key={`${produto.id}-${indice}`}>
              <div className="produto-img">
                <img src={produto.imagem} alt={produto.nome} />
              </div>
              <div className="produto-info">
                <strong>{produto.nome}</strong>
                <span>{produto.categoria}</span>
                <span>Tam. {produto.tamanho || "40"} - Qtd. {produto.quantidade || 1}</span>
                <span>{dinheiro(valorNumerico(produto.preco) * Number(produto.quantidade || 1))}</span>
              </div>
            </div>
          ))
        )}
      </div>


      <div className="entrega">

        <h3>
          Entrega
        </h3>

        <p>
          Endereço informado na etapa anterior
        </p>

        <p>
          Sedex · 1 a 3 dias úteis
        </p>

      </div>


      <div className="valor">

        <span>
          Produtos
        </span>

        <span>
          {dinheiro(subtotal)}
        </span>

      </div>


      <div className="valor">

        <span>
          Frete
        </span>

        <span>
          {dinheiro(frete)}
        </span>

      </div>


      <div className="valor">

        <span>
          Desconto
        </span>

        <span>
          R$ 0,00
        </span>

      </div>


      <div className="total">

        <strong>
          Total
        </strong>

        <strong>
          {dinheiro(total)}
        </strong>

      </div>


      <div className="parcelas">
        3x de {dinheiro(total / 3)} sem juros
      </div>


      <button
        type="button"
        className="finalizar"
        disabled={produtos.length === 0}
        onClick={() =>
          navigate("/pagamento-finalizado", {
            state: { produtos, subtotal, frete, total },
          })
        }
      >

        Finalizar pedido

        <span>
          →
        </span>

      </button>


      <p className="confirmacao">
        Você poderá revisar a confirmação na próxima tela
      </p>

    </aside>

  );
}

export default Pagamento;
