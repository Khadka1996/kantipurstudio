'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCamera, FaHeart, FaAward, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero content with different backgrounds
  const slides = [
    {
      title: "Capture Your Precious Moments",
      subtitle: "Professional photography services for all occasions",
      background: "bg-gradient-to-r from-[#0066F9] to-[#004FC9]",
      image: "/photo/",
      cta: "Book a Session"
    },
    {
      title: "Studio & On-Location Shoots",
      subtitle: "Beautiful portraits, weddings, events, and more",
      background: "bg-gradient-to-r from-[#004FC9] to-[#003AA5]",
      image: "/photo/placeholder/800/600",
      cta: "View Portfolio"
    },
    {
      title: "Memories That Last a Lifetime",
      subtitle: "High-quality prints and digital albums",
      background: "bg-gradient-to-r from-[#003AA5] to-[#00297A]",
      image: "/photo/placeholder/800/600",
      cta: "Our Services"
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${slide.background} ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-3 bg-[#F9D600] text-[#0066F9] font-semibold rounded-lg hover:bg-[#FFDF1A] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              {slides[currentSlide].cta}
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0066F9] transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <FaCamera className="text-3xl text-[#F9D600]" />
            </div>
            <div className="text-2xl md:text-3xl font-bold">5000+</div>
            <div className="text-sm md:text-base">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <FaHeart className="text-3xl text-[#F9D600]" />
            </div>
            <div className="text-2xl md:text-3xl font-bold">5K +</div>
            <div className="text-sm md:text-base">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <FaAward className="text-3xl text-[#F9D600]" />
            </div>
            <div className="text-2xl md:text-3xl font-bold">25+</div>
            <div className="text-sm md:text-base">Years of experience</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <FaUsers className="text-3xl text-[#F9D600]" />
            </div>
            <div className="text-2xl md:text-3xl font-bold">5+</div>
            <div className="text-sm md:text-base">Team Members</div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#F9D600] scale-125' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;