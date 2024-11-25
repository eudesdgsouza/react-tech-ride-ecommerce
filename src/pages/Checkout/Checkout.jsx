import React, { useContext, useEffect, useState } from "react";
import OrderItemList from "../../Components/OrderItemList";
import "../../Styles/checkout.css";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../App";
import PersonalDetails from "./CheckoutForms/PersonalDetails";
import emptyCart from "../../assets/images/empty-cart.svg";
import CheckoutForm from "./CheckoutForm";
import { AnimatePresence,motion } from "framer-motion";
import { detailsCheckoutVariants } from "../../Variants";

function Checkout() {
  const { categories, cartState } = useContext(DataContext);
  const [showMessage, setShowMessage] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    if (cartState.cartItems.length === 0) {
      setShowMessage(true); // Show the "cart is empty" message.
      // Start the countdown: decrease by 1 every second.
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      // Clean up the interval when the component unmounts or if cart items change.
      return () => clearInterval(timer);
    }
  }, [cartState.cartItems]);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/"); 
    }
  }, [countdown, navigate]);
  return (
    <section className="checkout-wrapper">
      <header className="checkout-header">
        <div className="breadcrumb-wrapper">
          <Link to="/" className="checkout-breadcrumb">
            Home /
          </Link>
          {categories.map((category, i) => (
            <Link to={`/${category}`} className="checkout-breadcrumb" key={i}>
              {" "}
              {` ${category} ${categories.length - 1 === i ? "" : " /"}`}{" "}
            </Link>
          ))}
        </div>
      </header>
      <div className="check-out-container">
      <AnimatePresence mode="wait">
        <motion.article 
        className="form-wrapper"
        variants={detailsCheckoutVariants}
        initial="hidden"
        animate="visible"
        custom="left"
        >
          <h1 className="checkout-title">Confira</h1>
          <p className="checkout-parag">
            Informe seus dados para fazer seu pedido!
          </p>
          <CheckoutForm />
        </motion.article>
        </AnimatePresence>

        <AnimatePresence mode="wait">
        <motion.article 
        className="order-summary-wrapper"
        variants={detailsCheckoutVariants}
        initial="hidden"
        animate="visible"
        custom="right"
        >
          <header className="order-summary-header">
          <h2 className="checkout-title">Resumo do pedido</h2>
          <p className="summary-parag">Revise seu carrinho antes de fazer o pedido!</p>

          </header>
          {showMessage ? (
            <div className="cart-empty">
              <h2 className="empty-title checkout">Seu carrinho está vazio</h2>
              <p className="redirect">Redirecionamento do navegador em...</p>
              <span className="counter">{countdown}</span>
              <img
                src={emptyCart}
                alt="Empty cart illustration"
                className="empty-img cart"
              />
            </div>
          ) : (
            <div className="item-list-container">
              <OrderItemList />
            </div>
          )}
        </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Checkout;
