'use client'
import React from 'react'
import { Bath, Bed, Waves, Utensils, Square, Wifi } from 'lucide-react'

const Info = ({
  surface = 50,
  Bathrooms = 1,
  Bedrooms = 1,
  hasPool = false,
  hasKitchen = false,
  hasWifi = true
}) => {
  const infoItems = [
    { icon: Square, label: 'Superficie', value: `${surface} m²`, color: 'text-blue-500' },
    { icon: Bath, label: 'Salles de bain', value: Bathrooms, color: 'text-green-500' },
    { icon: Bed, label: 'Chambres', value: Bedrooms, color: 'text-purple-500' },
    { icon: Waves, label: 'Piscine', value: hasPool ? 'Oui' : 'Non', color: hasPool ? 'text-teal-500' : 'text-gray-400' },
    { icon: Utensils, label: 'Cuisine équipée', value: hasKitchen ? 'Oui' : 'Non', color: hasKitchen ? 'text-yellow-500' : 'text-gray-400' },
    { icon: Wifi, label: 'Wi-Fi', value: hasWifi ? 'Oui' : 'Non', color: hasWifi ? 'text-pink-500' : 'text-gray-400' }
  ]

  return (
    <section className="w-full bg-gray-50 rounded-3xl shadow-lg py-16 px-8 sm:px-16 my-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 col-span-full mb-10">
          Informations
        </h1>

        {infoItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center space-y-2 p-6 bg-white rounded-xl shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <item.icon className={`${item.color}`} size={36} />
            <span className={`text-lg font-semibold ${item.value === 'Non' ? 'text-gray-400' : 'text-gray-800'}`}>
              {item.value}
            </span>
            <p className="text-sm text-gray-500">{item.label}</p>
          </div>
        ))}

        <div className="col-span-full text-gray-700 text-base leading-relaxed mt-6 text-justify space-y-3">
          <p>
            <strong>Palace</strong> n’est pas qu’un simple motel. C’est un lieu pensé pour offrir repos, confort et discrétion, dans une ambiance chaleureuse et soignée.
          </p>
          <p>
            Notre équipe vous garantit :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Service rapide, discret et de qualité;</li>
            <li>Chambres propres, bien entretenues et équipées;</li>
            <li>Expérience client centrée sur respect et satisfaction;</li>
          </ul>
          <p>
            Chez Palace, chaque détail compte pour votre confort et votre tranquillité, à un prix accessible.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Info
