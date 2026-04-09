import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow via-secondary-yellow to-primary-yellow" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-caramel-brown/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-dark-brown/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cream/40 rounded-full blur-2xl" />
      </div>

      <div className="absolute top-4 left-8 w-16 h-16 opacity-20">
        <svg viewBox="0 0 100 100" className="text-dark-brown fill-current">
          <path d="M50 10 C30 10 20 30 20 50 C20 70 35 85 50 90 C65 85 80 70 80 50 C80 30 70 10 50 10 M40 40 L60 40 L55 70 L45 70 Z" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-8 w-12 h-12 opacity-15">
        <svg viewBox="0 0 100 100" className="text-caramel-brown fill-current">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2 rounded-full text-dark-brown text-sm font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 bg-whatsapp-green rounded-full animate-pulse" />
              Made Fresh Every Day
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-Fustat font-bold text-dark-brown mb-6 leading-tight">
              Delight in{' '}
              <span className="text-caramel-brown relative">
                Every Bite
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path d="M2,8 Q50,0 198,6" stroke="#8B5E3C" strokeWidth="3" fill="none" className="text-caramel-brown" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-dark-brown/80 mb-8 max-w-xl mx-auto lg:mx-0">
              From custom celebration cakes to everyday treats, Cake De Lite brings sweetness to every moment of your special occasions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <WhatsAppButton
                message="I want to order a cake"
                className="bg-dark-brown text-white px-8 py-4 rounded-2xl text-lg hover:bg-caramel-brown transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Order Now
              </WhatsAppButton>
              <Link
                to="/cakes"
                className="inline-flex items-center justify-center border-2 border-dark-brown text-dark-brown px-8 py-4 rounded-2xl text-lg font-medium hover:bg-dark-brown hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                Explore Cakes
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-yellow to-primary-yellow rounded-3xl transform rotate-3" />
              <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d958f?w=600&h=600&fit=crop"
                  alt="Delicious cake"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/30 to-transparent" />
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-yellow rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎂</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark-brown">500+ Cakes</p>
                    <p className="text-xs text-dark-brown/60">Sold</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-yellow rounded-full flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark-brown">4.9 Rating</p>
                    <p className="text-xs text-dark-brown/60">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start gap-8 mt-16 pt-8 border-t border-dark-brown/10">
          <div className="text-center">
            <p className="text-3xl font-Fustat font-bold text-dark-brown">12+</p>
            <p className="text-sm text-dark-brown/60">Cake Varieties</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-Fustat font-bold text-dark-brown">500+</p>
            <p className="text-sm text-dark-brown/60">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-Fustat font-bold text-dark-brown">5★</p>
            <p className="text-sm text-dark-brown/60">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;