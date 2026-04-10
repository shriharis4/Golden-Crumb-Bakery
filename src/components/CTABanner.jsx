import WhatsAppButton from './WhatsAppButton';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const CTABanner = () => {
  return (
    <section className="bg-[#4A2C2A] py-20 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD84D' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#FFD84D]/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#FFE066]/10 rounded-full blur-3xl animate-float-delay-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div>
              <h2 className="text-4xl md:text-5xl font-Fustat font-bold text-[#FFD84D] mb-6">
                Ready to Order Your Dream Cake?
              </h2>
              <p className="text-[#FFE066]/80 text-lg mb-8 max-w-lg">
                Whether it's a birthday, wedding, or any special occasion, we're here to make it sweeter. 
                Order now and let us create something special for you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton 
                  message="Hi Cake De Lite, I want to order a custom cake" 
                  className="bg-[#FFD84D] text-[#4A2C2A] px-8 py-4 rounded-2xl text-lg hover:bg-[#FFE066] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 font-semibold border-2 border-[#FFD84D]"
                >
                  Order Your Custom Cake
                </WhatsAppButton>
                <Link 
                  to="/custom"
                  className="inline-flex items-center justify-center border-2 border-[#FFD84D] text-[#FFD84D] px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#FFD84D] hover:text-[#4A2C2A] transition-all duration-300 border-2"
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
                  <div className="bg-[#FFD84D]/10 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-[#FFD84D]/30 hover:border-[#FFD84D]/60 transition-all hover:-translate-y-1">
                    <div className="text-4xl mb-2">🎂</div>
                    <p className="text-[#FFD84D] font-semibold">Custom Designs</p>
                  </div>
                  <div className="bg-[#FFD84D]/10 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-[#FFD84D]/30 hover:border-[#FFD84D]/60 transition-all hover:-translate-y-1">
                    <div className="text-4xl mb-2">🚚</div>
                    <p className="text-[#FFD84D] font-semibold">Free Delivery</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-[#FFD84D]/10 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-[#FFD84D]/30 hover:border-[#FFD84D]/60 transition-all hover:-translate-y-1">
                    <div className="text-4xl mb-2">🎁</div>
                    <p className="text-[#FFD84D] font-semibold">Gift Wrapping</p>
                  </div>
                  <div className="bg-[#FFD84D]/10 backdrop-blur-sm rounded-2xl p-6 text-center border-2 border-[#FFD84D]/30 hover:border-[#FFD84D]/60 transition-all hover:-translate-y-1">
                    <div className="text-4xl mb-2">⭐</div>
                    <p className="text-[#FFD84D] font-semibold">Premium Quality</p>
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
