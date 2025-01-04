'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

const services = [
  {
    title: 'Civil Construction',
    description: 'Building projects that stand as a testament to modern engineering.',
    icon: '🏗️',
    image: '/civil-construction.jpg',
  },
  {
    title: 'Mechanical Services',
    description: 'Advanced solutions ensuring durability and precision.',
    icon: '⚙️',
    image: '/mechanical-services.jpg',
  },
  {
    title: 'Electrical Projects',
    description: 'Harnessing technology to power the future.',
    icon: '⚡',
    image: '/electrical-projects.jpg',
  },
  {
    title: 'Financial Services',
    description: 'Simplified financial solutions through our partnerships with leading banks.',
    icon: '💰',
    image: '/financial-services.jpg',
  },
]

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <section id="services" className="py-20 bg-gray-100 rounded-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800" data-aos="fade-up">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12" data-aos="fade-up">
          <a
            href="#contact"
            className="bg-[#ff9d51] text-white hover:text-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Explore our services
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
