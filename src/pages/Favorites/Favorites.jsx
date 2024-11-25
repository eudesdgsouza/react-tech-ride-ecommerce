import React, { useContext } from "react";
import FocusTrap from "focus-trap-react";
import empty from "../../assets/images/empty-fav.svg";
import { ThumbDown } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import "../../Styles/favorites.css";
import CategoryProductCard from "../../Components/CategoryProductCard";
function Favorites() {
  const { favoritesState } = useContext(DataContext);
  return (
    <section className="favorites-page-wrapper">
      <div className="favorites-container">
        <h1 className="favorites-title">My Favorites</h1>
        {favoritesState?.length < 1 && (
          <article className="favorites-empty-container">
            <h2 className="empty-title">
              Uh Oh! <ThumbDown fontSize="large" />
            </h2>
            <p className="fav-parag">
              Nenhum produto adicionado ainda! Todos os produtos que você gosta aparecerão aqui!
            </p>
            <img src={empty} alt="Empty illustration" className="empty-img" />
            <Link className="empty-link" to="/">
              Continuar comprando
            </Link>
          </article>
        )}

        {favoritesState.length >= 1 && (
          <article className="favorites-filled-container">
            <CategoryProductCard categoryData={favoritesState} />
          </article>
        )}
      </div>
    </section>
  );
}

export default Favorites;
