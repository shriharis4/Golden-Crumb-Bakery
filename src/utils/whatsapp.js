import { WHATSAPP_NUMBER, FALLBACK_IMAGE } from '../data';

export const createWhatsAppLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export { FALLBACK_IMAGE };