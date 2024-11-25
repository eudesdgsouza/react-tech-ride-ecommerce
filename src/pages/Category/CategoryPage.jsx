import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CategoryHeader from "../../Components/CategoryHeader";
import { categoryHeaderData } from "./categoryHeaderData";
import CategoryProductCard from "../../Components/CategoryProductCard";
import { DataContext } from "../../App";

function CategoryPage() {
  const { category } = useParams();
  const { stateData } = useContext(DataContext);

  const headerInfo = categoryHeaderData[category] || {
    heading: "Categoria não encontrada",
    parag: "A categoria que você procura não existe.",
  };;
  const categoryData = stateData?.[category];
  return (
    <section className="category-page-wrapper">
      <CategoryHeader headerInfo={headerInfo} />
      <CategoryProductCard categoryData={categoryData} />
    </section>
  );
}

export default CategoryPage;
