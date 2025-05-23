'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { name: 'Solutions', href: '#services' },
    { name: 'Process', href: '#how-it-works' },
    { name: 'Results', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Scrollspy logic
      const sections = ['hero', 'services', 'how-it-works', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="OpSprocket Home">
            <Image
              src="/opsprocket-logo.svg"
              alt="OpSprocket Logo"
              width={32}
              height={32}
              className="transition-opacity duration-300 group-hover:opacity-80"
            />
            <div className="text-xl font-bold">
              <span className="text-mint group-hover:text-purple transition-colors duration-300">Op</span>
              <span className="text-white">Sprocket</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`nav-link text-gray-300 hover:text-purple font-medium transition-all duration-300 relative ${
                  activeSection === item.href.substring(1) ? 'text-purple' : ''
                }`}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#21F1A4] to-[#8F8FFA] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="border-purple/50 text-purple hover:bg-purple hover:text-charcoal hover:border-purple transition-all duration-300 hover:shadow-[0_0_20px_rgba(145,149,246,0.4)]"
              aria-label="Contact us to discuss your project"
            >
              Let&apos;s Talk
            </Button>
            <Button 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="bg-[#21F1A4] text-black font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(145,149,246,0.4)] focus:ring-2 focus:ring-purple shadow-[inset_2px_2px_2px_0_rgba(255,255,255,0.3),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]"
              aria-label="Get a quote for your project"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-purple transition-colors duration-300 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-gray-800/50">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.href.substring(1))
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left font-medium py-2 px-4 rounded-lg hover:bg-purple/10 transition-all duration-300 ${
                  activeSection === item.href.substring(1) 
                    ? 'text-purple bg-purple/10' 
                    : 'text-gray-300 hover:text-purple'
                }`}
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 space-y-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  scrollToSection('contact')
                  setIsMobileMenuOpen(false)
                }}
                className="w-full border-purple/50 text-purple hover:bg-purple hover:text-charcoal hover:shadow-[0_0_20px_rgba(145,149,246,0.4)]"
                aria-label="Contact us to discuss your project"
              >
                Let&apos;s Talk
              </Button>
              <Button 
                size="sm"
                onClick={() => {
                  scrollToSection('contact')
                  setIsMobileMenuOpen(false)
                }}
                className="w-full bg-[#21F1A4] text-black font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(145,149,246,0.4)] focus:ring-2 focus:ring-purple shadow-[inset_2px_2px_2px_0_rgba(255,255,255,0.3),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]"
                aria-label="Get a quote for your project"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header } 