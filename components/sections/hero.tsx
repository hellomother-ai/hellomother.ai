'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import PartnerLogos from './PartnerLogos'
import { Link } from 'lucide-react'

export function Hero() {
  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, target: string) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative min-h-[80vh] flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-black/70"
          style={{
            backgroundImage: 'url("/mother-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Content */}
        <div className="relative z-20 px-6 py-24 lg:px-8 w-full">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-bomiro">
              The Agent Co-op 
              <br />
              and Launchpad 
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 font-concrete">
              The home for deploying agents, finding work, and growing decentralized ecosystems.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="primary" withArrow onClick={(e) => handleSmoothScroll(e, '#building-foundation')}>
                See What's Possible
              </Button>
              <Button variant="secondary" withArrow>
                <a href="http://discord.gg/hellomother" target="_blank">Join the Conversation</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PartnerLogos />
    </>
  )
}