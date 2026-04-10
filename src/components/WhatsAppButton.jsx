import { createWhatsAppLink } from '../utils/whatsapp';

const WhatsAppButton = ({ message, className = '', variant = 'inline', children }) => {
  const whatsappLink = createWhatsAppLink(message);

  if (variant === 'floating') {
    return (
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 border-2 border-white"
        aria-label="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.3-.4-3.5-1.2-4.8z"/>
          <path d="M12 21.4c-1.6 0-3.2-.5-4.6-1.4l-.1-.2-.1-.1c-.1-.1-.1-.2-.1-.2-.2-.4-.3-.8-.3-.9 0-.1.1-.3.1-.3s0-.1.1-.2c.2-.4.4-.8.7-1l.4-.5c.2-.2.4-.4.5-.5.1-.1.2-.3.2-.3.1-.1.2-.2.3-.2s.2-.1.3-.1c.4.2.8.3 1.2.3.4 0 .8-.1 1.2-.3.4-.2.6-.4.7-.6.1-.2.2-.3.2-.5 0-.1-.1-.3-.2-.4-.1-.2-.2-.4-.2-.5 0-.2.1-.3.3-.4s.3-.1.4-.1c.4-.2.7-.5.9-.9.2-.3.3-.7.2-1.1-.1-.4-.3-.8-.6-1.1l-.4-.3c-.2-.2-.4-.3-.5-.5-.1-.2-.2-.3-.2-.5 0-.2.1-.3.3-.4s.3-.1.4-.1c.3-.2.5-.4.5-.7 0-.2-.1-.3-.2-.5l-.2-.4c-.1-.2-.1-.3-.1-.5 0-.2.1-.3.3-.4s.3-.1.4-.1c.2-.1.4-.2.5-.4.1-.1.2-.3.2-.4.1-.1.2-.2.2-.3s.1-.1.2-.1c.2-.1.3-.2.5-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3s.4-.1.6-.2c.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3.2-.1.4-.2.6-.3z"/>
        </svg>
      </a>
    );
  }

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 bg-[#8B5E3C] text-white px-4 py-2 rounded-xl hover:bg-[#4A2C2A] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 border-2 border-[#8B5E3C] hover:border-[#4A2C2A] ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.3-.4-3.5-1.2-4.8z"/>
      </svg>
      {children || 'Order via WhatsApp'}
    </a>
  );
};

export default WhatsAppButton;
