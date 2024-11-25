import React, { useContext } from "react";
import { DataContext } from "../App";
import { Link } from "react-router-dom";
import success from "../assets/images/success.svg"
import "../Styles/orderConfirmation.css"
function OrderConfirmation() {
  const { cartState, dispatchCart } = useContext(DataContext);
  return (
    <section className="orderConfirmation-wrapper">
      <div className="orderConfirmation-container">
        <img src={success} alt="" className="success-icon" />
        <h1 className="confirmation-title">Thank you!</h1>
        <h2 className="order-num">Order #{cartState?.orderNumber}</h2>
        <p className="confirmation-parag">
          Recebemos seu pedido e todas as atualizações serão enviadas para este e-mail
          endereço{" "}
          <span className="confirm-email">
            {cartState?.personalDetails?.email}
          </span>
        </p>
        <Link to="/" 
        onClick={()=> dispatchCart({type:"CLEAR_CART"})}
        className="link confirmation"
        >
            Continuar comprando
            </Link>
      </div>
    </section>
  );
}

export default OrderConfirmation;
