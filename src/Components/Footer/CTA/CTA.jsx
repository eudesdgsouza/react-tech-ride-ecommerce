import { Check, ShoppingBag } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "../CTA/cta.css";
// import "../../Footer/footer.css"

function CTA() {
  const [email, setEmail] = useState("");
  const [isValid, setValid] = useState(true);
  const [showToast, setToast] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !emailRegex.test(email)) {
      setValid(false);
      return;
    }
    setValid(true);
    setToast(true);
    setEmail("")

  };
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);
  return (
    <article className="CTA-wrapper">
      <div className="icon-info-wrapper">
        <span className="cta-icon">
          <ShoppingBag fontSize="large" />
        </span>
        <div className="info-wrapper">
          <h2 className="cta-title">
            Inscreva-se para receber descontos e recomendações!
          </h2>
          <p className="cta-parag">
            Cadastre-se hoje para ofertas exclusivas, insights de tendências e notícias da empresa!
          </p>
        </div>
      </div>
      <form className="cta-form" onSubmit={handleSubmit}>
        <fieldset className="cta-field">
          <label htmlFor="email" className="cta-label">
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValid(true);
              }}
              className="cta-input"
              id="email"
            />
          </label>
          <button type="submit" className="cta-btn">
            Inscrever-se
          </button>
        </fieldset>
        {!isValid && (
          <span className="error-message">Digite um e-mail válido</span>
        )}
        {showToast && (
          <div className="toast-title">
            <span>
              <Check fontSize="large" />
            </span>
            Inscrito!
          </div>
        )}
      </form>
    </article>
  );
}

export default CTA;
