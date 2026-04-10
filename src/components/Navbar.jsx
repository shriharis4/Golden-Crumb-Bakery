import { useState } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cakes", label: "Cakes" },
    { to: "/custom", label: "Custom Orders" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#FFD84D] via-[#FFE066] to-[#FFD84D] backdrop-blur-sm shadow-lg sticky top-0 z-40 border-b-2 border-[#4A2C2A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#4A2C2A] rounded-full flex items-center justify-center shadow-lg border-2 border-[#FFE066]">
              <span className="text-[#FFD84D] text-xl">🎂</span>
            </div>
            <span className="text-xl font-Fustat font-bold text-[#4A2C2A]">Cake De Lite</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.to} 
                to={link.to} 
                className="text-[#4A2C2A] hover:text-[#8B5E3C] font-semibold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5E3C] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <WhatsAppButton 
              message="I want to order a cake" 
              className="bg-[#4A2C2A] text-white px-5 py-2.5 rounded-xl hover:bg-[#3a1f1d] transition-all hover:shadow-lg border-2 border-[#4A2C2A]"
            >
              Order Now
            </WhatsAppButton>
          </div>

          <button 
            className="md:hidden p-2 text-[#4A2C2A]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#FFE066] rounded-b-xl shadow-xl py-4 animate-fade-in border-t-2 border-[#4A2C2A]/20">
            {navLinks.map(link => (
              <Link 
                key={link.to} 
                to={link.to} 
                className="block px-4 py-3 text-[#4A2C2A] hover:bg-[#FFD84D] hover:text-[#8B5E3C] transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <WhatsAppButton 
                message="I want to order a cake" 
                className="w-full justify-center bg-[#4A2C2A] text-white"
              >
                Order Now
              </WhatsAppButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
