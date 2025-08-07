'use client'
import { FC } from 'react'
import { CookingPot, Bath, Bed, Wifi, Waves, Utensils, Square } from 'lucide-react'

interface InfoCardProps {
  surface: number
  Bathrooms: number
  Bedrooms: number
  hasPool: boolean
  hasKitchen: boolean
}

const Info: FC<InfoCardProps> = ({ surface, Bathrooms, Bedrooms, hasPool, hasKitchen }) => {
  return (
    <section className="w-full bg-gray-100 rounded-lg shadow-lg py-16 px-6 sm:px-12 my-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center w-full">
        <h1 className="text-3xl font-bold text-gray-800 col-span-full mb-8">
          Informations
        </h1>

        <div className="flex flex-col items-center space-y-2">
          <Square className="text-blue-500" size={36} />
          <span className="text-lg font-semibold text-gray-700">{surface} m²</span>
          <p className="text-sm text-gray-500">Superficie</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Bath className="text-green-500" size={36} />
          <span className="text-lg font-semibold text-gray-700">{Bathrooms}</span>
          <p className="text-sm text-gray-500">Salles de bain</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Bed className="text-purple-500" size={36} />
          <span className="text-lg font-semibold text-gray-700">{Bedrooms}</span>
          <p className="text-sm text-gray-500">Chambres</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Waves className={`${hasPool ? 'text-teal-500' : 'text-gray-400'}`} size={36} />
          <span className={`text-lg font-semibold ${hasPool ? 'text-gray-700' : 'text-gray-400'}`}>
            {hasPool ? 'Oui' : 'Non'}
          </span>
          <p className="text-sm text-gray-500">Piscine</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Utensils className={`${hasKitchen ? 'text-yellow-500' : 'text-gray-400'}`} size={36} />
          <span className={`text-lg font-semibold ${hasKitchen ? 'text-gray-700' : 'text-gray-400'}`}>
            {hasKitchen ? 'Oui' : 'Non'}
          </span>
          <p className="text-sm text-gray-500">Cuisine équipée</p>
        </div>

        <div className="col-span-full text-gray-600 text-sm leading-relaxed mt-6 text-justify">
          Palace, c’est bien plus qu’un simple motel. C’est un lieu pensé pour vous offrir repos,
          confort et discrétion, dans une ambiance chaleureuse et soignée. Créé avec passion et
          professionnalisme, Palace Motel répond aux besoins de tous ceux qui recherchent un endroit
          calme, propre et accueillant pour passer un moment agréable, que ce soit pour quelques
          heures ou pour plusieurs nuits.
          <br />
          <br />
          Notre équipe est engagée à vous garantir :
          <ul className="list-disc list-inside mt-2">
            <li>Un service de qualité, rapide et discret;</li>
            <li>Des chambres toujours propres, bien entretenues et équipées;</li>
            <li>Une expérience client centrée sur le respect, l’écoute et la satisfaction;</li>
          </ul>
          <br />
          Nous croyons que chaque client mérite un accueil chaleureux et un cadre paisible, à un prix
          accessible. C’est pourquoi, chez Palace, chaque détail compte. Parce que votre confort est
          notre priorité.
        </div>
      </div>
    </section>
  )
}

export default Info
