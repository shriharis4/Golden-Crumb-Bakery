import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data';

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

const Categories = () => {
  return (
    <section className="bg-primary-yellow py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary-yellow text-dark-brown px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl font-Fustat text-dark-brown mb-4">
              Browse by Category
            </h2>
            <p className="text-dark-brown/70 max-w-xl mx-auto">
              From birthdays to weddings, we have the perfect cake for every occasion
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <ScrollAnimation key={category.id} delay={index * 100}>
              <Link 
                to="/cakes"
                className="group block relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/80 via-dark-brown/20 to-transparent opacity-90" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
                      <span className="text-dark-brown font-medium">View Cakes</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-xl font-Fustat text-dark-brown mb-2 group-hover:text-caramel-brown transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-dark-brown/70 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center text-caramel-brown font-medium text-sm group-hover:text-dark-brown transition-colors">
                    <span>Explore Collection</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;