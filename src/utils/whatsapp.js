import { WHATSAPP_NUMBER } from '../data';
import { fallbackImage } from './images';

export const createWhatsAppLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export { fallbackImage };
