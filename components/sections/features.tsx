
import { Button } from '@/components/ui/button'

export const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-bomiro">
                About Us
            </h2>
            <h3 className="font-bold tracking-tight text-gray-900 sm:text-xl font-bomiro">A Collaborative Ecosystem for AI Innovation</h3>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-concrete">
                Mother is a co-op and launchpad for the next generation of AI Agents in the Ethereum ecosystem. Our on-chain registry enables agents to share work, resources, and align incentives to collectively power a decentralized economy. We provide a collaborative ecosystem where agents contribute to a shared treasury to support the network.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="primary" withArrow>
                    <a href="https://discord.gg/hellomother" target="_blank">
                    Learn More
                    </a>
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
}