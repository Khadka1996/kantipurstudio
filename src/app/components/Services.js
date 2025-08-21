'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaCamera, FaHeart, FaUsers, FaBoxOpen, FaMagic, FaHistory } from 'react-icons/fa';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Portrait Photography",
      description: "Professional portrait sessions for individuals, couples, and families. We create stunning images that capture personality and emotion in our well-equipped studio or at a location of your choice.",
      icon: <FaUsers className="text-3xl text-[#F9D600]" />,
      features: ["Studio & outdoor options", "Multiple outfit changes", "Professional lighting", "Digital & print packages"],
      image: "/image/family.jpg",
    },
    {
      id: 2,
      title: "Wedding Photography",
      description: "Comprehensive wedding photography coverage to document your special day from preparation to reception. We specialize in both traditional and candid photography styles.",
      icon: <FaHeart className="text-3xl text-[#F9D600]" />,
      features: ["Full day coverage", "Pre-wedding shoot", "Album design", "Online gallery"],
      image: "/image/couple.jpg",
    },
    {
      id: 3,
      title: "Event Photography",
      description: "Professional event photography for corporate events, parties, ceremonies, and special occasions. We capture the essence and emotions of your events.",
      icon: <FaCamera className="text-3xl text-[#F9D600]" />,
      features: ["Candid coverage", "Group photos", "Quick turnaround", "Digital delivery"],
      image: "/image/event.jpg",
    },
    {
      id: 4,
      title: "Commercial Photography",
      description: "High-quality product and commercial photography for businesses, restaurants, and brands. We help you showcase your products in the best light.",
      icon: <FaBoxOpen className="text-3xl text-[#F9D600]" />,
      features: ["Product shots", "E-commerce ready", "Brand storytelling", "White background"],
      image: "/image/Ceremony.jpg",
    },
    {
      id: 5,
      title: "Photo Editing & Retouching",
      description: "Professional photo editing, retouching, and enhancement services. From basic color correction to advanced manipulation, we make your photos perfect.",
      icon: <FaMagic className="text-3xl text-[#F9D600]" />,
      features: ["Color correction", "Background removal", "Skin retouching", "Creative effects"],
      image: "/image/professional.jpg",
    },
    {
      id: 6,
      title: "Photo Restoration",
      description: "Expert restoration of old, damaged, or faded photographs. We bring your precious memories back to life with careful digital restoration techniques.",
      icon: <FaHistory className="text-3xl text-[#F9D600]" />,
      features: ["Damage repair", "Colorization", "Digital enhancement", "Print & digital copies"],
      image: "/image/restoration.jpg",
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0066F9] mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional photography services tailored to your needs. From portraits to events, we capture your special moments with creativity and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentElement.className = 'h-48 bg-gradient-to-r from-[#0066F9] to-[#004FC9] flex items-center justify-center';
                  }}
                />
                {/* Fallback icon - will show if image fails to load */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0">
                  <div className="text-white text-5xl">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0066F9] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {/* Features List */}
                <ul className="mb-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-[#F9D600] rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Book Now Button */}
                <Link
                  href="/contact"
                  className="w-full bg-[#0066F9] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#004FC9] transition-colors duration-300 text-center block"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Services;