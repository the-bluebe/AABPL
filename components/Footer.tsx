'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, Globe, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f1729] text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              Aabhi Anmol Bharat Pvt Ltd is a Delhi-based, rapidly growing company specializing in civil, mechanical, and electrical construction services. We strive to build a better future through innovation and collaboration.
            <Image src="/logo.png" alt="Aabhi Anmol Bharat Logo" width={328} height={328} className="w-64 mb-4 mt-3 lg:ml-5" />
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm hover:text-[#ff9d51] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 text-[#ff9d51]" />
                <div>
                  <p>+91-7461005612</p>
                  <p>+91-9471930741</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-10 h-10 mt-1 text-[#ff9d51]" />
                <p>A-13, First Floor, Bhagwati Garden, Uttam Nagar, New Delhi, 110059</p>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ff9d51]" />
                <a href="mailto:contact@aanmolbharat.com" className="hover:text-[#ff9d51] transition-colors duration-200">
                  contact@aanmolbharat.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-[#ff9d51]" />
                <a href="https://www.aanmolbharat.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff9d51] transition-colors duration-200">
                  www.aanmolbharat.com
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <p className="text-sm mb-4">Stay connected with us on social media for updates and insights.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#ff9d51] transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#ff9d51] transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#ff9d51] transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#ff9d51] transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Aabhi Anmol Bharat Pvt Ltd. All rights reserved.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <p className="text-sm">
                Designed by{' '}
                <Link 
                  href="https://linkedin.com/company/thebluebe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#ff9d51] hover:underline"
                >
                  thebluebe
                </Link>
              </p>
              <span className="mx-4">|</span>
              <div className="flex space-x-4">
                <Link href="#" className="text-sm hover:text-[#ff9d51] transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm hover:text-[#ff9d51] transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
