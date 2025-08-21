'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service || 'Not specified'}

Message:
${formData.message}
    `.trim();
    
    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/9779841486403?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    
    // Show confirmation
    alert('Opening WhatsApp to send your message...');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0066F9] mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to discuss your photography needs.we&apos;re here to help capture your special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#0066F9] mb-6">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#F9D600] p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-[#0066F9] text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">Shantinagar, New Baneshwor<br />Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#F9D600] p-3 rounded-full mr-4">
                  <FaPhone className="text-[#0066F9] text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">984-1486403</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#F9D600] p-3 rounded-full mr-4">
                  <FaEnvelope className="text-[#0066F9] text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">studio.kantipur@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-[#F9D600] p-3 rounded-full mr-4">
                  <FaClock className="text-[#0066F9] text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Working Hours</h4>
                  <p className="text-gray-600">Sun-Sat: 7AM - 8PM</p>
                </div>
              </div>

            
            </div>

            {/* Google Map with specific location */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.383321106713!2d85.33726176977538!3d27.693999999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1968cee7500d%3A0x260f11a4a2e7c416!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kantipur Photo Studio Location"
                className="w-full"
              ></iframe>
              
              {/* Direct Google Maps Link */}
              <div className="bg-white p-4 text-center">
                <a
                  href="https://maps.app.goo.gl/WNdyoBKCgsK1SX267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0066F9] hover:text-[#004FC9] font-medium flex items-center justify-center"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-[#0066F9] mb-6">Send us a Message via WhatsApp</h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we&apos;ll open WhatsApp with your message ready to send.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066F9] focus:border-transparent transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066F9] focus:border-transparent transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066F9] focus:border-transparent transition-colors duration-300"
                    placeholder="+977 984-XXXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066F9] focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="Portrait Photography">Portrait Photography</option>
                    <option value="Wedding Photography">Wedding Photography</option>
                    <option value="Event Photography">Event Photography</option>
                    <option value="Commercial Photography">Commercial Photography</option>
                    <option value="Photo Restoration">Photo Restoration</option>
                    <option value="Photo Editing">Photo Editing</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066F9] focus:border-transparent transition-colors duration-300"
                  placeholder="Tell us about your photography needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-[#F9D600] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-[#0066F9] text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#0066F9] mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak directly with our team</p>
            <a href="tel:+9779841486403" className="text-[#0066F9] hover:text-[#004FC9] font-medium">
              +977 984-1486403
            </a>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-[#F9D600] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp className="text-[#0066F9] text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#0066F9] mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Message us anytime</p>
            <a 
              href="https://wa.me/9779841486403" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0066F9] hover:text-[#004FC9] font-medium"
            >
              Start Chat
            </a>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-[#F9D600] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-[#0066F9] text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-[#0066F9] mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Come see our studio</p>
            <a 
              href="https://maps.app.goo.gl/WNdyoBKCgsK1SX267" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0066F9] hover:text-[#004FC9] font-medium"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;