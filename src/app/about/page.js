'use client';

import { FaAward, FaUsers,FaHeart, FaCamera, FaSmile, FaTrophy, FaHistory } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0066F9] mb-4">About Kantipur Photo Studio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating over 25 years of capturing life&apos;s most precious moments with excellence and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hukum.jpg"
                alt="Hukum Sharma - Proprietor of Kantipur Photo Studio"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#F9D600] text-[#0066F9] p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <span className="block text-3xl font-bold">25+</span>
                <span className="block text-sm font-medium">Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0066F9] mb-6">
              Best Photography Studio in Town
            </h3>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Founded and operated by <strong>Hukum Sharma</strong>, Kantipur Photo Studio has been the trusted 
                name in photography for over 25 years. Our journey began with a simple passion for capturing 
                beautiful moments and has grown into a legacy of excellence that continues to this day.
              </p>
              
             
            </div>

            {/* Proprietor Info */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#0066F9] p-3 rounded-full mr-4">
                  <FaCamera className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Hukum Sharma</h4>
                  <p className="text-gray-600">Proprietor & Master Photographer</p>
                  <p className="text-sm text-gray-500 mt-2">
                    With over 25 years of experience, Hukum Sharma brings expertise, creativity, and 
                    personal touch to every photography session.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-[#F9D600] bg-opacity-10 rounded-lg">
                <FaUsers className="text-3xl text-[#0066F9] mx-auto mb-2" />
                <span className="block text-2xl font-bold text-[#0066F9]">10,000+</span>
                <span className="text-sm text-gray-600">Happy Clients</span>
              </div>
              <div className="text-center p-4 bg-[#F9D600] bg-opacity-10 rounded-lg">
                <FaCamera className="text-3xl text-[#0066F9] mx-auto mb-2" />
                <span className="block text-2xl font-bold text-[#0066F9]">50,000+</span>
                <span className="text-sm text-gray-600">Photos Captured</span>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h4 className="text-xl font-semibold text-[#0066F9] mb-4">Why Choose Us?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FaAward className="text-[#F9D600] mr-3" />
                  <span className="text-gray-700">Award-winning Quality</span>
                </div>
                <div className="flex items-center">
                  <FaHistory className="text-[#F9D600] mr-3" />
                  <span className="text-gray-700">25+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <FaUsers className="text-[#F9D600] mr-3" />
                  <span className="text-gray-700">Family-Owned Business</span>
                </div>
                <div className="flex items-center">
                  <FaSmile className="text-[#F9D600] mr-3" />
                  <span className="text-gray-700">Personalized Service</span>
                </div>
                <div className="flex items-center">
                  <FaTrophy className="text-[#F9D600] mr-3" />
                  <span className="text-gray-700">Best in Town</span>
                </div>
                <div className="flex items-center">
                  <FaCamera className="text-[#F9D600] mr-3" />
                  <span className="text-gray-700">Modern Equipment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0066F9] mb-4">Our Comprehensive Services</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From traditional photography to modern digital services, we offer everything you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-[#0066F9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Portrait Photography</h4>
              <p className="text-gray-600 text-sm">
                Individual, family, and couple portraits in studio or outdoor locations
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-[#0066F9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Wedding Photography</h4>
              <p className="text-gray-600 text-sm">
                Complete wedding coverage from pre-wedding to reception
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-[#0066F9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCamera className="text-white text-2xl" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Event Photography</h4>
              <p className="text-gray-600 text-sm">
                Corporate events, parties, ceremonies, and special occasions
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-[#0066F9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-white text-2xl" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Commercial Photography</h4>
              <p className="text-gray-600 text-sm">
                Product photography, branding, and business photography
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-[#0066F9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHistory className="text-white text-2xl" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Photo Restoration</h4>
              <p className="text-gray-600 text-sm">
                Expert restoration of old, damaged, or faded photographs
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="bg-[#0066F9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSmile className="text-white text-2xl" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Custom Packages</h4>
              <p className="text-gray-600 text-sm">
                Tailored photography solutions for your specific needs
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#0066F9] to-[#004FC9] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience the Kantipur Difference</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have trusted us with their precious memories for over 25 years
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#F9D600] text-[#0066F9] font-semibold rounded-lg hover:bg-[#FFDF1A] transition-colors duration-300"
              >
                Book Your Session
              </a>
              <a
                href="tel:+9779841486403"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0066F9] transition-colors duration-300"
              >
                Call Now: 984-1486403
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;