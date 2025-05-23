'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart',
      company: 'TechStart',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face&auto=format',
      quote: 'OpSprocket transformed our online presence completely. Our conversion rate increased by 340% in just 3 months.',
      rating: 5,
      result: '+340% Conversions'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, GrowthCo',
      company: 'GrowthCo',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format',
      quote: 'The sales funnel they built generated $2.3M in revenue in our first quarter. Absolutely incredible results.',
      rating: 5,
      result: '$2.3M Revenue'
    },
    {
      name: 'Emily Watson',
      role: 'CMO, FlowCorp',
      company: 'FlowCorp',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format',
      quote: 'Their operational tools streamlined our workflow and saved us 25 hours per week. Game-changing efficiency.',
      rating: 5,
      result: '25hrs/week Saved'
    },
    {
      name: 'David Kim',
      role: 'VP Marketing, InnovateLab',
      company: 'InnovateLab',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format',
      quote: 'OpSprocket&apos;s digital marketing strategy increased our qualified leads by 280%. Outstanding expertise.',
      rating: 5,
      result: '+280% Qualified Leads'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients', color: 'text-mint' },
    { number: '98%', label: 'Satisfaction Rate', color: 'text-purple' },
    { number: '250%', label: 'Average ROI', color: 'text-mint' },
    { number: '24/7', label: 'Support', color: 'text-purple' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="testimonials" className="bg-charcoal text-white py-20 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          subtitle="Client Success Stories"
          title="What Our Clients Say"
          description="Real results from real businesses. See how we've helped companies like yours achieve their goals."
        />

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="rounded-2xl bg-dark-800/50 border border-[#222] shadow-lg group relative overflow-hidden hover:border-purple/50 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="relative z-10 p-6">
                {/* Enhanced Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-purple" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Enhanced Results Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-mint/10 to-purple/10 border border-purple/20 rounded-full text-mint text-sm font-medium mb-6 group-hover:border-purple/40 transition-colors duration-300">
                  {testimonial.result}
                </div>

                {/* Enhanced Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-mint to-purple rounded-full flex items-center justify-center text-charcoal font-bold text-lg mr-4 shadow-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-purple transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Enhanced Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple/5 via-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              </CardContent>

              {/* Enhanced Animated border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-mint via-purple to-mint bg-[length:200%_100%] opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="glass-effect rounded-2xl p-8 border border-[#222] shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how we can help your business achieve similar results. 
              Schedule a free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                rightIcon={<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                className="bg-[#21F1A4] text-black font-semibold rounded-lg px-8 py-4 text-lg shadow-[inset_2px_2px_2px_0_rgba(255,255,255,0.3),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(143,143,250,0.4)] transition min-h-[48px] focus:ring-2 focus:ring-purple group"
              >
                Get Your Free Consultation
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 border-purple/50 text-purple font-semibold rounded-lg hover:bg-purple hover:text-charcoal hover:border-purple text-lg shadow-md hover:shadow-[0_0_20px_rgba(145,149,246,0.4)] transition min-h-[48px] focus:ring-2 focus:ring-purple group"
              >
                View More Case Studies
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-purple/20">
              <p className="text-gray-400 text-sm leading-relaxed">
                Join companies like TechStart, GrowthCo, FlowCorp, and InnovateLab who trust OpSprocket with their digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Testimonials } 