'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Globe, Zap, Settings, TrendingUp } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Websites',
      description: 'Modern, responsive websites that convert visitors into customers. We build fast, SEO-optimized sites that work perfectly on all devices.',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'Mobile-First'],
      iconColor: 'text-mint',
      hoverColor: 'hover:text-mint'
    },
    {
      icon: Zap,
      title: 'Sales Funnels',
      description: 'Automated sales systems that nurture leads and drive conversions. Turn prospects into paying customers with strategic funnel design.',
      features: ['Lead Capture', 'Email Automation', 'A/B Testing', 'Analytics'],
      iconColor: 'text-purple',
      hoverColor: 'hover:text-purple'
    },
    {
      icon: Settings,
      title: 'Operational Tools',
      description: 'Custom automation solutions that eliminate repetitive tasks and streamline your business processes for maximum efficiency.',
      features: ['Process Automation', 'Workflow Design', 'Integration Setup', 'Training'],
      iconColor: 'text-mint',
      hoverColor: 'hover:text-mint'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that increase visibility and drive growth. From social media to paid ads, we handle it all.',
      features: ['Social Media', 'PPC Campaigns', 'Content Strategy', 'Analytics'],
      iconColor: 'text-purple',
      hoverColor: 'hover:text-purple'
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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
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
    <section id="services" className="bg-charcoal text-white py-20 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            subtitle="Our Solutions"
            title="How We Help Your Business Grow"
            description="We provide comprehensive digital solutions that address your business challenges and drive real results."
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="rounded-2xl bg-dark-800/50 border border-[#222] shadow-lg group relative overflow-hidden hover:border-purple/50 transition-all duration-300 h-full">
                <CardHeader className="relative z-10 text-center">
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-mint/10 to-purple/10 border border-purple/20 group-hover:border-purple/40 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
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
                      <service.icon className={`w-8 h-8 ${service.iconColor} transition-all duration-300`} />
                    </motion.div>
                  </motion.div>
                  <CardTitle className={`text-xl font-bold text-white ${service.hoverColor} transition-colors duration-300`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 text-center">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={feature}
                        className="flex items-center justify-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 bg-gradient-to-r from-mint to-purple rounded-full mr-3 transition-transform duration-300"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple/5 via-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
                </CardContent>

                {/* Enhanced animated border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-mint via-purple to-mint bg-[length:200%_100%] opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto border border-[#222] shadow-lg">
            <p className="text-gray-300 text-lg mb-6">
              Ready to transform your business with technology?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#28F1B1] to-[#9195F6] text-black font-semibold rounded-lg px-8 py-3 shadow-md hover:shadow-[0_0_20px_#9195F699] transition min-h-[48px] focus:ring-2 focus:ring-[#9195F6]"
                whileHover={{ 
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Get a custom quote for your project"
              >
                Get Custom Quote
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('testimonials')}
                className="px-8 py-3 border-2 border-purple/50 text-purple font-semibold rounded-lg hover:bg-purple hover:text-charcoal hover:border-purple shadow-md hover:shadow-[0_0_20px_#9195F699] transition min-h-[48px] focus:ring-2 focus:ring-[#9195F6]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View our case studies and testimonials"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Services } 