'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

const teamMembers = [
  {
    name: 'Ashok Kumar Singh',
    role: 'CEO',
    expertise: 'Corporate Governance',
    experience: '12 years',
    image: '/team-0.png',
    additionalInfo: "As the Chief Executive Officer, Ashok Kumar Singh spearheads AABPLs corporate governance initiatives. His role encompasses shaping the companys strategic direction in both construction and financial services sectors. Given AABPLs status as a Delhi-based growing company, his leadership is crucial in establishing strong corporate foundations and ensuring compliance with regulatory requirements. As CEO, he oversees the integration of civil, mechanical, and electrical operations while maintaining strategic partnerships with leading Indian banks. His experience in corporate governance suggests a strong background in organizational leadership, stakeholder management, and strategic decision-making. Being at the helm of a company with diverse service offerings, he is instrumental in balancing the construction aspects with financial services, ensuring both sectors align with the companys mission to innovate and drive efficiency.",
  },
  {
    name: 'Rudra Pratap Singh',
    role: 'COO',
    expertise: 'Strategy, Operations & Execution',
    experience: '5 years',
    image: '/team-2.png',
    additionalInfo: "As Chief Operating Officer, Rudra Pratap Singh is responsible for translating AABPLs strategic vision into operational excellence. His focus on strategy, operation, and execution places him at the core of the companys day-to-day activities. In a construction and service-oriented company, his role involves overseeing project management, resource allocation, and quality control across various building projects. He is instrumental in implementing innovative construction methodologies and ensuring operational efficiency. Given AABPLs philosophy of embracing innovation, Rudras position involves identifying and implementing new technologies and processes to enhance construction efficiency. His responsibilities extend to coordinating between different departments, managing project timelines, and ensuring delivery of services aligns with the companys high standards.",
  },
  {
    name: 'Ragni Kumari',
    role: 'MD',
    expertise: 'Finance Management',
    experience: '5 years',
    image: '/team-1.png',
    additionalInfo: "As Managing Director, Ragni Kumari plays a pivotal role in AABPLs financial strategy and growth. Her position involves managing the companys financial services division and maintaining crucial relationships with Indias leading banks. In a growing company that combines construction with financial services, her expertise is essential in managing capital allocation, financial planning, and risk assessment. She oversees the financial aspects of construction projects while simultaneously developing the companys financial services portfolio. As MD, her responsibilities include ensuring financial sustainability, managing partnerships with banking institutions, and developing innovative financial solutions for clients. Her role is crucial in maintaining the companys financial health while supporting its expansion in both construction and financial services sectors.",
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])

  return (
    <section id="team" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800" data-aos="fade-up">
          The Leaders Behind AABPL
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6   rounded-lg shadow-md w-4/5 mx-auto cursor-pointer `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => setSelectedMember(member)}
            >
              <div
                className="w-40 h-40 rounded-full mx-auto mb-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
              <p className="text-blue-800 font-medium text-center mb-2">{member.role}</p>
              <p className="text-center mb-2">{member.expertise}</p>
              <p className="text-center text-gray-600">{member.experience} of experience</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence mode="wait">
        <motion.div
          key={selectedMember.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto mb-12"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div
              className="w-48 h-48 rounded-full bg-cover bg-center shrink-0"
              style={{ backgroundImage: `url(${selectedMember.image})` }}
            />
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">{selectedMember.name}</h3>
              <p className="text-blue-800 font-medium mb-2">{selectedMember.role}</p>
              <p className="mb-2">{selectedMember.expertise}</p>
              <p className="text-gray-600 mb-4">{selectedMember.experience} of experience</p>
              <p className="text-gray-700">{selectedMember.additionalInfo}</p>
            </div>
          </div>
        </motion.div>
        </AnimatePresence>
        <div className="text-center mt-12" data-aos="fade-up">
          <a
            href="#contact"
            className="bg-[#ff9d51] text-white hover:text-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Connect with our team
          </a>
        </div>
      </div>
    </section>
  )
}

export default Team

