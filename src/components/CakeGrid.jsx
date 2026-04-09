import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cakes } from '../data';
import WhatsAppButton from './WhatsAppButton';

const ScrollAnimation = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

const CakeGrid = () => {
  return (
    <section className="bg-cream py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary-yellow text-dark-brown px-4 py-1 rounded-full text-sm font-medium mb-4">
              Featured
            </span>
            <h2 className="text-4xl font-Fustat text-dark-brown mb-4">
              Our Sweet Creations
            </h2>
            <p className="text-dark-brown/70 max-w-xl mx-auto">
              Handcrafted with love, each cake is a masterpiece designed to make your celebration unforgettable
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cakes.slice(0, 12).map((cake, index) => (
            <ScrollAnimation key={cake.id} delay={index * 50}>
              <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-dark-brown shadow-sm">
                    {cake.category}
                  </div>
                  
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <WhatsAppButton
                      message={`I want to order the ${cake.title} (${cake.price})`}
                      className="bg-whatsapp-green text-white px-4 py-2 rounded-full text-sm shadow-lg"
                    >
                      Quick Order
                    </WhatsAppButton>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-Fustat font-semibold text-dark-brown mb-2 group-hover:text-caramel-brown transition-colors">
                    {cake.title}
                  </h3>
                  <p className="text-sm text-dark-brown/70 mb-4 line-clamp-2">
                    {cake.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-caramel-brown">{cake.price}</span>
                    <Link 
                      to="/cakes"
                      className="text-sm text-dark-brown/50 hover:text-caramel-brown transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/cakes"
            className="inline-flex items-center gap-2 bg-dark-brown text-white px-8 py-4 rounded-2xl font-medium hover:bg-caramel-brown transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View All Cakes
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CakeGrid;