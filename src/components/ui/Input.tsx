'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helper?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helper, leftIcon, rightIcon, ...props }, ref) => {
    const hasError = !!error
    const hasLeftIcon = !!leftIcon
    const hasRightIcon = !!rightIcon

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-white mb-2">
            {label}
          </label>
        )}
        
        <div className="relative">
          {hasLeftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <input
            type={type}
            className={cn(
              'flex h-12 w-full rounded-lg border bg-charcoal/50 px-3 py-2 text-sm text-white placeholder:text-gray-400 transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint',
              'disabled:cursor-not-allowed disabled:opacity-50',
              hasError && 'border-red-500 focus:ring-red-500 focus:border-red-500',
              !hasError && 'border-gray-600 hover:border-gray-500',
              hasLeftIcon && 'pl-10',
              hasRightIcon && 'pr-10',
              className
            )}
            ref={ref}
            {...props}
          />
          
          {hasRightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {(error || helper) && (
          <p className={cn(
            'mt-2 text-sm',
            error ? 'text-red-400' : 'text-gray-400'
          )}>
            {error || helper}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input } 