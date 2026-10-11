import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout, { AuthField } from "./AuthLayout";
import tenis3 from "../assets/feminino1.jpg";
import { criarContaLocal } from "../utils/authLocal";

const estados = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS",
  "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
  "SP", "SE", "TO",
];

export default function Cadastro() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [aviso, setAviso] = useState("");
  const [salvando, setSalvando] = useState(false);
  const navigate = useNavigate();

  async function enviarFormulario(evento) {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    if (dados.get("senha") !== dados.get("confirmarSenha")) {
      setAviso("As senhas não conferem.");
      return;
    }

    setAviso("");
    setSalvando(true);
    try {
      await criarContaLocal({
        nome: dados.get("nome"),
        email: dados.get("email"),
        telefone: dados.get("telefone"),
        endereco: {
          rua: dados.get("rua"),
          numero: dados.get("numero"),
          complemento: dados.get("complemento"),
          bairro: dados.get("bairro"),
          cidade: dados.get("cidade"),
          estado: dados.get("estado"),
          cep: dados.get("cep"),
        },
        senha: dados.get("senha"),
        confirmarSenha: dados.get("confirmarSenha"),
      });
      navigate("/");
    } catch (erro) {
      setAviso(erro.message || "Não foi possível criar a conta neste navegador.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <AuthLayout
      variant="cadastro"
      shoeImage={tenis3}
      promoTitle={<>QUALIDADE<br />EM CADA DETALHE</>}
      backToLogin
    >
      <div className="auth-heading signup-heading">
        <h1>Criar conta</h1>
        <p>Preencha os dados abaixo para se cadastrar na Nike.</p>
      </div>

      <form className="auth-form signup-form" onSubmit={enviarFormulario}>
        <h2>Dados pessoais</h2>
        <AuthField id="cadastro-nome" label="Nome completo" icon="♙" className="field-full">
          <input id="cadastro-nome" name="nome" autoComplete="name" placeholder="Digite seu nome completo" required />
        </AuthField>

        <div className="auth-fields-grid">
          <AuthField id="cadastro-email" label="E-mail" icon="✉">
            <input id="cadastro-email" name="email" type="email" autoComplete="email" placeholder="Digite seu e-mail" required />
          </AuthField>
          <AuthField id="cadastro-telefone" label="Telefone (opcional)" icon="⌕">
            <input id="cadastro-telefone" name="telefone" type="tel" autoComplete="tel" placeholder="(11) 98765-4321" />
          </AuthField>
          <AuthField id="cadastro-senha" label="Senha" icon="♙">
            <input id="cadastro-senha" name="senha" type={mostrarSenha ? "text" : "password"} autoComplete="new-password" placeholder="Digite sua senha" minLength="8" required />
          </AuthField>
          <AuthField id="cadastro-confirmar" label="Confirmar senha" icon="♙">
            <input id="cadastro-confirmar" name="confirmarSenha" type={mostrarSenha ? "text" : "password"} autoComplete="new-password" placeholder="Confirme sua senha" minLength="8" required />
          </AuthField>
        </div>
        <label className="auth-check auth-show-password"><input type="checkbox" checked={mostrarSenha} onChange={(evento) => setMostrarSenha(evento.target.checked)} /> Mostrar senhas</label>

        <h2 className="address-title">Endereço de entrega</h2>
        <AuthField id="cadastro-rua" label="Rua" icon="⌖" className="field-full">
          <input id="cadastro-rua" name="rua" autoComplete="street-address" placeholder="Ex: Rua das Flores" required />
        </AuthField>

        <div className="auth-fields-grid">
          <AuthField id="cadastro-numero" label="Número" icon="#">
            <input id="cadastro-numero" name="numero" placeholder="Ex: 123" required />
          </AuthField>
          <AuthField id="cadastro-complemento" label="Complemento (opcional)" icon="⌂">
            <input id="cadastro-complemento" name="complemento" placeholder="Ex: Apto 101" />
          </AuthField>
          <AuthField id="cadastro-bairro" label="Bairro" icon="⌂">
            <input id="cadastro-bairro" name="bairro" autoComplete="address-level3" placeholder="Ex: Centro" required />
          </AuthField>
          <AuthField id="cadastro-cidade" label="Cidade" icon="⌖">
            <input id="cadastro-cidade" name="cidade" autoComplete="address-level2" placeholder="Ex: Maceió" required />
          </AuthField>
          <AuthField id="cadastro-estado" label="Estado" className="select-field">
            <select id="cadastro-estado" name="estado" autoComplete="address-level1" defaultValue="" required>
              <option value="" disabled>Selecione o estado</option>
              {estados.map((estado) => <option key={estado} value={estado}>{estado}</option>)}
            </select>
          </AuthField>
          <AuthField id="cadastro-cep" label="CEP" icon="#">
            <input id="cadastro-cep" name="cep" autoComplete="postal-code" placeholder="Ex: 57000-000" maxLength="9" required />
          </AuthField>
        </div>

        <label className="auth-check auth-terms">
          <input type="checkbox" required />
          <span>Li e aceito os <a href="#termos">Termos de Uso</a> e a <a href="#privacidade">Política de Privacidade</a>.</span>
        </label>
        {aviso && <p className="auth-message" role="alert">{aviso}</p>}
        <button className="auth-primary" type="submit" disabled={salvando}>
          {salvando ? "Criando conta..." : "Criar conta"} <span aria-hidden="true">→</span>
        </button>
      </form>

      <p className="auth-switch">Já tem uma conta? <Link to="/login">Entrar</Link></p>
    </AuthLayout>
  );
}
