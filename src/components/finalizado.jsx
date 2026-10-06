import React from 'react';
import '../styles/finalizado.css';
import tenis1 from '../assets/tenis1.jpg'; // Ajuste o caminho se a imagem estiver em outro diretório (ex: '../assets/tenis1.jpg' ou './tenis1.jpg')

export default function Finalizado() {
  return (
    <div className="container-pagina">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Início</span> / <span>Sacola</span>
      </div>

      {/* Banner de Confirmação */}
      <section className="secao-confirmacao">
        <div className="icone-check-principal">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1 className="titulo-confirmacao">PEDIDO CONFIRMADO</h1>
        <p className="subtitulo-confirmacao">
          Tudo certo! Se próximo passo já está a caminho.<br />
          Enviamos a confirmação para o seu e-mail cadastrado.
        </p>
      </section>

      {/* Conteúdo Principal */}
      <main className="conteudo-principal">
        {/* Lado Esquerdo: Acompanhamento */}
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
            Previsão de entrega - SEDEX <strong>1 à 3 dias úteis</strong>
          </p>
        </section>

        {/* Lado Direito: Resumo do Pedido */}
        <aside className="card-resumo">
          <h2>Resumo do pedido</h2>

          <div className="item-produto">
            <div className="container-imagem-produto">
              <img 
                src={tenis1} 
                alt="Nike Blaze Mid 77" 
              />
            </div>
            <div className="detalhes-produto">
              <h3>Nike Blaze Mid 77</h3>
              <p>Preto e branco</p>
              <p>Tam. 37 - Qtd. 1</p>
            </div>
          </div>

          <div className="valores-resumo">
            <div className="linha-valor">
              <span>Produtos</span>
              <span>R$ 399,99</span>
            </div>
            <div className="linha-valor">
              <span>Frete</span>
              <span>R$ 79,90</span>
            </div>
            <div className="linha-valor">
              <span>Desconto</span>
              <span>R$ 0,00</span>
            </div>
            <div className="linha-valor total">
              <strong>Total</strong>
              <div className="container-total">
                <strong>R$ 479,89</strong>
                <small>3x de R$ 159,96 sem juros</small>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}