import motorcycles from "../../assets/images/categories/motorcycle.svg";
import car from "../../assets/images/categories/car.svg";
import tablets from "../../assets/images/categories/tablets.svg";
import laptops from "../../assets/images/categories/computers.svg";

import motorcyclesMobile from "../../assets/images/categories/mobile/motorcycle.svg";
import carMobile from "../../assets/images/categories/mobile/cars.svg";
import tabletsMobile from "../../assets/images/categories/mobile/tablets.svg";
import laptopsMobile from "../../assets/images/categories/mobile/computers.svg";

export const categoryHeaderData = {
  motorcycle: {
    bgImage: { desktop: motorcycles, mobile: motorcyclesMobile },
    heading: "Motocicletas",
    parag:
      "Abrace a liberdade da estrada aberta com a nossa gama dinâmica de motos, cada uma concebida para um desempenho e estilo excepcionais. Com modelos desenvolvidos para velocidade, aventura ou deslocamento urbano, há uma bicicleta que atende às necessidades de cada ciclista.",
  },
  vehicle: {
    bgImage: { desktop: car, mobile: carMobile },
    heading: "Super Carros",
    parag: "Experimente a emoção de dirigir com nossa seleção premium de carros, criados para oferecer desempenho e conforto incomparáveis. Da tecnologia de ponta aos interiores luxuosos, estes veículos são construídos para elevar cada viagem.",
  },
  tablets: {
    bgImage: { desktop: tablets, mobile: tabletsMobile },
    heading: "Tablets",
    parag: "Explore uma variedade de tablets que combinam funcionalidade com portabilidade, tornando-os ideais para uso pessoal e profissional. Com telas de alta resolução e processadores rápidos, esses dispositivos são perfeitos para streaming, esboços ou para manter a produtividade em qualquer lugar.",
  },
  laptops: {
    bgImage: { desktop: laptops, mobile: laptopsMobile },
    heading: "Notebooks",
    parag: "Nossa linha de notebooks potentes projetados para atender às demandas de trabalho, jogos e atividades criativas. Equipadas com os mais recentes processadores, ecrãs nítidos e amplo armazenamento, estas máquinas realizam multitarefas sem esforço.",
  },
};
