import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout, { AuthField } from "./AuthLayout";
import tenis2 from "../assets/tenis2.jpg";
import { entrarContaLocal } from "../utils/authLocal";

export default function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [aviso, setAviso] = useState("");
  const navigate = useNavigate();

  async function enviarFormulario(evento) {
    evento.preventDefault();
    setAviso("");
    const dados = new FormData(evento.currentTarget);

    try {
      const sessao = await entrarContaLocal(dados.get("email"), dados.get("password"));
      if (!sessao) {
        setAviso("E-mail ou senha incorretos. Se ainda não tem conta, crie uma primeiro.");
        return;
      }
      navigate("/");
    } catch (erro) {
      setAviso(erro.message || "Não foi possível entrar nesta conta.");
    }
  }

  return (
    <AuthLayout
      variant="login"
      shoeImage={tenis2}
      promoTitle={<>MOVIMENTO<br />QUE INSPIRA</>}
    >
      <div className="auth-heading">
        <h1>Entrar</h1>
        <p>Acesse sua conta para continuar comprando os melhores produtos da Nike.</p>
      </div>

      <div className="demo-login-note">
        <strong>Conta para demonstração</strong>
        <span>E-mail: demo@sitenike.com</span>
        <span>Senha: nike1234</span>
      </div>

      <form className="auth-form login-form" onSubmit={enviarFormulario}>
        <AuthField id="login-email" label="E-mail ou usuário" icon="✉">
          <input id="login-email" name="email" type="text" autoComplete="username" placeholder="Digite seu e-mail ou nome completo" required />
        </AuthField>

        <AuthField id="login-password" label="Senha" icon="♙">
          <input id="login-password" name="password" type={mostrarSenha ? "text" : "password"} autoComplete="current-password" placeholder="Digite sua senha" required />
          <button className="auth-eye" type="button" aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"} onClick={() => setMostrarSenha((visivel) => !visivel)}>
            {mostrarSenha ? "◉" : "◎"}
          </button>
        </AuthField>

        <div className="auth-options">
          <label className="auth-check"><input type="checkbox" /> Lembrar de mim</label>
          <button className="auth-text-button" type="button" onClick={() => setAviso("A recuperação de senha ainda não está disponível. Crie outra conta se não lembrar a senha.")}>Esqueceu a senha?</button>
        </div>

        <button className="auth-primary" type="submit">Entrar <span aria-hidden="true">→</span></button>
        {aviso && <p className="auth-message" role="status">{aviso}</p>}
      </form>

      <div className="auth-divider"><span>OU</span></div>
      <button className="auth-google" type="button" onClick={() => setAviso("O login com Google ainda não está disponível.")}>
        <span className="google-mark" aria-hidden="true">G</span> Entrar com o Google
      </button>

      <p className="auth-switch">Não tem uma conta? <Link to="/cadastro">Criar conta</Link></p>
    </AuthLayout>
  );
}
