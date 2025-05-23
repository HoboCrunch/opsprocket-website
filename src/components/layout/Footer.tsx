'use client'

import React from 'react'
import Link from 'next/link'
import { Settings, Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    solutions: [
      { name: 'Websites', href: '/solutions#websites' },
      { name: 'Sales Funnels', href: '/solutions#funnels' },
      { name: 'Operational Tools', href: '/solutions#tools' },
      { name: 'Digital Marketing', href: '/solutions#marketing' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Process', href: '/#how-it-works' },
      { name: 'Case Studies', href: '/insights#case-studies' },
      { name: 'Careers', href: '/careers' },
    ],
    resources: [
      { name: 'Blog', href: '/insights' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support Center', href: '/support' },
      { name: 'API Reference', href: '/api' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/opsprocket' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/opsprocket' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/opsprocket' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/opsprocket' },
  ]

  return (
    <footer className="bg-gradient-to-b from-[#0E0E10] to-[#000] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Settings className="h-8 w-8 text-mint animate-gear-spin" />
                  <div className="absolute inset-0 bg-mint opacity-20 rounded-full blur-md" />
                </div>
                <span className="text-2xl font-bold">
                  <span className="text-mint">Op</span>
                  <span className="text-white">Sprocket</span>
                </span>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We transform businesses with cutting-edge technology solutions. 
                From websites to automation, we handle the tech so you can focus on growth.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3 text-mint" />
                  <span>hello@opsprocket.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3 text-mint" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-3 text-mint" />
                  <span>123 Innovation Drive, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-mint transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-mint transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-mint transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-mint transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Get the latest insights on business automation and digital transformation.
              </p>
            </div>
            
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 h-12 px-4 bg-[#0E0E10]/50 border border-gray-600 rounded-l-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint"
              />
              <button className="px-6 bg-gradient-to-r from-[#21F1A4] to-[#16a34a] text-black font-semibold rounded-r-lg hover:shadow-[0_10px_25px_rgba(33,241,164,0.3)] transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} OpSprocket. All rights reserved. Built with ❤️ for businesses that want to grow.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-mint transition-colors duration-200 p-2 hover:bg-mint/10 rounded-lg"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-500 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-mint rounded-full mr-2" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-mint rounded-full mr-2" />
              <span>GDPR Ready</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-mint rounded-full mr-2" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-mint rounded-full mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer } 