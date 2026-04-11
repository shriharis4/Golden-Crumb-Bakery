import { Link } from 'react-router-dom';
import { categories } from '../data';
import { fallbackImage } from '../utils/images';
import ScrollAnimation from './ScrollAnimation';

const Categories = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFE066] to-[#FFF8DC] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block bg-[#4A2C2A] text-white px-4 py-1 rounded-full text-sm font-medium mb-4 border-2 border-[#FFE066]">
              Our Services
            </span>
            <h2 className="text-4xl font-Fustat font-bold text-[#4A2C2A] mb-4">
              Browse by Category
            </h2>
            <p className="text-[#4A2C2A]/70 max-w-xl mx-auto">
              From birthdays to weddings, we have the perfect cake for every occasion
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <ScrollAnimation key={category.id} delay={index * 100}>
              <Link 
                to="/cakes"
                className="group block relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-[#FFE066] hover:border-[#E6C442] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-56 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = fallbackImage; }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/80 via-[#4A2C2A]/40 to-transparent" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                      <span className="text-[#4A2C2A] font-semibold">View Cakes</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 left-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border-2 border-[#FFE066]">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                </div>
                
                <div className="p-6 relative bg-white">
                  <h3 className="text-xl font-Fustat font-bold text-[#4A2C2A] mb-2 group-hover:text-[#8B5E3C] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[#4A2C2A]/70 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center text-[#8B5E3C] font-semibold text-sm group-hover:text-[#4A2C2A] transition-colors">
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
