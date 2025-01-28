'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ClockIcon, ChevronDownIcon } from 'lucide-react'

export default function TokenLaunch() {
  const scrollToHowTo = () => {
    document.getElementById('how-to-participate')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-bomiro mb-4">
              Join the Co-evolution: The MotherDAO Token Launch
            </h1>
            <p className="text-xl mb-8">
              Be part of a transformative movement where humanity and AI thrive together, building a future of balance, purpose, and infinite potential.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Join Discord for Launch
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToHowTo}
              >
                How to Participate
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-12 font-concrete">
            {/* Countdown Timer */}
            <section className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 className="text-2xl font-bomiro mb-6">Time Until Launch</h2>
              <div className="grid grid-cols-4 gap-4">
                {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit) => (
                  <div key={unit} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">00</div>
                    <div className="text-sm">{unit}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Participate */}
            <section>
              <h2 className="text-2xl font-bomiro mb-6">Why Participate in the $MAMA Launch</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Early Access',
                    description: 'Be among the first to shape and benefit what will be the largest decentralized AI Agent economy in the EVM'
                  },
                  {
                    title: 'Governance Rights',
                    description: 'Direct influence over protocol development and ecosystem growth'
                  },
                  {
                    title: 'Network Effects',
                    description: 'Benefit from an expanding ecosystem of agents, protocols, and partners'
                  },
                  {
                    title: 'Future Utility',
                    description: 'Token utility across protocol, accelerator, and launchpad initiatives'
                  }
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Token Details */}
            <section>
              <h2 className="text-2xl font-bomiro mb-6">Token Economics & Distribution</h2>
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3>Token Name</h3>
                    <p className="text-lg font-medium">$MAMA</p>
                  </div>
                  <div>
                    <h3>Initial Price</h3>
                    <p className="text-lg font-medium">TBA USDC</p>
                  </div>
                  <div>
                    <h3>Total Supply</h3>
                    <p className="text-lg font-medium">TBA</p>
                  </div>
                  <div>
                    <h3>Initial Market Cap</h3>
                    <p className="text-lg font-medium">TBA</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Distribution */}
            <section>
              <h2 className="text-2xl font-bomiro mb-6">Token Distribution</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span>Public Sale</span>
                    <span>TBA%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Treasury</span>
                    <span>TBA%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Team & Advisors</span>
                    <span>TBA%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Development Fund</span>
                    <span>TBA%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Community Incentives</span>
                    <span>TBA%</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Timeline */}
            <section>
              <h2 className="text-2xl font-bomiro mb-6">Timeline</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <ul className="space-y-6">
                  {[
                    { date: 'Jan 27', event: 'Discord Opens' },
                    { date: 'Feb 3', event: 'Token Launch' },
                    { date: 'TBA', event: 'Trading Begins' }
                  ].map((item) => (
                    <li key={item.date} className="flex items-start gap-4">
                      <div className="font-medium">{item.date}</div>
                      <div>{item.event}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* How to Participate */}
            <section id="how-to-participate">
              <h2 className="text-2xl font-bomiro mb-6">How to Participate</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-medium mb-4">1. Join Discord</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Enter our Discord community</li>
                    <li>Get verified</li>
                    <li>Access launch information channel</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-medium mb-4">2. Prepare for Launch</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Set up supported wallet (Metamask or other EVM compatible)</li>
                    <li>Ensure sufficient USDC for participation</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-medium mb-4">3. Token Launch - Feb 3</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Time: TBA UTC</li>
                    <li>Sale mechanism: TBA</li>
                    <li>Maximum allocation: TBA</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bomiro mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Which wallets are supported?",
                    a: "Any EVM-compatible wallet including MetaMask, WalletConnect, etc."
                  },
                  {
                    q: "What currencies can I use to participate?",
                    a: "The sale will accept USDC on [specific network]."
                  },
                  {
                    q: "Is there a minimum or maximum participation amount?",
                    a: "TBA"
                  },
                  {
                    q: "How do I claim my tokens after purchase?",
                    a: "TBA"
                  }
                ].map((item) => (
                  <div key={item.q} className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="font-medium mb-2">{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="text-center py-12">
              <h2 className="text-3xl font-bomiro mb-8">Join the Future of Web3 AI Infrastructure</h2>
              <div className="flex gap-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Enter Discord
                </Button>
                <Button variant="outline">
                  View Technical Documentation
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}