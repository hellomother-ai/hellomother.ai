import React from 'react';
import Image from 'next/image';

const PartnerLogos = () => {
  const logos = [
    { src: '/images/partners/arweave.png', alt: 'Arweave Logo', title: 'Arweave' },
    { src: '/images/partners/base.png', alt: 'Base Logo', title: 'Base' },
    { src: '/images/partners/coinbase.png', alt: 'Coinbase Logo', title: 'Coinbase' },
    { src: '/images/partners/collab-land.png', alt: 'Collab.Land Logo', title: 'Collab.Land' },
    { src: '/images/partners/ens.png', alt: 'Ethereum Name Service (ENS) Logo', title: 'ENS' },
    { src: '/images/partners/eigen-layer.png', alt: 'EigenLayer Logo', title: 'EigenLayer' },
    { src: '/images/partners/lit-protocol.png', alt: 'Lit Protocol Logo', title: 'Lit Protocol' },
    { src: '/images/partners/metamask.png', alt: 'MetaMask Logo', title: 'MetaMask' },
    { src: '/images/partners/safe.png', alt: 'Safe Logo', title: 'Safe' },
    { src: '/images/partners/tally.png', alt: 'Tally Logo', title: 'Tally' },
    { src: '/images/partners/vana.png', alt: 'Vana Logo', title: 'Vana' },
    { src: '/images/partners/xmtp.png', alt: 'XMTP Logo', title: 'XMTP' },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bomiro text-gray-900 text-center mb-8">
          Backed by Leading Web3 Infrastructure
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-none w-48 mx-8">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  width={192}
                  height={96}
                  className="object-contain h-24 w-full filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;