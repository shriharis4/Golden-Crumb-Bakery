import { useState, useEffect, useRef } from 'react';
import { testimonials } from '../data';

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

const Testimonials = () => {
  return (
    <section className="bg-white py-20 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-caramel-brown rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary-yellow rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary-yellow text-dark-brown px-4 py-1 rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl font-Fustat text-dark-brown mb-4">
              What Our Customers Say
            </h2>
            <p className="text-dark-brown/70 max-w-xl mx-auto">
              Don't just take our word for it - hear from our happy customers
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={testimonial.id} delay={index * 100}>
              <div className="bg-cream rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-secondary-yellow rounded-full flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-caramel-brown" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5.5A3.5 3.5 0 015.5 2H9c2.837 0 5.18.931 6.41 2.762a4.5 4.5 0 011.19 3.336 9.5 9.5 0 01-3.6 6.458 3.5 3.5 0 01-1.12.692v1.052c0 .653-.38 1.225-.956 1.512a2.5 2.5 0 01-1.684.094l-.72-.36a3.5 3.5 0 01-2.074-.976 3.5 3.5 0 01-1.376-2.598V14.5a3.5 3.5 0 01-2.5-3.31V8.5h1.5a.5.5 0 010 1H3v.5a.5.5 0 01.5.5 2 2 0 001.5 1h1.5v1.5a.5.5 0 01-1 0V9.5H5.5a.5.5 0 010-1H6V6.5a.5.5 0 01.5-.5H8V5.5z" />
                  </svg>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-secondary-yellow"
                  />
                  <div>
                    <h4 className="font-Fustat font-semibold text-dark-brown">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-dark-brown/80 text-sm italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;