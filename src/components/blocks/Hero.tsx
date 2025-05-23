'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Play, X, Settings, Zap } from 'lucide-react'

const adjectives = ['faster', 'cheaper', 'smarter']

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [currentAdjectiveIndex, setCurrentAdjectiveIndex] = useState(0)
  
  const [displayedAdjective, setDisplayedAdjective] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const typingSpeed = 100
  const deletingSpeed = 70
  const pauseDuration = 1800

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    const baseWord = adjectives[currentAdjectiveIndex]
    const currentWord = baseWord === 'faster' ? 'faster...' : baseWord + '.'

    if (isDeleting) {
      if (displayedAdjective.length > 0) {
        timer = setTimeout(() => {
          setDisplayedAdjective(current => current.slice(0, -1))
        }, deletingSpeed)
      } else {
        // Finished deleting
        setIsDeleting(false)
        setCurrentAdjectiveIndex((prevIndex) => (prevIndex + 1) % adjectives.length)
      }
    } else {
      // Typing
      if (displayedAdjective.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayedAdjective(current => current + currentWord[current.length])
        }, typingSpeed)
      } else {
        // Finished typing, pause then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, pauseDuration)
      }
    }

    return () => clearTimeout(timer)
  }, [displayedAdjective, isDeleting, currentAdjectiveIndex, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <section id="hero" className="hero-gradient text-white relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Effects - Simplified */}
      <div className="absolute inset-0">
        {/* Minimal blob effects matching reference style */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-mint/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-80 h-80 bg-lavender/10 rounded-full blur-3xl"></div>
        
        {/* Subtle animated grid - reduced opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(40,241,177,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(40,241,177,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse opacity-30" />
        
        {/* Floating Gear SVG behind title - reduced opacity */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Settings className="w-96 h-96 text-mint/20" />
        </motion.div>
        
        {/* Smooth section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-charcoal"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Updated Subtitle Pill - More Transparent */}
          <motion.p 
            className="inline-flex items-center bg-purple/10 text-white font-medium text-sm px-4 py-2 rounded-full border-2 border-purple mb-8 shadow-md hover:bg-purple/20 hover:border-purple transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Zap className="w-4 h-4 mr-2 text-purple" />
            Supercharge Your Business
          </motion.p>

          {/* Main Headline - Static text with carousel */}
          <motion.h1 
            className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-center text-white mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Line 1: OpSprocket: Tech that gets the */}
            <motion.span 
              className="block mb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-white">OpSprocket: </span>
              <span className="text-[#21F1A4]">Tech that gets the</span>
            </motion.span>

            {/* Line 2: job done [carousel-word] */}
            <motion.span 
              className="block text-[#21F1A4]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span style={{ paddingLeft: '0.75ch' }}>job done</span>&nbsp;
              {/* Span for typed adjective - white */}
              <span
                className="inline-block text-white text-left align-bottom"
                style={{ minWidth: '8ch' }} 
              >
                {displayedAdjective} 
              </span>
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            We transform your business operations with cutting-edge technology solutions. 
            From websites to automation, we handle the tech so you can focus on what you do best.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="xl" 
                className="bg-[#21F1A4] text-black font-semibold rounded-lg text-xl px-12 py-6 group shadow-[inset_2px_2px_2px_0_rgba(255,255,255,0.3),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(143,143,250,0.4)] transition min-h-[48px] focus:ring-2 focus:ring-purple"
                rightIcon={<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
                onClick={() => scrollToSection('contact')}
                aria-label="Get started with OpSprocket today"
              >
                Get Started Today
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="xl" 
                className="text-xl px-12 py-6 group border-purple/50 text-purple hover:bg-purple hover:text-charcoal hover:border-purple rounded-lg shadow-md hover:shadow-[0_0_20px_#9195F699] transition min-h-[48px] focus:ring-2 focus:ring-[#9195F6]"
                leftIcon={<Play className="w-6 h-6 group-hover:scale-110 transition-transform" />}
                onClick={() => setShowModal(true)}
                aria-label="Watch how OpSprocket works"
              >
                See How It Works
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 border-2 border-purple rounded-full flex justify-center shadow-purple">
              <motion.div 
                className="w-1 h-3 bg-gradient-to-b from-mint to-purple rounded-full mt-2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Demo Modal */}
      {showModal && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div 
            className="relative max-w-4xl w-full mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-purple transition-colors duration-300 p-2"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="glass-effect rounded-2xl p-8 max-w-2xl w-full mx-4 border border-purple/30 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">OpSprocket Demo</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-purple transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-dark-800 to-charcoal rounded-lg flex items-center justify-center mb-6 border border-purple/20">
                <div className="text-center">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-mint/20 to-purple/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-8 h-8 text-mint" />
                  </motion.div>
                  <p className="text-white text-xl mb-2">Interactive Demo</p>
                  <p className="text-gray-400">See how OpSprocket transforms businesses</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { title: 'Website Development', desc: 'Modern, responsive designs', color: 'mint' },
                  { title: 'Sales Funnels', desc: 'High-converting workflows', color: 'purple' },
                  { title: 'Automation Tools', desc: 'Streamlined operations', color: 'mint' },
                  { title: 'Digital Marketing', desc: 'Targeted campaigns', color: 'purple' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`bg-dark-800/50 rounded-lg p-4 border transition-colors duration-300 ${
                      item.color === 'mint' 
                        ? 'border-mint/20 hover:border-mint/40' 
                        : 'border-purple/20 hover:border-purple/40'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`font-semibold ${item.color === 'mint' ? 'text-mint' : 'text-purple'}`}>
                      {item.title}
                    </div>
                    <div className="text-gray-400">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 flex gap-4">
                <Button 
                  onClick={() => {
                    setShowModal(false)
                    scrollToSection('contact')
                  }}
                  className="flex-1 bg-[#21F1A4] text-black font-semibold rounded-lg shadow-[inset_2px_2px_2px_0_rgba(255,255,255,0.3),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(143,143,250,0.4)] transition min-h-[48px] focus:ring-2 focus:ring-purple"
                  aria-label="Schedule a consultation"
                >
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowModal(false)}
                  className="flex-1 border-purple/50 text-purple hover:bg-purple hover:text-charcoal rounded-lg shadow-md hover:shadow-[0_0_20px_#9195F699] transition min-h-[48px] focus:ring-2 focus:ring-[#9195F6]"
                  aria-label="Close modal"
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export { Hero } 