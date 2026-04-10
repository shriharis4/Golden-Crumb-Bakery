import { useState, useEffect } from 'react';
import { createWhatsAppLink, FALLBACK_IMAGE } from '../utils/whatsapp';
import { galleryImages } from '../data';
import ScrollAnimation from '../components/ScrollAnimation';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  const handleOrder = (image) => {
    const message = `Hi Cake De Lite! I'm interested in ordering a cake similar to "${image.title}" from your gallery. Can you help me?`;
    window.open(createWhatsAppLink(message), '_blank');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-[#4A2C2A]/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-14 right-0 text-white hover:text-[#FFE066] text-3xl transition-colors z-10"
            >
              ✕
            </button>
            
            <div className="relative bg-white rounded-t-2xl overflow-hidden">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] object-contain"
                onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-[#FFE066]">
                <span className="text-sm font-semibold text-[#4A2C2A] capitalize">{selectedImage.category}</span>
              </div>
            </div>
            
            <div className="bg-white rounded-b-2xl p-8 text-center border-x-2 border-b-2 border-[#FFE066]">
              <h3 className="text-3xl font-Fustat font-bold text-[#4A2C2A] mb-3">{selectedImage.title}</h3>
              <p className="text-[#4A2C2A]/70 text-lg mb-6 max-w-2xl mx-auto">{selectedImage.description}</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleOrder(selectedImage)}
                  className="bg-[#8B5E3C] text-white px-8 py-3 rounded-full hover:bg-[#4A2C2A] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 font-semibold border-2 border-[#8B5E3C] hover:border-[#4A2C2A]"
                >
                  Order Similar Cake
                </button>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="border-2 border-[#4A2C2A] text-[#4A2C2A] px-8 py-3 rounded-full hover:bg-[#4A2C2A] hover:text-white transition-all duration-300 font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    <section className="bg-gradient-to-b from-[#FFF8DC] to-[#FFE066] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block bg-[#4A2C2A] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 border-2 border-[#FFE066]">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-Fustat font-bold text-[#4A2C2A] mb-4">
              Cake Gallery
            </h2>
            <p className="text-[#4A2C2A]/70 mt-4 max-w-xl mx-auto">
              Explore our stunning collection of handcrafted cakes for every celebration
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'birthday', 'wedding', 'custom'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-[#4A2C2A] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-[#4A2C2A]' 
                    : 'bg-white text-[#4A2C2A] border-2 border-[#4A2C2A]/30 hover:border-[#4A2C2A] hover:bg-[#FFE066]'
                }`}
              >
                {filter === 'all' ? 'All Cakes' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((image, index) => (
            <ScrollAnimation key={image.id} delay={index * 50}>
              <div 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border-2 border-[#FFE066] hover:border-[#E6C442] transition-all duration-500 cursor-pointer hover:-translate-y-2"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A]/70 via-[#4A2C2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl text-center mx-4 shadow-lg border-2 border-[#FFE066]">
                      <p className="text-[#4A2C2A] font-semibold text-sm">Click to view</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-[#8B5E3C] bg-[#FFE066]/50 px-3 py-1 rounded-full uppercase tracking-wide border border-[#E6C442]">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-Fustat font-semibold text-[#4A2C2A] mb-2 group-hover:text-[#8B5E3C] transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-[#4A2C2A]/60 text-sm line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#4A2C2A]/60 text-lg">No cakes found in this category</p>
            <button 
              onClick={() => setActiveFilter('all')}
              className="mt-4 text-[#8B5E3C] hover:text-[#4A2C2A] font-semibold border-b-2 border-[#8B5E3C] hover:border-[#4A2C2A]"
            >
              View All Cakes →
            </button>
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default Gallery;
