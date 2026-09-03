const WHATSAPP_PHONE = "5521978918246";

const WHATSAPP_MESSAGE =
  "Olá! Gostaria de solicitar um diagnóstico técnico para o meu imóvel.";

export function getWhatsAppHref(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const whatsappHref = getWhatsAppHref();
