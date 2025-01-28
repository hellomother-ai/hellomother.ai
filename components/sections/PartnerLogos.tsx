import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const PartnerLogos = () => {
  const logos = [
    '/images/partners/arweave.png',
    '/images/partners/base.png',
    '/images/partners/coinbase.png',
    '/images/partners/collab-land.png',
    '/images/partners/ens.png',
    '/images/partners/eigen-layer.png',
    '/images/partners/lit-protocol.png',
    '/images/partners/metamask.png',
    '/images/partners/safe.png',
    '/images/partners/tally.png',
    '/images/partners/vana.png',
    '/images/partners/xmtp.png',
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
              <div
                key={index}
                className="flex-none w-48 mx-8" // Adjust width and margin as needed
              >
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={192}
                  height={96}
                  className="object-contain h-24 w-full filter grayscale hover:grayscale-0 transition-all duration-300"
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