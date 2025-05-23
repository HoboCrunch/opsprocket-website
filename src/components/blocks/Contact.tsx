'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card, CardContent } from '@/components/ui/Card'
import { Mail, Phone, MapPin, Send, CheckCircle, HelpCircle } from 'lucide-react'
import { isValidEmail } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  businessType: string
  budgetRange: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  businessType?: string
  budgetRange?: string
  message?: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    businessType: '',
    budgetRange: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const businessTypes = [
    'E-commerce',
    'Professional Services',
    'Technology',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Real Estate',
    'Other'
  ]

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Let&apos;s discuss'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Please select your business type'
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = 'Please select your budget range'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        businessType: '',
        budgetRange: '',
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleQuizClick = () => {
    // Placeholder for quiz functionality
    alert('Quiz feature coming soon! For now, please fill out the form below.')
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-charcoal text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="glass-effect rounded-2xl p-12 border border-[#222] shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-20 h-20 text-mint mx-auto mb-6" />
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We&apos;ve received your message and will get back to you within 24 hours. 
              Get ready to transform your business!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="border-purple/50 text-purple hover:bg-purple hover:text-charcoal hover:border-purple rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(145,149,246,0.4)] transition min-h-[48px] focus:ring-2 focus:ring-purple"
                variant="outline"
                aria-label="Send another message"
              >
                Send Another Message
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-charcoal text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            subtitle="Get Started"
            title="Let&apos;s Build Something Amazing Together"
            description="Ready to transform your business? Tell us about your project and we&apos;ll create a custom solution that drives results."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email Us', info: 'hello@opsprocket.com', detail: 'We respond within 24 hours', color: 'mint' },
                { icon: Phone, title: 'Call Us', info: '(555) 123-4567', detail: 'Mon-Fri 9AM-6PM EST', color: 'purple' },
                { icon: MapPin, title: 'Visit Us', info: '123 Innovation Drive', detail: 'Tech City, TC 12345', color: 'mint' }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="rounded-2xl bg-dark-800/50 border border-[#222] shadow-lg hover:border-purple/50 transition-all duration-300">
                    <CardContent className="text-center p-6">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br ${contact.color === 'mint' ? 'from-mint/10 to-purple/10 border-mint/20' : 'from-purple/10 to-mint/10 border-purple/20'} rounded-full flex items-center justify-center mx-auto mb-4 border`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <contact.icon className={`w-8 h-8 text-${contact.color} transition-all duration-300`} />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                      <p className="text-gray-300 font-medium">{contact.info}</p>
                      <p className="text-gray-400 text-sm mt-2">{contact.detail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass-effect border border-[#222] shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      error={errors.name}
                      className="form-input"
                    />
                    
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                      className="form-input"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => handleInputChange('businessType', e.target.value)}
                        className="form-input w-full h-12 bg-charcoal border border-gray-600 rounded-lg text-white focus:border-mint focus:ring-2 focus:ring-mint/20 transition-all duration-300"
                      >
                        <option value="">Select your industry</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.businessType && (
                        <p className="mt-2 text-sm text-red-400">{errors.businessType}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                        className="form-input w-full h-12 bg-charcoal border border-gray-600 rounded-lg text-white focus:border-mint focus:ring-2 focus:ring-mint/20 transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                      {errors.budgetRange && (
                        <p className="mt-2 text-sm text-red-400">{errors.budgetRange}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Describe your project, goals, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="form-input w-full bg-charcoal border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-mint focus:ring-2 focus:ring-mint/20 transition-all duration-300 resize-none"
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        loading={isSubmitting}
                        rightIcon={<Send className="w-5 h-5" />}
                        className="w-full bg-gradient-to-r from-[#21F1A4] to-[#8F8FFA] text-charcoal font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-[0_0_20px_rgba(145,149,246,0.4)] transition min-h-[48px] focus:ring-2 focus:ring-purple"
                        aria-label="Send your message"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>

                    {/* Secondary CTA */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        onClick={handleQuizClick}
                        leftIcon={<HelpCircle className="w-5 h-5" />}
                        className="w-full border-purple/50 text-purple hover:bg-purple hover:text-charcoal hover:border-purple rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(145,149,246,0.4)] transition min-h-[48px] focus:ring-2 focus:ring-purple"
                        aria-label="Take our 1-minute quiz"
                      >
                        Not sure where to start? Take our 1-minute quiz.
                      </Button>
                    </motion.div>
                  </div>

                  <p className="text-center text-gray-400 text-sm leading-relaxed">
                    By submitting this form, you agree to our privacy policy. 
                    We&apos;ll never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced Trust Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-effect rounded-2xl p-8 border border-[#222] shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose OpSprocket?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { value: '24hr', label: 'Response Time', color: 'mint' },
                { value: '500+', label: 'Projects Delivered', color: 'purple' },
                { value: '98%', label: 'Client Satisfaction', color: 'mint' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`text-3xl font-bold text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { Contact } 