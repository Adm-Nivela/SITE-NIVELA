const WHATSAPP_PHONE = "5521978918246";
const WHATSAPP_MESSAGE =
  "Olá! Gostaria de solicitar uma avaliação técnica para o meu imóvel.";

export const whatsappHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
