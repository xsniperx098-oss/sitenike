import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/pagamento.css";

function Pagamento() {

  const navigate = useNavigate();

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

          <ResumoPedido />

        </div>

      </main>

    </div>
  );
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

function ResumoPedido() {

  const navigate = useNavigate();

  return (

    <aside className="resumo">

      <h2>
        Resumo do pedido
      </h2>


      <div className="produto">

        <div className="produto-img">

          <img
            src="/src/assets/tenis1.jpg"
            alt="Nike Air Max"
          />

        </div>


        <div className="produto-info">

          <strong>
            Nike Air Max
          </strong>

          <span>
            Preto e branco
          </span>

          <span>
            Tam. 40 - Qtd. 1
          </span>

        </div>

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
          R$ 399,99
        </span>

      </div>


      <div className="valor">

        <span>
          Frete
        </span>

        <span>
          R$ 79,90
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
          R$ 479,89
        </strong>

      </div>


      <div className="parcelas">
        3x de R$ 159,96 sem juros
      </div>


      <button
        type="button"
        className="finalizar"
        onClick={() => navigate("/pagamento-finalizado")}
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
