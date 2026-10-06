import "./../Styles/sacola.css";
import { useNavigate } from "react-router-dom";

function Sacola() {
  const navigate = useNavigate();

  return (
    <div className="sacola-page">

      <div className="sacola-conteudo">

        <div className="sacola-esquerda">

          <div className="sacola-titulo">
            <span>Início / Sacola</span>
            <h1>SUA SACOLA</h1>
            <p>1 produto</p>
          </div>

          <div className="produto-adicionado">
            ✓ Tênis adicionado à sacola.
          </div>

          <div className="produto-sacola">

            <div className="produto-imagem">
              <img
                src="/src/assets/tenis1.jpg"
                alt="Tênis"
              />
            </div>

            <div className="produto-info">

              <h2>Nike Air Max</h2>

              <p>
                Tênis masculino - Modelo Lifestyle
              </p>

              <p>
                Cor: Preto e branco
              </p>

              <div className="produto-opcoes">

                <select>
                  <option>Tamanho BR: 40</option>
                  <option>Tamanho BR: 39</option>
                  <option>Tamanho BR: 41</option>
                  <option>Tamanho BR: 42</option>
                </select>

                <div className="quantidade">

                  <button>-</button>

                  <span>1</span>

                  <button>+</button>

                </div>

              </div>

              <button className="remover">
                ♧ Remover
              </button>

            </div>

            <div className="produto-preco">
              R$ 399,99
            </div>

          </div>


          {/* ENTREGA */}

          <div className="entrega">

            <div>

              <h3>Calcule a entrega</h3>

              <p>
                Informe seu CEP para consultar prazo e frete.
              </p>

              <div className="cep">

                <input
                  placeholder="57000-000"
                />

                <button>
                  Calcular
                </button>

              </div>

            </div>


            <div className="entrega-endereco">

              <h3>
                🚚 Entrega no seu endereço
              </h3>

              <p>
                🟢 Transportadora Correios
              </p>

              <p>
                🟢 Transportadora Azul Cargo
              </p>

              <p>
                🟢 Transportadora Jadlog
              </p>

            </div>

          </div>


          {/* EXTRAS */}

          <div className="complete">

            <h3>
              Complete seu pedido
            </h3>

            <p>
              Encontre itens extras para acompanhar seu tênis
            </p>

            <div className="extras">

              <div className="extra">

                <img
                  src="/src/assets/tenis2.jpg"
                  alt="Produto extra"
                />

                <strong>
                  Meias esportivas
                </strong>

                <span>
                  R$ 39,90
                </span>

                <button>
                  Adicionar +
                </button>

              </div>


              <div className="extra">

                <img
                  src="/src/assets/tenis3.jpg"
                  alt="Produto extra"
                />

                <strong>
                  Kit de limpeza
                </strong>

                <span>
                  R$ 49,90
                </span>

                <button>
                  Adicionar +
                </button>

              </div>

            </div>

          </div>

        </div>


        {/* RESUMO */}

        <div className="resumo">

          <h2>
            Resumo do pedido
          </h2>

          <div className="linha">

            <span>
              Subtotal
            </span>

            <span>
              R$ 399,99
            </span>

          </div>

          <div className="linha">

            <span>
              Frete
            </span>

            <span>
              R$ 79,90
            </span>

          </div>

          <hr />

          <div className="linha total">

            <strong>
              Total dos produtos
            </strong>

            <strong>
              R$ 479,89
            </strong>

          </div>


          {/* CUPOM */}

          <div className="cupom">

            <h3>
              Tem um cupom?
            </h3>

            <div>

              <input
                placeholder="Digite o código"
              />

              <button>
                Aplicar
              </button>

            </div>

          </div>


          {/* BOTÃO PAGAMENTO */}

          <button
            className="pagamento"
            onClick={() => navigate("/pagamento")}
          >
            Continuar para pagamento →
          </button>


          <p className="proxima-etapa">
            🔒 Próxima etapa: endereço e entrega
          </p>

        </div>

      </div>

    </div>
  );
}

export default Sacola;
