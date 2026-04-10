import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import { FALLBACK_IMAGE } from '../data';

const HeroSection = () => {
  const confettiItems = [
    { left: '15%', delay: '1.2s', duration: '3.5s' },
    { left: '25%', delay: '0.8s', duration: '4.2s' },
    { left: '45%', delay: '2.1s', duration: '3.8s' },
    { left: '60%', delay: '0.5s', duration: '4.5s' },
    { left: '75%', delay: '1.8s', duration: '3.2s' },
    { left: '85%', delay: '3.2s', duration: '4.0s' },
    { left: '20%', delay: '2.5s', duration: '3.9s' },
    { left: '35%', delay: '1.5s', duration: '4.1s' },
    { left: '55%', delay: '0.9s', duration: '3.6s' },
    { left: '70%', delay: '2.8s', duration: '4.3s' },
    { left: '80%', delay: '1.1s', duration: '3.7s' },
    { left: '90%', delay: '2.0s', duration: '4.4s' }
  ];

  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-[#FFD84D] via-[#FFE066] to-[#E6C442]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-32 w-56 h-56 bg-white/20 rounded-full blur-3xl animate-float-delay-1" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#4A2C2A]/10 rounded-full blur-2xl animate-float-delay-2" />
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-white/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {confettiItems.map((item, i) => (
          <div
            key={i}
            className="absolute animate-confetti"
            style={{
              left: item.left,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            <svg className="w-4 h-4 text-[#4A2C2A]/40" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2L12 8L18 8L13 12L15 18L10 14L5 18L7 12L2 8L8 8L10 2Z" />
            </svg>
          </div>
        ))}
      </div>

      <div className="absolute top-4 left-8 w-16 h-16 opacity-40 animate-float">
        <svg viewBox="0 0 100 100" className="text-[#4A2C2A] fill-current">
          <path d="M50 10 C30 10 20 30 20 50 C20 70 35 85 50 90 C65 85 80 70 80 50 C80 30 70 10 50 10 M40 40 L60 40 L55 70 L45 70 Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#4A2C2A] backdrop-blur-sm px-5 py-2 rounded-full text-white text-sm font-medium mb-6 shadow-lg border-2 border-[#FFE066]">
              <span className="w-2 h-2 bg-[#FFD84D] rounded-full animate-pulse" />
              Made Fresh Every Day
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-Fustat font-bold text-[#4A2C2A] mb-6 leading-tight">
              Delight in{' '}
              <span className="text-[#4A2C2A] relative inline-block">
                Every Bite
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path d="M2,8 Q50,0 198,6" stroke="#FFE066" strokeWidth="4" fill="none" />
                </svg>
                <span className="absolute -inset-2 bg-[#FFE066]/30 blur-xl animate-pulse-soft rounded-full" />
              </span>
            </h1>
            
            <p className="text-xl text-[#4A2C2A]/80 mb-8 max-w-xl mx-auto lg:mx-0">
              From custom celebration cakes to everyday treats, Cake De Lite brings sweetness to every moment of your special occasions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <WhatsAppButton
                message="I want to order a cake"
                className="bg-[#4A2C2A] text-white px-8 py-4 rounded-2xl text-lg hover:bg-[#3a1f1d] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Order Now
              </WhatsAppButton>
              <Link
                to="/cakes"
                className="inline-flex items-center justify-center bg-white border-2 border-[#4A2C2A] text-[#4A2C2A] px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#4A2C2A] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFE066] to-[#E6C442] rounded-3xl transform rotate-3 animate-pulse-soft" />
              <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d958f?w=600&h=600&fit=crop"
                  alt="Delicious cake"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/30 to-transparent" />
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-bounce-gentle border-2 border-[#FFE066]" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFE066] rounded-full flex items-center justify-center border-2 border-[#E6C442]">
                    <span className="text-2xl">🎂</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#4A2C2A]">500+ Cakes</p>
                    <p className="text-xs text-[#4A2C2A]/60">Sold</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl animate-bounce-gentle border-2 border-[#FFE066]" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFE066] rounded-full flex items-center justify-center border-2 border-[#E6C442]">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#4A2C2A]">4.9 Rating</p>
                    <p className="text-xs text-[#4A2C2A]/60">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start gap-8 mt-16 pt-8 border-t-2 border-[#4A2C2A]/20">
          <div className="text-center group cursor-pointer">
            <p className="text-3xl font-Fustat font-bold text-[#4A2C2A] group-hover:text-[#8B5E3C] transition-colors">12+</p>
            <p className="text-sm text-[#4A2C2A]/70">Cake Varieties</p>
          </div>
          <div className="text-center group cursor-pointer">
            <p className="text-3xl font-Fustat font-bold text-[#4A2C2A] group-hover:text-[#8B5E3C] transition-colors">500+</p>
            <p className="text-sm text-[#4A2C2A]/70">Happy Customers</p>
          </div>
          <div className="text-center group cursor-pointer">
            <p className="text-3xl font-Fustat font-bold text-[#4A2C2A] group-hover:text-[#8B5E3C] transition-colors">5★</p>
            <p className="text-sm text-[#4A2C2A]/70">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
