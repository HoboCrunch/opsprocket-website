'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MessageCircle, Search, Wrench, Rocket } from 'lucide-react'

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Discovery Call',
      description: 'We start with a friendly conversation to understand your business, challenges, and goals. No tech jargon, just real talk about what you need.',
      details: ['15-minute consultation', 'Identify pain points', 'Understand your vision', 'No commitment required'],
      iconColor: 'text-mint',
      hoverColor: 'group-hover:text-mint'
    },
    {
      number: '02',
      icon: Search,
      title: 'Strategic Analysis',
      description: 'Our team analyzes your current setup and creates a custom roadmap. We identify opportunities for improvement and growth.',
      details: ['Current state assessment', 'Gap analysis', 'Custom strategy', 'Clear recommendations'],
      iconColor: 'text-purple',
      hoverColor: 'group-hover:text-purple'
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Implementation',
      description: 'We build and deploy your solutions with precision. You stay informed throughout the process with regular updates and previews.',
      details: ['Agile development', 'Regular check-ins', 'Quality assurance', 'User testing'],
      iconColor: 'text-mint',
      hoverColor: 'group-hover:text-mint'
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Your solution goes live with our full support. We provide training, documentation, and ongoing maintenance to ensure success.',
      details: ['Smooth deployment', 'Team training', 'Documentation', 'Ongoing support'],
      iconColor: 'text-purple',
      hoverColor: 'group-hover:text-purple'
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="how-it-works" className="bg-charcoal text-white py-20 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            subtitle="Our Process"
            title="How We Transform Your Business"
            description="A proven 4-step process that takes you from idea to implementation with complete transparency and support."
          />
        </motion.div>

        <div className="relative">
          {/* Enhanced Connection Line with Animation */}
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-mint via-purple to-mint transform -translate-y-1/2 rounded-full shadow-lg"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                className="relative group"
                variants={stepVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Enhanced Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="lg:hidden absolute left-1/2 top-32 w-1 h-16 bg-gradient-to-b from-mint to-purple transform -translate-x-1/2 rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />
                )}

                <div className="text-center rounded-2xl bg-dark-800/50 border border-[#222] shadow-lg p-6 group-hover:border-purple/50 transition-all duration-300 h-full">
                  {/* Enhanced Step Number with Animation */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 mx-auto mb-6">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-mint/20 to-purple/20 rounded-full group-hover:from-mint/30 group-hover:to-purple/30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.div 
                      className="relative z-10 w-16 h-16 bg-charcoal rounded-full flex items-center justify-center border-2 border-purple/50 group-hover:border-purple transition-colors duration-300 shadow-lg"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <step.icon className={`w-8 h-8 ${step.iconColor} transition-all duration-300`} />
                      </motion.div>
                    </motion.div>
                    <motion.div 
                      className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-mint to-purple rounded-full flex items-center justify-center text-charcoal font-bold text-sm shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-bold text-white mb-4 ${step.hoverColor} transition-colors duration-300`}>
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Enhanced Details */}
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div 
                        key={detailIndex}
                        className="flex items-center justify-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (detailIndex * 0.1) }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 bg-gradient-to-r from-mint to-purple rounded-full mr-3 transition-transform duration-300"
                          whileHover={{ scale: 1.5 }}
                        />
                        {detail}
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/5 via-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="glass-effect rounded-2xl p-8 border border-[#222] shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of businesses that have transformed their operations with our proven process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#28F1B1] to-[#9195F6] text-black font-semibold rounded-lg px-8 py-4 text-lg shadow-md hover:shadow-[0_0_20px_#9195F699] transition min-h-[48px] focus:ring-2 focus:ring-[#9195F6]"
                whileHover={{ 
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Schedule a discovery call"
              >
                Schedule Discovery Call
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('testimonials')}
                className="px-8 py-4 border-2 border-purple/50 text-purple font-semibold rounded-lg hover:bg-purple hover:text-charcoal hover:border-purple text-lg shadow-md hover:shadow-[0_0_20px_#9195F699] transition min-h-[48px] focus:ring-2 focus:ring-[#9195F6]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View our success stories"
              >
                View Success Stories
              </motion.button>
            </div>

            {/* Enhanced Trust Indicators */}
            <motion.div 
              className="mt-8 pt-8 border-t border-purple/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
                {[
                  { text: '500+ Projects Completed', color: 'mint', delay: 0 },
                  { text: '98% Client Satisfaction', color: 'purple', delay: 0.2 },
                  { text: '24/7 Support', color: 'mint', delay: 0.4 }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`flex items-center gap-2 hover:text-${item.color} transition-colors duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className={`w-2 h-2 bg-${item.color} rounded-full`}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: item.delay 
                      }}
                    />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { HowItWorks } 