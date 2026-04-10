import { useState } from 'react';
import { cakes, cakeCategories, FALLBACK_IMAGE } from '../data';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollAnimation from '../components/ScrollAnimation';

const Cakes = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCakes = activeFilter === 'All'
    ? cakes
    : cakes.filter(cake => cake.category === activeFilter);

  return (
    <section className="bg-gradient-to-b from-[#FFE066] to-[#FFF8DC] min-h-screen py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block bg-[#4A2C2A] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 border-2 border-[#FFE066]">
              Our Creations
            </span>
            <h1 className="text-4xl md:text-5xl font-Fustat font-bold text-[#4A2C2A] mb-4">
              Browse Our Cakes
            </h1>
            <p className="text-[#4A2C2A]/70 max-w-xl mx-auto">
              From birthday celebrations to wedding masterpieces, find the perfect cake for your occasion
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {cakeCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-[#4A2C2A] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-[#4A2C2A]' 
                    : 'bg-white text-[#4A2C2A] border-2 border-[#4A2C2A]/30 hover:border-[#4A2C2A] hover:bg-[#FFE066]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCakes.map((cake, index) => (
            <ScrollAnimation key={cake.id} delay={index * 50}>
              <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border-2 border-[#FFE066] hover:border-[#E6C442] transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#4A2C2A] shadow-sm border border-[#FFE066]">
                    {cake.category}
                  </div>
                  
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <WhatsAppButton
                      message={`I want to order the ${cake.title}`}
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
                    <WhatsAppButton
                      message={`I want to order the ${cake.title} (${cake.price})`}
                      className="text-sm px-4 py-2"
                    >
                      Order
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cakes;
