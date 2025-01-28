'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Github, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/mother',
    icon: <Github className="h-6 w-6" />,
  },
  {
    name: 'Telegram',
    href: 'https://t.me/mother',
    icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.18-2.935 5.36-4.82c.23-.23-.054-.358-.354-.128l-6.62 4.15-2.86-.89c-.62-.194-.63-.62.13-.916l11.15-4.29c.51-.194.96.126.79.916z"/>
    </svg>,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mother',
    icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>,
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/mother',
    icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
    </svg>,
  },
  {
    name: 'Farcaster',
    href: 'https://warpcast.com/mother',
    icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.98.06c6.62 0 11.98 5.36 11.98 11.98 0 6.62-5.36 11.98-11.98 11.98C5.36 24.02 0 18.66 0 12.04 0 5.42 5.36.06 11.98.06zM8.95 15.72v-7.5h-.84l-2.05 1.95.46.79 1.39-1.22v5.98h1.04zm4.95-3.75c0-1.46-.69-2.42-2.34-2.42H9.4v7.5h2.27c1.54 0 2.24-.95 2.24-2.41v-2.67h-.01zm-1.04 2.54c0 .95-.38 1.45-1.28 1.45h-1.13v-5.37h1.13c.9 0 1.28.5 1.28 1.45v2.47zm4.2 1.21v-7.5h-.84l-2.05 1.95.46.79 1.39-1.22v5.98h1.04z"/>
    </svg>,
  },
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your newsletter signup logic here
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-bomiro">Newsletter</h3>
            <p className="text-gray-400 mb-4 font-concrete">
              Get updates on hackathons, agents, and more.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                required
              />
              <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-bomiro">Connect with us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}