import { WHATSAPP_NUMBER } from '../data';

export const createWhatsAppLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};