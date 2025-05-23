'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'

// Import Lottie animation JSON files
import bossAnimation from '../../../assets/boss.json'
import busyAnimation from '../../../assets/busy.json'
import onlineMarketingAnimation from '../../../assets/online-marketing.json'
import presentationAnimation from '../../../assets/presentation.json'

const PainPoints: React.FC = () => {
  const painPoints = [
    {
      animation: bossAnimation,
      title: 'Too Many Hats',
      description: "You&apos;re the CEO, marketer, scheduler — and your day&apos;s already maxed out.",
      symptoms: [
        "Repetitive tasks eat your focus",
        "No time to grow or plan", 
        "You end each day feeling behind"
      ],
      color: 'mint'
    },
    {
      animation: onlineMarketingAnimation,
      title: 'Invisible Online',
      description: "You&apos;re great at what you do — but customers can&apos;t find you.",
      symptoms: [
        "Website traffic is a trickle",
        "Competitors rank higher on Google",
        "Social media feels like shouting into the void",
        "Lead generation is inconsistent"
      ],
      color: 'purple'
    },
    {
      animation: presentationAnimation,
      title: 'Broken Processes',
      description: 'Manual scheduling, follow-ups, reminders — all stealing your time and focus.',
      symptoms: [
        "Double-booked appointments happen too often",
        "Follow-up emails slip through the cracks",
        "Client data scattered across spreadsheets"
      ],
      color: 'mint'
    },
    {
      animation: busyAnimation,
      title: 'Outpaced by Competitors',
      description: "Others are winning with tech. You&apos;re not sure where to start — or who to trust.",
      symptoms: [
        "Competitors seem to move faster",
        "Tech solutions feel overwhelming",
        "Previous vendors over-promised, under-delivered"
      ],
      color: 'purple'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const iconMotion = {
    hover: { scale: 1.15, transition: { duration: 0.3 } }
  }

  const blobVariants = {
    animate: {
      x: [0, 15, -10, 0],
      y: [0, 20, -15, 0],
      rotate: [0, 3, -3, 0],
      scale: [1, 1.08, 0.92, 1],
      transition: {
        duration: 25,
        repeat: Infinity,
        repeatType: "reverse" as const,
      }
    }
  }

  return (
    <section id="pain-points" className="relative bg-gradient-to-br from-[#101010] to-[#0C0C0C] text-white overflow-hidden py-24 px-4">
      {/* Enhanced floating blob elements */}
      <motion.div 
        className="absolute top-[-60px] left-[-80px] w-[250px] h-[250px] bg-[#21F1A433] rounded-full blur-3xl opacity-20 pointer-events-none"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#28F1B1]/10 to-[#9195F6]/5 blur-[100px] opacity-40"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#9195F6]/10 to-[#28F1B1]/5 blur-[120px] opacity-30"
        variants={blobVariants}
        animate="animate"
        initial={{ x: 20, y: 20 }}
      />
      <motion.div 
        className="absolute bottom-[-60px] right-[-80px] w-[250px] h-[250px] bg-[#8F8FFA33] rounded-full blur-2xl opacity-20 pointer-events-none"
        variants={blobVariants}
        animate="animate"
        initial={{ x: -10, y: -10 }}
      />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What&apos;s Slowing You Down?
          </h2>
          <p className="mt-2 text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-16">
            If any of these feel familiar, you&apos;re not alone — and you&apos;re in the right place.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-2xl bg-[#111] border border-[#1F1F1F] p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-[#21F1A4] hover:bg-[#151515] focus:outline-none focus:ring-2 focus:ring-[#21F1A4] relative group"
            >
              {/* Subtle blob behind icon */}
              <div className="absolute -top-6 -left-6 w-[80px] h-[80px] bg-[#8F8FFA22] rounded-full blur-xl opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity duration-300" />
              
              <motion.div 
                variants={iconMotion}
                whileHover="hover"
                className="flex justify-center items-center mb-6 text-[#21F1A4] text-5xl"
              >
                <div className="w-[64px] h-[64px]">
                  <Lottie 
                    animationData={point.animation}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </motion.div>
              
              <h3 className="text-lg md:text-xl font-bold text-white text-center mt-2">
                {point.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mt-2">
                {point.description}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-400 list-disc list-inside leading-relaxed">
                {point.symptoms.map((symptom, symIndex) => (
                  <li key={symIndex}>{symptom}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-300 text-lg mb-8">
            Ready to break free from these challenges?
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-gradient-to-r from-[#28F1B1] to-[#9195F6] text-black font-semibold rounded-full px-8 py-4 shadow-md hover:shadow-[0_0_20px_#8F8FFA55] transition-transform hover:-translate-y-[2px] duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(145, 149, 246, 0.6)" // Kept existing Framer Motion shadow as it's more prominent
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact us to solve these challenges"
            >
              I&apos;m Ready to Fix This
            </motion.button>
            <motion.a
              href="#how-it-works"
              className="text-[#28F1B1] underline underline-offset-4 font-medium px-6 py-3 transition hover:text-[#9195F6] hover:-translate-y-[2px] duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn how we solve this
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { PainPoints } 