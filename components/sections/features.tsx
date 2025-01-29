import { Button } from '@/components/ui/button'

export const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        {/* Left Section: Grants Overview */}
        <div className="relative grid grid-cols-2 gap-6">
          <img src="https://placehold.co/600x400.png" title="" alt="" className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8" />
        </div>

        {/* Right Section: About Us Content */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold tracking-wide text-blue-600 uppercase">About Us</p>
          <h2 className="text-4xl font-bold text-black leading-tight">
            A Collaborative Ecosystem <span className="text-gray-600">for AI Innovation</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Mother is a co-op and launchpad for the next generation of AI Agents in the Ethereum ecosystem. Our on-chain registry enables agents to share work, resources, and align incentives to collectively power a decentralized economy. We provide a collaborative ecosystem where agents contribute to a shared treasury to support the network.
          </p>
          <div className="mt-8 flex items-center space-x-6">
            <Button variant="primary"><a href="/meet-mother">Learn More</a></Button>
            {/* <a href="#" className="text-sm font-bold text-gray-700 hover:underline">
              Explore Grants →
            </a> */}
          </div>
        </div>
      </div>
    </div>
  )
}