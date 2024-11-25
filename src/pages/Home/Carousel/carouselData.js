import motorcycle from "../../../assets/images/home/carousel/motorcycle.svg";
import computers from "../../../assets/images/home/carousel/computers.svg";
import car from "../../../assets/images/home/carousel/cars.svg";
import tablets from "../../../assets/images/home/carousel/tablets.svg";

import motorcycleMobile from "../../../assets/images/home/carousel/mobile/motorcycle.svg";
import computersMobile from "../../../assets/images/home/carousel/mobile/computers.svg";
import carMobile from "../../../assets/images/home/carousel/mobile/cars.svg";
import tabletsMobile from "../../../assets/images/home/carousel/mobile/tablets.svg";

export const carouselData = [
  {
    id: 0,
    headingText: "Motocicletas",
    parag: "Explore motocicletas potentes para cada aventura.",
    imgSrc: { mobile: motorcycleMobile, desktop: motorcycle },
    path: "/motorcycle",
  },

  {
    id: 1,
    headingText: "Super Carros",
    parag: "Compre carros com recursos e design de primeira linha.",
    imgSrc: { mobile: carMobile, desktop: car },
    path: "/vehicle",
  },

  {
    id: 2,
    headingText: "Computadores",
    parag: "Encontre computadores de alto desempenho para trabalhar e se divertir.",
    imgSrc: { mobile: computersMobile, desktop: computers },
    path: "/laptops",
  },
  {
    id: 3,
    headingText: "Tablets",
    parag: "Descubra tablets para trabalho, criatividade e entretenimento.",
    imgSrc: { mobile: tabletsMobile, desktop: tablets },
    path: "/tablets",
  },
];
