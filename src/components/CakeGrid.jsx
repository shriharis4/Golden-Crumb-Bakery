import { Link } from 'react-router-dom';
import { cakes, FALLBACK_IMAGE } from '../data';
import WhatsAppButton from './WhatsAppButton';
import ScrollAnimation from './ScrollAnimation';

const CakeGrid = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFF8DC] to-[#FFE066] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block bg-[#FFE066] text-[#4A2C2A] px-4 py-1 rounded-full text-sm font-semibold mb-4 border-2 border-[#E6C442]">
              Featured
            </span>
            <h2 className="text-4xl font-Fustat font-bold text-[#4A2C2A] mb-4">
              Our Sweet Creations
            </h2>
            <p className="text-[#4A2C2A]/70 max-w-xl mx-auto">
              Handcrafted with love, each cake is a masterpiece designed to make your celebration unforgettable
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cakes.slice(0, 12).map((cake, index) => (
            <ScrollAnimation key={cake.id} delay={index * 50}>
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-[#FFE066] hover:border-[#E6C442] transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#4A2C2A] shadow-sm border border-[#FFE066]">
                    {cake.category}
                  </div>
                  
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <WhatsAppButton
                      message={`I want to order the ${cake.title} (${cake.price})`}
                      className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm shadow-lg"
                    >
                      Quick Order
                    </WhatsAppButton>
                  </div>
                </div>
                
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-Fustat font-semibold text-[#4A2C2A] mb-2 group-hover:text-[#8B5E3C] transition-colors">
                    {cake.title}
                  </h3>
                  <p className="text-sm text-[#4A2C2A]/70 mb-4 line-clamp-2">
                    {cake.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#8B5E3C]">{cake.price}</span>
                    <Link 
                      to="/cakes"
                      className="text-sm text-[#8B5E3C] font-semibold hover:text-[#4A2C2A] transition-colors border-b border-[#8B5E3C] hover:border-[#4A2C2A]"
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
            className="inline-flex items-center gap-2 bg-[#4A2C2A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#3a1f1d] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-[#4A2C2A]"
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
