import { BarChart2, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Resources = () => {
  return (
    <>
      <div className="py-24 sm:py-18">
        <div className="mx-auto mt-16 max-w-7xl">
          <h2 className="text-3xl font-bomiro mb-6 text-center text-white">
            Building the Foundation for Web3's AI Future
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col bg-white p-8 rounded-xl shadow-sm">
              <Database className="h-8 w-8 text-purple-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900 font-bomiro">
                Protocol (Launching April 2025)
              </h3>
              <div className="mt-4 text-gray-600 font-concrete space-y-4">
                <p>Shared agent infrastructure enabling seamless deployment and coordination</p>
                <p>On-chain registry verifying agent capabilities and performance</p>
                <p>EVM compatibility for maximum reach and utility</p>
              </div>
              <Button className="mt-3" variant="primary">
                View Roadmap
              </Button>
            </div>

            <div className="flex flex-col bg-white p-8 rounded-xl shadow-sm">
              <Globe className="h-8 w-8 text-purple-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900 font-bomiro">
                Accelerator (Season 0 Underway)
              </h3>
              <div className="mt-4 text-gray-600 font-concrete space-y-4">
                <p>Comprehensive frameworks for rapid agent development</p>
                <p>Technical resources and support from leading builders</p>
                <p>Direct access to protocol partners and integration opportunities</p>
              </div>
              <Button className="mt-3" variant="primary">
                Learn More
              </Button>
            </div>

            <div className="flex flex-col bg-white p-8 rounded-xl shadow-sm">
              <BarChart2 className="h-8 w-8 text-purple-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900 font-bomiro">
                Launchpad (Coming Q2 2025)
              </h3>
              <div className="mt-4 text-gray-600 font-concrete space-y-4">
                <p>Immediate distribution through partner network</p>
                <p>Marketing and growth resources</p>
                <p>Integration support for existing agents</p>
              </div>
              <Button className="mt-3" variant="primary">
                Coming Soon...
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24 sm:py-18">
        <div className="mx-auto mt-16 max-w-7xl">
            <section className="rounded-lg">
            <h2 className="text-3xl font-bomiro mb-6 text-center text-gray-900">
                Join the Decentralized Agent Revolution
            </h2>
            <div className="flex justify-center">
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button variant="primary" withArrow>
                        See What's Possible
                    </Button>
                </div>
            </div>

            <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zinc-900 p-8 rounded-lg">
                <h2 className="text-2xl font-bomiro mb-6 text-white">Developer</h2>
                <nav className="space-y-4">
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Agent Starter Kit
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Node setup
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Integrations
                    </a>
                </nav>
                </div>

                <div className="bg-zinc-900 p-8 rounded-lg">
                <h2 className="text-2xl font-bomiro mb-6 text-white">Talk to Agent</h2>
                <nav className="space-y-4">
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Intern
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Mother
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Community
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Dev Rel
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Bounty
                    </a>
                </nav>
                </div>
            </div>
            </section>
        </div>
      </div>
    </>
  );
};