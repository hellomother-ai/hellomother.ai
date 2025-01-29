'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navigationItems = [
  { name: 'Meet Mother', href: '/meet-mother' },
  { name: 'Protocol', href: '/protocol' },
  { name: 'Accelerator', href: '/coming-soon' },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-black">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-white font-bomiro">
            MOTHER
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 py-2"
              >
                {item.name}
              </Link>
            ))}

            {/* Manifesto Button */}
            <Link href="/coming-soon">
              <Button variant="primary" className="text-black hover:bg-gray-200">
                Get the Manifesto
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Manifesto Button for Mobile */}
              <div className="px-3 py-2">
                <Link href="/coming-soon">
                  <Button variant="primary" className="w-full text-black hover:bg-gray-200">
                    Get the Manifesto
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}