import React from "react";
import { Facebook, Instagram, X } from "@mui/icons-material";
import { footerLinks } from "./footerLinksData";
import "../Main/footerMain.css"
import { ul } from "framer-motion/client";
function FooterMain() {
  return (
    <section className="footer-main-wrapper">
      <div className="logo-socials-wrapper">
        <h2 className="logo">Tech & Ride</h2>
        <p className="footer-parag">
          Nosso compromisso é entregar produtos de alta qualidade e excelente
          serviço. Nosso objetivo é tornar cada compra satisfatória, garantindo um bom
          e experiência de compra agradável.
        </p>
        <ul className="share-socials-wrapper footer">
          <li className="share-item">
            <a href="https://www.x.com" target="_blank" className="share-link">
              <X fontSize="large" />
            </a>
          </li>
          <li className="share-item">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="share-link"
            >
              <Facebook fontSize="large" />
            </a>
          </li>
          <li className="share-item">
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="share-link"
            >
              <Instagram fontSize="large" />
            </a>
          </li>
        </ul>
      </div>
      <ul className="footer-links">
        {footerLinks.map((obj) => {
          return (
            <li key={obj.id} className="link-heading">
              <h2 className="category">{obj.category}</h2>
              {obj.links.map((link,i) => (
                <ul key={i} className="footer-link">
                  <li  className="footer-link">{link.name}</li>
                </ul>
              ))}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FooterMain;
