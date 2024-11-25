// data.js
import {
  FlashAuto,
  TaskAlt,
  WorkspacePremium,
  Apple,
  Google,
  Euro,
} from "@mui/icons-material";

export const deliveryData = [
  {
    id: 4,
    label: "Standard",
    value: "standard",
    cost: 0,
    icon: TaskAlt,
    info:"A entrega leva de 5 a 7 dias sem nenhum custo extra"
  },
  {
    id: 5,
    label: "Express",
    value: "express",
    cost: 5,
    icon: WorkspacePremium,
    info:"A entrega leva de 2 a 4 dias a R$ 5,00 por item"
  },
  { 
    id: 6, 
    label: "Same-day", 
    value: "same-day", 
    cost: 10, 
    icon: FlashAuto,
    info:"Entrega no mesmo dia a R$ 10,00 por item" 
  },
];

export const paymentData = [
  { id: 8, label: " Pagar", value: "google-pay", icon: Google },
  { id: 9, label: "Dinheiro", value: "cash", icon: Euro },
  { id: 7, label: " Pagar", value: "apple-pay", icon: Apple },

];
