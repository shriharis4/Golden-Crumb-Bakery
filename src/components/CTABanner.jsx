import { useState, useEffect, useRef } from 'react';
import WhatsAppButton from './WhatsAppButton';
import { Link } from 'react-router-dom';

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

const CTABanner = () => {
  return (
    <section className="bg-dark-brown py-20 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="absolute top-0 left-1/4 w-32 h-32 bg-caramel-brown/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-secondary-yellow/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div>
              <h2 className="text-4xl md:text-5xl font-Fustat font-bold text-cream mb-6">
                Ready to Order Your Dream Cake?
              </h2>
              <p className="text-cream/80 text-lg mb-8 max-w-lg">
                Whether it's a birthday, wedding, or any special occasion, we're here to make it sweeter. 
                Order now and let us create something special for you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton 
                  message="Hi Cake De Lite, I want to order a custom cake" 
                  className="bg-whatsapp-green text-white px-8 py-4 rounded-2xl text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Order Your Custom Cake
                </WhatsAppButton>
                <Link 
                  to="/custom"
                  className="inline-flex items-center justify-center border-2 border-cream text-cream px-8 py-4 rounded-2xl text-lg font-medium hover:bg-cream hover:text-dark-brown transition-all duration-300"
                >
                  Design Your Own
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">🎂</div>
                    <p className="text-cream font-medium">Custom Designs</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">🚚</div>
                    <p className="text-cream font-medium">Free Delivery</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">🎁</div>
                    <p className="text-cream font-medium">Gift Wrapping</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">⭐</div>
                    <p className="text-cream font-medium">Premium Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;