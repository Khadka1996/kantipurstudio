'use client';

import { useState } from 'react';
import { FaSearch, FaTimes, FaExpand } from 'react-icons/fa';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'portrait', name: 'Portrait' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'event', name: 'Event' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'restoration', name: 'Restoration' }
  ];

  const galleryImages = [
    { id: 1, src: '/image/professional.jpg', category: 'portrait', title: 'Professional Portrait' },
    { id: 2, src: '/image/weeding.jpg', category: 'wedding', title: 'Traditional Wedding' },
    { id: 3, src: '/image/event.jpg', category: 'weeding', title: 'Romantic Wedding Ceremony' },
    { id: 4, src: '/image/product.jpg', category: 'commercial', title: 'Product Photography' },
    { id: 5, src: '/image/family.jpg', category: 'portrait', title: 'Family Portrait' },
    { id: 6, src: '/image/weeding1.jpg', category: 'wedding', title: 'Candid Wedding' },
    { id: 7, src: '/image/restoration.jpg', category: 'restoration', title: 'Photo Restoration' },
    { id: 8, src: '/image/Ceremony.jpg', category: 'event', title: 'Rice Feeding Ceremony' },
    { id: 9, src: '/image/product.jpg', category: 'commercial', title: 'Food Photography' },
    { id: 10, src: '/image/couple.jpg', category: 'portrait', title: 'Couple Portrait' },
    { id: 11, src: '/image/bridal.jpg', category: 'wedding', title: 'Bridal Portrait' },
    { id: 12, src: '/image/baby.jpg', category: 'baby', title: 'Baby Potrait' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0066F9] mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning photographs that showcase our expertise and creativity in various photography styles.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium traimage/product.jpg ${
                activeFilter === filter.id
                  ? 'bg-[#0066F9] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-[#F9D600] hover:text-[#0066F9]'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl traimage/product.jpg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transitionimage/product.jpg group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transitimage/product.jpg flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm opacity-90 capitalize">{image.category}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-[#F9D600] text-[#0066F9] p-2 rounded-full opacity-0 group-hover:opacity-100 transitimage/product.jpg">
                <FaExpand className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="capitalize">{selectedImage.category}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-[#F9D600] text-[#0066F9] p-3 rounded-full hover:bg-[#FFDF1A] transiimage/product.jpg"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;