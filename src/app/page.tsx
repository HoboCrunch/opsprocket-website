'use client'

import { useState, useEffect } from 'react'
import { Hero } from '@/components/blocks/Hero'
import { PainPoints } from '@/components/blocks/PainPoints'
import { Services } from '@/components/blocks/Services'
import { Testimonials } from '@/components/blocks/Testimonials'
import { Contact } from '@/components/blocks/Contact'

export default function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#21F1A4] to-[#8F8FFA] z-50 transition-all duration-300" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* Hero Section */}
      <Hero />
      
      {/* Pain Points Section */}
      <PainPoints />
      
      {/* Smooth transition to Services */}
      <div className="h-16 sm:h-24 bg-gradient-to-b from-charcoal to-charcoal" />
      
      {/* Services Section */}
      <Services />
      
      {/* Visual Break */}
      <div className="h-16 sm:h-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]" />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Visual Break */}
      <div className="h-16 sm:h-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]" />
      
      {/* Contact Section */}
      <Contact />
    </>
  )
}
