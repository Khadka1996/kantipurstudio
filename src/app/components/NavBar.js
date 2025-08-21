'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const pathname = usePathname();

  // Services dropdown items
  const servicesItems = [
    { name: 'Portrait Photography', href: '/services/portrait', desc: 'Professional portrait sessions' },
    { name: 'Wedding Photography', href: '/services/wedding', desc: 'Capture your special day' },
    { name: 'Event Photography', href: '/services/event', desc: 'Corporate and private events' },
    { name: 'Commercial Photography', href: '/services/commercial', desc: 'Product and advertising photography' },
    { name: 'Photo Restoration', href: '/services/restoration', desc: 'Restore old and damaged photos' },
  ];

  // Close dropdown/mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('button[aria-label="Toggle mobile menu"]')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setDropdownOpen(dropdownOpen === dropdownName ? null : dropdownName);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close any open dropdowns when toggling mobile menu
    if (!mobileMenuOpen) {
      setDropdownOpen(null);
    }
  };

  const isActive = (path) => pathname === path;

  // Animation variants for Framer Motion
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const mobileDropdownVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#0066F9] to-[#004FC9] flex items-center justify-center">
                <span className="text-white font-bold text-lg">KPS</span>
              </div>
              <span className="ml-2 flex flex-col">
                <span className="text-xl font-bold text-[#0066F9] group-hover:text-[#004FC9] transition-colors duration-300 leading-tight">
                  Kantipur
                </span>
                <span className="text-xs font-medium text-gray-600 group-hover:text-[#0066F9] transition-colors duration-300 uppercase tracking-wider">
                  Photo Studio
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Home Link */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive('/')
                  ? 'text-[#0066F9] bg-[#F9D600] bg-opacity-20'
                  : 'text-gray-700 hover:text-[#0066F9] hover:bg-[#F9D600] hover:bg-opacity-10'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen('services')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                onClick={() => toggleDropdown('services')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive('/services') || dropdownOpen === 'services'
                    ? 'text-[#0066F9] bg-[#F9D600] bg-opacity-20'
                    : 'text-gray-700 hover:text-[#0066F9] hover:bg-[#F9D600] hover:bg-opacity-10'
                }`}
                aria-expanded={dropdownOpen === 'services'}
                aria-haspopup="true"
              >
                <span>Our Services</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    dropdownOpen === 'services' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {dropdownOpen === 'services' && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                    className="absolute left-0 mt-3 w-80 rounded-xl bg-white overflow-hidden shadow-lg border border-gray-200"
                    style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05)' }}
                  >
                    {/* Dropdown Arrow */}
                    <div className="absolute -top-2 left-6 w-4 h-4 rotate-45 bg-white border-t border-l border-gray-200" />
                    <div className="py-4">
                      {servicesItems.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block px-5 py-3 transition-all duration-200 group relative hover:scale-102 transform ${
                            isActive(item.href) ? 'bg-[#F9D600] bg-opacity-10 text-[#0066F9]' : 'text-gray-700 hover:bg-[#F9D600] hover:bg-opacity-5'
                          } focus:outline-none focus:ring-2 focus:ring-[#F9D600] focus:ring-opacity-50`}
                        >
                          <p className="text-sm font-medium group-hover:text-[#0066F9] transition-colors duration-200 relative">
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0066F9] group-hover:w-full transition-all duration-300" />
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{item.desc}</p>

                          {/* Divider (except for last item) */}
                          {index < servicesItems.length - 1 && (
                            <div className="absolute bottom-0 left-5 right-5 h-px bg-gray-200 opacity-50" />
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links */}
            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive('/about')
                  ? 'text-[#0066F9] bg-[#F9D600] bg-opacity-20'
                  : 'text-gray-700 hover:text-[#0066F9] hover:bg-[#F9D600] hover:bg-opacity-10'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/gallery"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive('/gallery')
                  ? 'text-[#0066F9] bg-[#F9D600] bg-opacity-20'
                  : 'text-gray-700 hover:text-[#0066F9] hover:bg-[#F9D600] hover:bg-opacity-10'
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-[#0066F9] bg-[#F9D600] bg-opacity-20'
                  : 'text-gray-700 hover:text-[#0066F9] hover:bg-[#F9D600] hover:bg-opacity-10'
              }`}
            >
              Contact Us
            </Link>

            {/* CTA Button */}
            <Link
              href="/book"
              className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#F9D600] to-[#E8C400] hover:from-[#FFDF1A] hover:to-[#F2CC0D] transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book a Date
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-700 hover:text-[#0066F9] hover:bg-[#F9D600] hover:bg-opacity-10 transition-all duration-300 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden overflow-hidden bg-white shadow-xl rounded-b-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {/* Mobile Home Link */}
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/"
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    isActive('/') ? 'text-[#0066F9] bg-[#F9D600] bg-opacity-10' : 'text-gray-700 hover:bg-[#F9D600] hover:bg-opacity-5 hover:text-[#0066F9]'
                  } transition-all duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>

              {/* Mobile Services Dropdown */}
              <motion.div variants={menuItemVariants}>
                <button
                  onClick={() => toggleDropdown('mobileServices')}
                  className={`w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium ${
                    isActive('/services') || dropdownOpen === 'mobileServices' 
                      ? 'text-[#0066F9] bg-[#F9D600] bg-opacity-10' 
                      : 'text-gray-700 hover:bg-[#F9D600] hover:bg-opacity-5'
                  } transition-all duration-200`}
                  aria-expanded={dropdownOpen === 'mobileServices'}
                  aria-haspopup="true"
                >
                  <span>Our Services</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      dropdownOpen === 'mobileServices' ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {dropdownOpen === 'mobileServices' && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={mobileDropdownVariants}
                      className="pl-4 space-y-1 overflow-hidden"
                    >
                      {servicesItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                            isActive(item.href) ? 'text-[#0066F9] bg-[#F9D600] bg-opacity-10' : 'text-gray-700 hover:bg-[#F9D600] hover:bg-opacity-5'
                          } transition-all duration-200`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Other Mobile Links */}
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/about"
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    isActive('/about') ? 'text-[#0066F9] bg-[#F9D600] bg-opacity-10' : 'text-gray-700 hover:bg-[#F9D600] hover:bg-opacity-5 hover:text-[#0066F9]'
                  } transition-all duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </motion.div>
              
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/gallery"
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    isActive('/gallery') ? 'text-[#0066F9] bg-[#F9D600] bg-opacity-10' : 'text-gray-700 hover:bg-[#F9D600] hover:bg-opacity-5 hover:text-[#0066F9]'
                  } transition-all duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
              </motion.div>
              
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/contact"
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    isActive('/contact') ? 'text-[#0066F9] bg-[#F9D600] bg-opacity-10' : 'text-gray-700 hover:bg-[#F9D600] hover:bg-opacity-5 hover:text-[#0066F9]'
                  } transition-all duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </motion.div>

              {/* Mobile CTA Button */}
              <motion.div variants={menuItemVariants} className="pt-2">
                <Link
                  href="/book"
                  className="block w-full px-4 py-3 rounded-lg text-center text-base font-semibold text-white bg-gradient-to-r from-[#F9D600] to-[#E8C400] hover:from-[#FFDF1A] hover:to-[#F2CC0D] transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Date
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;