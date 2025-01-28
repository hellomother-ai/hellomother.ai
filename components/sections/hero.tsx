'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import PartnerLogos from './PartnerLogos'

export function Hero() {
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
              Everything you need to drive meaningful growth. Experience a full suite of 
              tools that streamline your grants workflow.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="primary" withArrow>
                See What's Possible
              </Button>
              <Button variant="secondary" withArrow>
                Join the Conversation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PartnerLogos />
    </>
  )
}