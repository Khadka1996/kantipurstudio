'use client';

import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const ContactHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0066F9] to-[#004FC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-2 sm:px-4 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We&apos;re here to help capture your special moments. Reach out to us today!
          </p>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto">
            
            {/* Call Us */}
            <a
              href="tel:9841486403"
              className="flex flex-col items-center p-5 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition"
            >
              <div className="bg-[#F9D600] p-3 rounded-full mb-3">
                <FaPhone className="text-[#0066F9] text-2xl" />
              </div>
              <h3 className="font-semibold mb-1">Call Us</h3>
              <p className="text-sm sm:text-base">984-1486403</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9779841486403"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-5 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition"
            >
              <div className="bg-[#F9D600] p-3 rounded-full mb-3">
                <FaWhatsapp className="text-[#0066F9] text-2xl" />
              </div>
              <h3 className="font-semibold mb-1">WhatsApp</h3>
              <p className="text-sm sm:text-base">Message directly</p>
            </a>

            {/* Visit Us */}
            <div className="flex flex-col items-center p-5 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="bg-[#F9D600] p-3 rounded-full mb-3">
                <FaMapMarkerAlt className="text-[#0066F9] text-2xl" />
              </div>
              <h3 className="font-semibold mb-1">Visit Us</h3>
              <p className="text-sm sm:text-base">Shantinagar, New Baneshwor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
