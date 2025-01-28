'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  withArrow?: boolean
  children: React.ReactNode
}

export function Button({ 
  className = '', 
  children, 
  variant = 'primary', 
  withArrow = false,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm
        transition-colors duration-200
        ${variant === 'primary' 
          ? 'bg-gray-900 text-white hover:bg-gray-300 hover:text-gray-900' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
        ${className}
      `}
      {...props}
    >
      <span>{children}</span>
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>
  )
}