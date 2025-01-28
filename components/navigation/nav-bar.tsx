'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown, Menu, X } from 'lucide-react'

const navigationItems = [
  {
    name: 'About',
    items: [
      { name: 'Meet Mother', href: '/meet-mother' },
      { name: 'DAO', href: '/dao' },
      { name: '$MAMA', href: '/mama-token' },
      { name: 'Blog (Mirror)', href: '/blog' },
      { name: 'Contact (form)', href: '/contact' },
    ],
  },
  {
    name: 'Developer',
    items: [
      { name: 'Agent Starter Kit', href: '/agent-starter-kit' },
      { name: 'Node setup', href: '/node-setup' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'Protocol', href: '/protocol' },
    ],
  },
  {
    name: 'Community',
    items: [
      { name: 'Talk to Agent', href: '/talk-to-agent' },
      { name: 'Intern', href: '/intern' },
      { name: 'Mother', href: '/mother' },
      { name: 'Community', href: '/community' },
      { name: 'Dev Rel', href: '/dev-rel' },
      { name: 'Bounty', href: '/bounty' },
    ],
  },
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
              <div
                key={item.name}
                className="relative group"
              >
                <button className="flex items-center space-x-1 text-white hover:text-gray-300 py-2">
                  <span>{item.name}</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>

                {/* Invisible element to bridge any gap */}
                <div className="absolute -bottom-2 left-0 right-0 h-2 bg-transparent" />

                {/* Dropdown */}
                <div className="hidden group-hover:block absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                        role="menuitem"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Manifesto Button */}
            <Button
              variant="primary"
              className="text-black hover:bg-gray-200"
            >
              Manifesto
            </Button>
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
              {navigationItems.map((section) => (
                <div key={section.name} className="space-y-1">
                  <button
                    onClick={() => {
                      const elem = document.getElementById(`mobile-${section.name}`)
                      if (elem) {
                        elem.classList.toggle('hidden')
                      }
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 text-white hover:bg-gray-700"
                  >
                    <span>{section.name}</span>
                    <ChevronDown className="h-4 w-4 transform transition-transform duration-200" />
                  </button>
                  
                  <div id={`mobile-${section.name}`} className="hidden pl-4 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Manifesto Button for Mobile */}
              <div className="px-3 py-2">
                <Button
                  variant="primary"
                  className="w-full text-black hover:bg-gray-200"
                >
                  Manifesto
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}