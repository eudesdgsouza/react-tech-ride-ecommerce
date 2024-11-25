import deliveryIcon from "../../../assets/images/home/faqs/delivery.svg"
import paymentIcon from "../../../assets/images/home/faqs/payment.svg"
import trackingIcon from "../../../assets/images/home/faqs/tracking.svg"
import returnIcon from "../../../assets/images/home/faqs/return.svg"
import contactIcon from "../../../assets/images/home/faqs/contact.svg"

export const faqsData = [
   
    {
        id: 2,
        question: "Quais métodos de pagamento você aceita?",
        answer: {
            subHeading: "Várias opções de pagamento para sua comodidade",
            options: [
                "Cartão de Crédito/Débito: Visa, MasterCard, American Express",
                "PayPal: Pague com segurança através da sua conta PayPal",
                "Apple Pay & Google Pay: Use carteiras digitais para checkout mais rápido",
                "Pagamento na entrega: Disponível para regiões selecionadas"
            ]
        },
        icon: paymentIcon
    },
    {
        id: 1,
        question: "Quais são suas opções de entrega e custos?",
        answer: {
            subHeading: "Três opções de entrega com baixo custo",
            options: [
                "Entrega padrão: entrega em 5 a 7 dias (grátis)",
                "Entrega expressa: entrega em 2 a 4 dias (R$ 5,00 por item)",
                "Entrega no mesmo dia: entrega em 24 horas (R$ 5,00 por item) - aplicam-se restrições de localização",
            ]
        },
        icon: deliveryIcon
    },
    {
        id: 3,
        question: "Como posso rastrear meu pedido?",
        answer: {
            subHeading: "Opções fáceis de rastreamento para mantê-lo atualizado",
            options: [
                "Assim que seu pedido for enviado, você receberá um e-mail de confirmação com um link de rastreamento",
                "Você também pode acompanhar seu pedido através da seção 'Histórico de pedidos' em sua conta",
                "Para quaisquer atrasos ou atualizações, iremos notificá-lo por e-mail ou SMS"
            ]
        },
        icon: trackingIcon
    },
    {
        id: 4,
        question: "Posso devolver ou trocar um item?",
        answer: {
            subHeading: "Política direta de devolução e troca",
            options: [
                "Os itens podem ser devolvidos no prazo de 30 dias após a entrega em condições originais",
                "São possíveis trocas por itens de igual ou menor valor no prazo de 30 dias",
                "Para iniciar uma devolução, visite a página 'Devoluções e Trocas' na sua conta"
            ]
        },
        icon: returnIcon
    },
    {
        id: 5,
        question: "Como posso entrar em contato com a Tech & Ride?",
        answer: {
            subHeading: "Múltiplas opções de contato",
            options: [
                "E-mail suporte@tech-ride.com",
                "Ligue (87) 99999-9999",
                "Visite nosso site"
            ]
        },
        icon: contactIcon
    }
];