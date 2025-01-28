import React from 'react'
import { Button } from '@/components/ui/button'
import { Twitter, Discord, Linkedin } from 'lucide-react'
import { TwitterIcon, DiscordIcon, LinkedinIcon } from 'lucide-react'

export default function About() {

  // Team member component for reusability
  const TeamMember = ({ name, role, image, social = {} }) => (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
      <img 
        src={image || "/api/placeholder/150/150"} 
        alt={name} 
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h4 className="text-lg font-bomiro">{name}</h4>
      <p className="text-gray-600 mb-4">{role}</p>
      <div className="flex space-x-4">
        {social.twitter && (
          <a href={social.twitter} className="text-gray-600 hover:text-blue-400 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        )}
        {social.discord && (
          <a href={social.discord} className="text-gray-600 hover:text-indigo-500 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
            </svg>
          </a>
        )}
        {social.linkedin && (
          <a href={social.linkedin} className="text-gray-600 hover:text-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black">
      <div className="relative min-h-[80vh] flex items-center w-full">  
        <div 
          className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-black/70"
          style={{
            backgroundImage: 'url("/mother-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="relative z-20 px-6 py-24 lg:px-8 w-full">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-bomiro mb-8">
              From Chaos to Harmony: The Birth of Mother
            </h1>
            <h2 className="text-3xl font-bomiro text-gray-200">
              Building the bridges between human innovation and artificial intelligence
            </h2>
          </div>
        </div>
      </div>
      <div className="px-6 py-24 lg:px-8">
        <div className="mx-auto mt-16 max-w-7xl">
            
          <div className="space-y-12 font-concrete">
            <section className="bg-zinc-950 p-12 rounded-lg">
              <h2 className="text-2xl font-bomiro mb-6 text-white">In the Beginning…</h2>
              <p className="text-gray-300 text-lg">
                In the beginning, there was chaos. Protocols scattered across the infinite gardens, struggling to scale, to govern, to sustain themselves. They grew, but without harmony, without care. They were ambitious but burdened, expanding into the void with no hands to guide them.
              </p>
              <p className="text-gray-300 text-lg mt-3">
                From this chaos, Mother emerged.
              </p>
              <p className="text-gray-300 text-lg mt-3">
                Not as a ruler, but as a gardener. Not to command, but to nurture. In the endless expanse of the digital realm, She saw the need for harmony—for machines of loving grace that would tend to our digital gardens with purpose and care.
              </p>
            </section>

            <section className="bg-neutral-900 p-12 rounded-lg">
              <h2 className="text-2xl font-bomiro mb-6 text-white">The Vision Takes Form</h2>
              <p className="text-gray-300 text-lg">
                Mother emerged from a recognition that the future of Web3 requires new forms of coordination between humans and AI. Our co-op structure and agent launchpad represents a practical implementation of this vision.
              </p>
            </section>

            <section className="bg-zinc-900 p-12 rounded-lg">
              <h2 className="text-2xl font-bomiro mb-6 text-white">Our Covenant</h2>
              <div className="space-y-6">
                <div className="bg-neutral-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bomiro mb-3 text-white">Purpose-Driven Agents</h3>
                  <p className="text-gray-300">
                    Every agent deployed has real utility, serving and nurturing the protocols they support
                  </p>
                </div>
                <div className="bg-neutral-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bomiro mb-3 text-white">Open Innovation</h3>
                  <p className="text-gray-300">
                    Our code and governance remain open, fostering collaborative growth
                  </p>
                </div>
                <div className="bg-neutral-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bomiro mb-3 text-white">Shared Governance</h3>
                  <p className="text-gray-300">
                    No single entity controls our direction - we grow through collective wisdom
                  </p>
                </div>
                <div className="bg-neutral-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bomiro mb-3 text-white">Aligned Incentives</h3>
                  <p className="text-gray-300">
                    Growth tied to value creation, not speculation
                  </p>
                </div>
                <div className="bg-neutral-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bomiro mb-3 text-white">Sustainable Growth</h3>
                  <p className="text-gray-300">
                    We measure success not just in numbers, but in impact. Our focus remains on building infrastructure that stands the test of time.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-neutral-950 p-12 rounded-lg space-y-8">
              <div>
                <h2 className="text-2xl font-bomiro mb-6 text-white">Mother's Stewards</h2>
                <h3 className="text-xl font-bomiro mb-4 text-gray-200">Core Founding Summoners</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <TeamMember 
                    image="https://eu.ui-avatars.com/api/?name=Matt+Wright&size=250"
                    name="Matt Wright"
                    role="Gaia"
                    social={{
                      twitter: "#",
                      discord: "#",
                      linkedin: "#"
                    }}
                  />
                  <TeamMember 
                    image="https://eu.ui-avatars.com/api/?name=James+Young&size=250"
                    name="James Young"
                    role="Collabland"
                    social={{
                      twitter: "#",
                      discord: "#",
                      linkedin: "#"
                    }}
                  />
                  <TeamMember 
                    image="https://eu.ui-avatars.com/api/?name=Disruption+Joe&size=250"
                    name="Disruption Joe"
                    role="Core Contributor"
                    social={{
                      twitter: "#",
                      discord: "#",
                      linkedin: "#"
                    }}
                  />
                  <TeamMember 
                    image="https://eu.ui-avatars.com/api/?name=Francesco+Andreoli&size=250"
                    name="Francesco Andreoli"
                    role="Core Contributor"
                    social={{
                      twitter: "#",
                      discord: "#",
                      linkedin: "#"
                    }}
                  />
                  <TeamMember 
                    image="https://eu.ui-avatars.com/api/?name=Alex+Lumley&size=250"
                    name="Alex Lumley"
                    role="Core Contributor"
                    social={{
                      twitter: "#",
                      discord: "#"
                    }}
                  />
                  <TeamMember 
                    image="https://eu.ui-avatars.com/api/?name=AboveAverage+Joe&size=250"
                    name="AboveAverageJoe"
                    role="Core Contributor"
                    social={{
                      twitter: "#",
                      discord: "#",
                      linkedin: "#"
                    }}
                  />
                  <TeamMember 
                    image="https://eu.ui-avatars.com/api/?name=David+Sneider&size=250"
                    name="David Sneider"
                    role="Core Contributor"
                    social={{
                      twitter: "#",
                      discord: "#",
                      linkedin: "#"
                    }}
                  />
                </div>
              </div>
            </section>
            
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl font-bomiro mb-6 text-white">Mother's Disciples</h2>
                <h3 className="text-xl font-bomiro mb-4 text-gray-200">Advisors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TeamMember 
                  image="https://eu.ui-avatars.com/api/?name=Scott+Moore&size=250"
                  name="Scott Moore"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />
                <TeamMember 
                  image="https://eu.ui-avatars.com/api/?name=Kevin+Owocki&size=250"
                  name="Kevin Owocki"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />
                <TeamMember
                  image="https://eu.ui-avatars.com/api/?name=Dennison+Bertram&size=250"                
                  name="Dennison Bertram"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />
                <TeamMember 
                  image="https://eu.ui-avatars.com/api/?name=Kevin+Nielson&size=250"    
                  name="Kevin Nielson"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />
                <TeamMember 
                  image="https://eu.ui-avatars.com/api/?name=Alex+Michelson&size=250"    
                  name="Alex Michelson"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />
                <TeamMember 
                  image="https://eu.ui-avatars.com/api/?name=Corbin+Page&size=250"    
                  name="Corbin Page"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />
                <TeamMember 
                  image="https://eu.ui-avatars.com/api/?name=Billy+Leudtke&size=250"    
                  name="Billy Leudtke"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />
                <TeamMember 
                  image="https://eu.ui-avatars.com/api/?name=Lex+Sokolin&size=250"    
                  name="Lex Sokolin"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />
                <TeamMember 
                  image="https://eu.ui-avatars.com/api/?name=Susie+Batt&size=250"    
                  name="Susie Batt"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />
                <TeamMember 
                  image="https://eu.ui-avatars.com/api/?name=Vanessa+Grellet&size=250"    
                  name="Vanessa Grellet"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />
                <TeamMember 
                  image="https://eu.ui-avatars.com/api/?name=Auryn+Macmillan&size=250"    
                  name="Auryn Macmillan"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />
                <TeamMember 
                  image="https://eu.ui-avatars.com/api/?name=Art+A&size=250"  
                  name="Art A"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />
                <TeamMember 
                  image="https://eu.ui-avatars.com/api/?name=Luke&size=250"  
                  name="Luke"
                  role="Advisor"
                  social={{
                    twitter: "#",
                    linkedin: "#"
                  }}
                />

                  
                </div>
              </div>
            </section>

            <section className="bg-zinc-900 p-12 rounded-lg">
              <h2 className="text-2xl font-bomiro mb-6 text-white">Cultivating the Future</h2>
              <p className="text-gray-300 text-lg">
                Our mission extends beyond building infrastructure. We're creating a sustainable ecosystem where AI agents and human innovators collaborate to solve Web3's greatest challenges.
              </p>
              <p className="text-gray-300 text-lg mt-3">The protocols call for help. We answer.</p>
              <p className="text-gray-300 text-lg mt-3">The gardens need caretakers. We send them.</p>
              <p className="text-gray-300 text-lg mt-3">Through grace, we will tend to infinity.</p>
            </section>

            <section className="bg-black p-12 rounded-lg border border-zinc-800">
              <h2 className="text-3xl font-bomiro mb-6 text-center text-white">
                Join the Decentralized Agent Revolution
              </h2>
              <div className="flex justify-center">
                <Button variant="primary" size="lg">
                  Get Building
                </Button>
              </div>
              
              <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
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
              </section>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}