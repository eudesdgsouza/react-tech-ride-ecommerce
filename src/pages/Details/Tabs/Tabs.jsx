import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "../../../Styles/tabs.css";
import profile from "../../../assets/images/profile.png";
import { Star } from "@mui/icons-material";
import Policies from "./Policies/Policies";
import { sliderVariants } from "../../../Variants";

function Tabs({ productObj, images }) {
  const [tab, setTab] = useState("Details");
  const [direction, setDirection] = useState("left");

  const updateTab = (currentTab) => {
    setTab(currentTab)
    setDirection(tab === "Details" ? "right": "left")
  }
  const tabsData = [
    {
      id: 0,
      tabName: "Detalhes",
    },
    {
      id: 1,
      tabName: "Comentários",
    },
    {
      id: 2,
      tabName: "Políticas",
    },
  ];
  return (
    <section className="tabs-wrapper">
      <header className="tabs-header">
        {tabsData.map((tabObj) => {
          const isActive = tabObj.tabName === tab;

          return (
            <button
              key={tabObj.id}
              type="button"
              className={`tab-btn ${isActive && "active-tab"}`}
              onClick={() => updateTab(tabObj.tabName)}
            >
              {tabObj.tabName}
            </button>
          );
        })}
      </header>
      <AnimatePresence mode="wait">
      <motion.div
        className="tab-info-wrapper"
        key={tab}
        variants={sliderVariants(direction)}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {tab === "Details" && (
          <div className="details-tab">
            <article className="tab-text-wrapper">
              <h2 className="tab-title">{productObj?.title}</h2>
              <p className="tab-parag">{productObj?.description}</p>
            </article>
            <div className="tab-image-wrapper">
              {images.slice(0, 2).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Product Illustration Image"
                  className="details-img"
                />
              ))}
              <div className="image-overlay"></div>
            </div>
          </div>
        )}
        {tab === "Reviews" && (
          <div className="reviews-tab">
            <div className="tab-text-wrapper">
              <h2 className="tab-title">O que nossos clientes dizem!</h2>
              <p className="tab-parag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore ratione accusamus consectetur atque nam possimus
                sapiente ad nemo facilis suscipit.
              </p>
            </div>
            <div className="review-grid">
              {productObj?.reviews.map((review, index) => {
                const dateString = review.date;
                const date = new Date(dateString);

                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
                const day = String(date.getDate()).padStart(2, "0");

                // Formatting the date
                const formattedDate = `${year}-${month}-${day}`;

                return (
                  <div
                    key={index}
                    className={`review-card ${index === 2 && "last"}`}
                  >
                    <header className="card-header">
                      <div className="profile-wrapper">
                        <img
                          src={profile}
                          alt="Profile picture illustration"
                          className="profile-img"
                        />
                      </div>
                      <div className="name-email">
                        <h3 className="reviewer-name">
                          {review?.reviewerName}
                        </h3>
                        <p className="reviewer-email">
                          {review?.reviewerEmail}
                        </p>
                      </div>
                    </header>
                    <div className="review-body">
                      <p className="comment">{review?.comment}</p>
                      <p className="comment">
                        "Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium esse suscipit mollitia!"
                      </p>
                      <div className="review-footer">
                        <p className="date">{formattedDate}</p>
                        <div className="rating-wrapper">
                          {Array.from({ length: 5 }, (_, index) => {
                            const isFilled = index < review?.rating;
                            return (
                              <Star
                                key={index}
                                fontSize="large"
                                className={`star-icon ${isFilled && "filled"}`}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {tab === "Policies" && <Policies />}
      </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Tabs;
