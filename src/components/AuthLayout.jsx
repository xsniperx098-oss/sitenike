import { Link } from "react-router-dom";
import "../Styles/auth.css";

export function AuthField({ id, label, icon, children, className = "" }) {
  return (
    <div className={`auth-field ${className}`}>
      <label htmlFor={id}>{label}</label>
      <div className="auth-input-wrap">
        {icon && <span className="auth-input-icon" aria-hidden="true">{icon}</span>}
        {children}
      </div>
    </div>
  );
}

export default function AuthLayout({
  children,
  variant,
  shoeImage,
  promoTitle,
  backToLogin = false,
}) {
  return (
    <main className={`auth-page auth-${variant}`}>
      <div className="auth-card">
        <section className="auth-form-panel">
          {backToLogin && (
            <Link className="auth-back" to="/login">
              <span aria-hidden="true">←</span> Voltar
            </Link>
          )}

          <Link className="auth-home-link" to="/" aria-label="Voltar para a página inicial">
            <svg className="auth-swoosh" viewBox="0 0 100 38" aria-hidden="true">
              <path d="M4 25c0-4 3-9 8-15-3 8-2 13 4 15 4 2 10 1 18-2L97 1 31 33C19 39 4 38 4 25Z" />
            </svg>
          </Link>

          {children}
        </section>

        <aside className="auth-promo" aria-label="Campanha Nike">
          <img className="auth-shoe" src={shoeImage} alt="Tênis Nike" />
          <div className="auth-promo-copy">
            <strong>NIKE</strong>
            <h2>{promoTitle}</h2>
            <span className="auth-promo-rule" />
          </div>
        </aside>
      </div>
    </main>
  );
}
