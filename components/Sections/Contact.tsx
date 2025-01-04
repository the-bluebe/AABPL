// /components/Contact.tsx

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = { name, email, message };
  
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
  
      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
  
      // Show success toast or alert
      toast.success('Your message has been sent! We will get back to you soon.');
    } catch (error) {
      console.error('Error sending message:', error);
  
      // Show error toast or alert
      toast.error('There was an error sending your message. Please try again later.');
    }
  };
  

  return (
    <>
      <section id="contact" className="py-20 bg-gray-100 rounded-md mb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800" data-aos="fade-up">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Section */}
            <div 
            className="w-full h-[400px] lg:h-full rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-right"
          >
            <div className="relative h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0437094411314!2d77.0524!3d28.6212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d0000000000%3A0x0!2sA-13%2C+Bhagwati+Garden%2C+Uttam+Nagar%2C+New+Delhi%2C+110059!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

            {/* Contact Form Section */}
            <div
              className="bg-white rounded-lg shadow-lg p-8"
              data-aos="fade-left"
            >
              <div className="mb-8 space-y-4">
                <div className="flex items-center space-x-4 text-gray-600">
                  <Phone className="w-5 h-5" style={{ color: '#ff9d51' }} />
                  <div>
                  <p>+91-7461005612</p>
                    <p>+91-9471930741</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <Mail className="w-5 h-5" style={{ color: '#ff9d51' }} />
                  <p>contact@aanmolbharat.com</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <div className="text-center">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#ff9d51] text-white hover:text-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};

export default Contact;
