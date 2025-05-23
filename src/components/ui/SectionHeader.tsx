'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  centered = true,
  className
}) => {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {subtitle && (
        <p className="text-mint font-medium text-sm uppercase tracking-wider mb-2 animate-fade-in">
          {subtitle}
        </p>
      )}
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">
        {title}
      </h2>
      
      {description && (
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          {description}
        </p>
      )}
    </div>
  )
}

export { SectionHeader } 