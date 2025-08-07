'use client';

import { Briefcase, Hotel, Coffee, Wifi } from 'lucide-react';

const services = [
  {
    title: 'Hébergement de Luxe',
    description: 'Des suites haut de gamme avec une vue imprenable pour un séjour inoubliable.',
    icon: <Hotel size={36} />,
  },
  {
    title: 'Service en Chambre',
    description: 'Profitez d’un service attentif 24h/24 pour répondre à tous vos besoins.',
    icon: <Coffee size={36} />,
  },
  {
    title: 'Espace de Travail',
    description: 'Un environnement calme et équipé pour télétravailler avec efficacité.',
    icon: <Briefcase size={36} />,
  },
  {
    title: 'Wi-Fi Haut Débit',
    description: 'Connexion Internet rapide et stable dans toute la villa.',
    icon: <Wifi size={36} />,
  },
];

export default function NosServices() {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gray-50 shadow-2xl rounded-3xl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-16 text-gray-900 tracking-tight">
          Nos Services
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col justify-start items-center w-full h-full"
              aria-label={title}
              role="article"
            >
              <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full bg-yellow-100 text-yellow-500">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
