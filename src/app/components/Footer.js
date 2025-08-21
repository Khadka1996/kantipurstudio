'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0066F9] to-[#004FC9] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#F9D600] to-[#E8C400] flex items-center justify-center">
                <span className="text-[#0066F9] font-bold text-lg">KPS</span>
              </div>
              <span className="ml-2 flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">
                  Kantipur
                </span>
                <span className="text-xs font-medium text-gray-200 uppercase tracking-wider">
                  Photo Studio
                </span>
              </span>
            </div>
            <p className="text-gray-200 mb-6 max-w-md">
              Capturing life&apos;s precious moments with creativity and professionalism. 
              From portraits to events, we turn moments into lasting memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F9D600] hover:text-[#0066F9] transition-all duration-300">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F9D600] hover:text-[#0066F9] transition-all duration-300">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F9D600] hover:text-[#0066F9] transition-all duration-300">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F9D600] hover:text-[#0066F9] transition-all duration-300">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F9D600]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-200 hover:text-[#F9D600] transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#F9D600] rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-[#F9D600] transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#F9D600] rounded-full mr-2"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-[#F9D600] transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#F9D600] rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-200 hover:text-[#F9D600] transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#F9D600] rounded-full mr-2"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-[#F9D600] transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#F9D600] rounded-full mr-2"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#F9D600]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 mr-3 text-[#F9D600]">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <span className="text-gray-200">
                  Shantinagar, New Baneshwor
                </span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-[#F9D600]">
                  <FaPhone className="h-5 w-5" />
                </div>
                <span className="text-gray-200">984-1486403</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-[#F9D600]">
                  <FaClock className="h-5 w-5" />
                </div>
                <span className="text-gray-200">Sun - Sat: 7AM - 8PM</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-[#F9D600]">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <span className="text-gray-200">studio.kantipur@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Kantipur Photo Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-200 hover:text-[#F9D600] text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-200 hover:text-[#F9D600] text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-200 hover:text-[#F9D600] text-sm transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;