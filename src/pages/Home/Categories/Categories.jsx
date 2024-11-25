import React from "react";
import { categoryData } from "./categoriesData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CallMadeIcon from "@mui/icons-material/CallMade";
import "../Categories/category.css";

function Categories() {
  const checkClassName = (currentID) => {
    switch (currentID) {
      case 0:
        return "motorcicleta";
      case 1:
        return "computadores";
      case 2:
        return "veiculo";
      case 3:
        return "tablets";
      default:
        return "";
    }
  };
  return (
    <section className="categories-wrapper">
      <h2 className="title-category">Nossas categorias</h2>

      <div className="category-grid">
      {categoryData.map((item) => (
  <div
    key={item.id}
    className={`category-item ${checkClassName(item.id)}`}
  >
    {/* Background Image */}
    <motion.div
      className="background-image"
      style={{ backgroundImage: `url(${item.image})` }}
      whileHover={{ scale: 1.1 }} 
      transition={{ duration: 0.4, ease: "easeInOut" }}
    />

    {/* Content */}
    <div className="link-title-wrapper">
      <h3 className="category-title">{item.altText}</h3>
      <Link to={item.path} className="category-link">
        <CallMadeIcon fontSize="large" className="category-icon" />
      </Link>
    </div>
  </div>
))}
      </div>
    </section>
  );
}

export default Categories;
