'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let currentSection = ''
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute('id') || ''
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Handle smooth scroll navigation without URL change
  const handleNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed w-full bg-blue-900 text-primary-saffron z-50 px-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
            <motion.div
            onClick={handleLogoClick}
            className="text-2xl font-bold cursor-pointer flex items-center">
            <Image src="/logo.png" alt="Logo" width={72} height={48} className="mr-2" />
            
            Abhi Anmol Bharat
            </motion.div>
        </motion.div>

        <nav className="hidden md:flex space-x-4">
          {['Home', 'About', 'Services', 'Team', 'Contact'].map((item) => (
            <motion.a
              key={item}
              onClick={() => handleNavigation(item.toLowerCase())}
              className={`cursor-pointer hover:bg-blue-700 hover:text-yellow-200 transition-colors px-4 py-2 rounded ${activeSection === item.toLowerCase() ? 'bg-blue-700' : ''}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-blue-900 py-2"
        >
          {['Home', 'About', 'Services', 'Team', 'Contact'].map((item) => (
            <a
              key={item}
              onClick={() => {
                handleNavigation(item.toLowerCase())
                setIsOpen(false)
              }}
              className={`block cursor-pointer px-4 py-2 text-yellow-400 hover:bg-blue-700 ${activeSection === item.toLowerCase() ? 'bg-blue-700' : ''}`}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  )
}

export default Header;
