import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Protocol() {
  return (
    <div className="min-h-screen">
      <div className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-bomiro mb-8">
            Protocol Overview
          </h1>
          
          <div className="space-y-12 font-concrete">
            <section>
              <h2 className="text-2xl font-bomiro mb-6">How It Works</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600">
                  Our protocol leverages blockchain technology to create a transparent 
                  and efficient grants management system. Through smart contracts and 
                  decentralized governance, we ensure fair distribution and accountability.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bomiro mb-6">Key Components</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bomiro mb-3">Smart Contracts</h3>
                  <p className="text-gray-600">
                    Automated grant distribution and milestone tracking through 
                    secure smart contracts.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bomiro mb-3">Governance</h3>
                  <p className="text-gray-600">
                    Community-driven decision making for grant approvals and 
                    protocol upgrades.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bomiro mb-3">Treasury</h3>
                  <p className="text-gray-600">
                    Secure management of funds with multi-sig controls and 
                    transparent accounting.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bomiro mb-3">Analytics</h3>
                  <p className="text-gray-600">
                    Real-time tracking and reporting of grant performance and 
                    impact metrics.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}