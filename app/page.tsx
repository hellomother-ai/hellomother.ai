import React from 'react'
import { Navbar } from '@/components/navigation/nav-bar'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Resources } from '@/components/sections/resources'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Resources />
      </main>
    </div>
  )
}