import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import { businessInfo } from '../data';

const Footer = () => {
  return (
    <footer className="bg-dark-brown text-cream py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-caramel-brown rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary-yellow rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary-yellow rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🎂</span>
              </div>
              <div>
                <h3 className="text-xl font-Fustat font-bold">Cake De Lite</h3>
                <p className="text-cream/60 text-xs">Premium Bakery</p>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed mb-6">
              Bringing sweetness to every moment with our handcrafted cakes made fresh daily with love and passion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-whatsapp-green transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.3-.4-3.5-1.2-4.8z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-Fustat font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-cream/80 hover:text-secondary-yellow transition-colors text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-yellow rounded-full" />
                Home
              </Link></li>
              <li><Link to="/cakes" className="text-cream/80 hover:text-secondary-yellow transition-colors text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-yellow rounded-full" />
                Cakes
              </Link></li>
              <li><Link to="/custom" className="text-cream/80 hover:text-secondary-yellow transition-colors text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-yellow rounded-full" />
                Custom Orders
              </Link></li>
              <li><Link to="/gallery" className="text-cream/80 hover:text-secondary-yellow transition-colors text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-yellow rounded-full" />
                Gallery
              </Link></li>
              <li><Link to="/contact" className="text-cream/80 hover:text-secondary-yellow transition-colors text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-yellow rounded-full" />
                Contact
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-Fustat font-semibold mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span>{businessInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V0a2 2 0 012-2h12a2 2 0 012 2v8z" />
                  </svg>
                </div>
                <span>{businessInfo.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>{businessInfo.hours}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-Fustat font-semibold mb-6 text-lg">Order Now</h4>
            <p className="text-cream/80 text-sm mb-6">
              Ready to place your order? Chat with us on WhatsApp for quick ordering!
            </p>
            <WhatsAppButton message="Hi Cake De Lite, I want to place an order" className="bg-whatsapp-green hover:bg-green-600" />
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm">
              © 2026 Cake De Lite. All rights reserved.
            </p>
            <p className="text-cream/60 text-sm flex items-center gap-2">
              Made with <span className="text-red-400">❤️</span> for cake lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;