import React from 'react';
import { useTranslation } from 'react-i18next';

const clients = [
  [
    { name: 'Ally', logo: '/logos/ally.svg' },
    { name: 'Rakuten', logo: '/logos/rakuten.svg' },
    { name: 'Elastic', logo: '/logos/elastic.svg' },
    { name: 'BCG', logo: '/logos/bcg.svg' },
    { name: 'IDEO', logo: '/logos/ideo.svg' },
    { name: "Moody's", logo: '/logos/moodys.svg' },
  ],
  [
    { name: 'Adyen', logo: '/logos/adyen.svg' },
    { name: 'Infor', logo: '/logos/infor.svg' },
    { name: 'Eventbrite', logo: '/logos/eventbrite.svg' },
    { name: 'Replit', logo: '/logos/replit.svg' },
    { name: 'Retool', logo: '/logos/retool.svg' },
    { name: 'Databricks', logo: '/logos/databricks.svg' },
  ],
  [
    { name: 'Google', logo: '/logos/google.svg' },
    { name: 'Axiom', logo: '/logos/axiom.svg' },
    { name: 'Home Depot', logo: '/logos/homedepot.svg' },
    { name: 'Instacart', logo: '/logos/instacart.svg' },
    { name: 'Bridgewater', logo: '/logos/bridgewater.svg' },
    { name: 'Podium', logo: '/logos/podium.svg' },
  ],
  [
    { name: 'ByteDance', logo: '/logos/bytedance.svg' },
    { name: 'Guidewire', logo: '/logos/guidewire.svg' },
  ],
];

export default function Clients() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 max-w-4xl mx-auto leading-tight">
          {t('clients.title')}
        </h2>

        <div className="space-y-12">
          {clients.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60"
            >
              {row.map((client) => (
                <div
                  key={client.name}
                  className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}