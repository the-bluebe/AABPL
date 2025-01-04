'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
  "/bg-2.jpg",
  "/Aivison2.jpg",
  "/image-1.jpeg",
  "/AiVison.jpg"
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set interval to change images every 1s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 1000ms

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center">
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
          className="mb-2 mt-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          >
          <Image
            src="/logo.png"
            alt="Logo"
            width={350}
            height={350}
            className="mx-auto lg:mx-0"
          />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Innovate. Inspire. Influence.
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Join us in building the foundations of tomorrow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#about"
              className="bg-[#ff9d51] text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-300 hover:text-blue-700 transition-colors inline-block"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 mt-8 lg:mt-0 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Wrapping Images with motion for animations */}
          <motion.div
            className="relative w-full h-64 lg:h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              className="absolute inset-0 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex === 0 ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={images[0]}
                alt="Image 1"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="absolute inset-0 rounded-lg"
                width={1920}
                height={1080}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex === 1 ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={images[1]}
                alt="Image 2"
                width={1920}
                height={1080}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="absolute inset-0 rounded-lg"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex === 2 ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={images[2]}
                alt="Image 3"
                width={1920}
                height={1080}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="absolute inset-0 rounded-lg"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex === 3 ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={images[3]}
                alt="Image 4"
                width={1920}
                height={1080}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                className="absolute inset-0 rounded-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div> 
      </div>
    </section>
  )
}

export default Home
