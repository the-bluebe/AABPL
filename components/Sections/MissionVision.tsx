'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MissionVision = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <section id="mission-vision" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-12" data-aos="fade-right">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-blue-800">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We seek to innovate, drive efficiency, and scale up construction services every day. Our commitment is centered on building lasting relationships through quality, comfort, and dedication to our clients. We aim to create an environment where innovation meets reliability, putting our customers&apos; needs at the forefront of everything we do.
              </p>
            </div>            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-blue-800">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be India&apos;s premier construction and service provider, shaping the nation and exploring new possibilities. We envision creating lasting impacts through our projects while maintaining the highest standards of quality and customer satisfaction.
              </p>
            </div>
          </div>

           {/* Right Section - Images */}
        <div className="lg:w-1/2 relative h-[500px] mt-8 lg:mt-0 hidden lg:block">
          {/* Main large image */}
          <div className="absolute right-0 top-0 w-full lg:w-[80%] h-[300px] lg:h-[500px] rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer">
            <Image
              src="/Aivison2.jpg"
              alt="Construction Professional"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlapping smaller image - shows on small screens too */}
          <div className="absolute left-0 bottom-4 lg:bottom-12 w-[70%] sm:w-[90%] lg:w-[60%] h-[150px] lg:h-[220px] rounded-lg overflow-hidden shadow-xl hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer">
            <Image
              src="/AiVison.jpg"
              alt="Team Working"
              fill
              className="object-cover"
            />
          </div>
        </div>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-20 rounded-lg overflow-hidden lg:hidden">
          <Image
            src="/AiVison.jpg"
            alt="About Us"
            width={300}
            height={188}
            className="w-full h-auto"
            style={{ objectFit: 'cover', borderRadius: '1rem' }}
          />
        </div>
      </div>
    </section>
  )
}

export default MissionVision
