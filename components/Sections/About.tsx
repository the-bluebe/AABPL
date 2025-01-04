'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <section id="about" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800" data-aos="fade-up">
          About Abhi Anmol Bharat
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 overflow-hidden p-12" data-aos="fade-up">
            <Image
              src="/about.jpg"
              alt="AABPL About Image"
              width={800} // Increased width
              height={400} // Increased height
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Why Choose Us?</h3>
            <p className="text-lg mb-6 leading-relaxed">
              AABPL is a Delhi-based, rapidly growing company specializing in civil, mechanical, and electrical construction services. Registered as a Civil and Structural Contractor, we strive to build a better future for our nation through innovation, efficiency, and collaboration.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Our projects are designed to shape the future, exploring new possibilities and pioneering advancements in construction and services. We also offer financial services in partnership with India&apos;s leading banks, ensuring comprehensive solutions for all our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
