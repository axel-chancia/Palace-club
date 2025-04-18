 'use client'
 import { FC } from 'react'
import { CookingPot, Bath, Bed, Wifi, Waves, Utensils, Square } from 'lucide-react';

interface InfoCardProps {
     surface: number;
     Bathrooms: number;
     Bedrooms: number;
     hasPool: boolean;
     hasKitchen: boolean;
    }

const Info: FC<InfoCardProps> = ({ 
 surface, Bathrooms, Bedrooms, hasPool, hasKitchen 
}) => {
    return (
        <div className="info-container grid grid-cols-2 gap-4 p-4 bg-gray-100 rounded-lg shadow-md justify-center items-center text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 col-span-2">Information</h1>
        <div className="info-item flex flex-col items-center space-y-2">
            <Square className="icon text-blue-500" />
            <span className="text-sm font-medium">Superficie 120m {surface}</span>
        </div>
        <div className="info-item flex flex-col items-center space-y-2">
            <Bath className="icon text-green-500" />
            <span className="text-sm font-medium">Salles de bains {Bathrooms}</span>
        </div>
        <div className="info-item flex flex-col items-center space-y-2">
            <Bed className="icon text-purple-500" />
            <span className="text-sm font-medium">Chambres {Bedrooms}</span>
        </div>
        <div className="info-item flex flex-col items-center space-y-2">
            <Waves className={`icon ${hasPool ? 'text-teal-500' : 'text-gray-400'}`} />
            <span className="text-sm font-medium">piscine {hasPool}
            </span>
        </div>
        <div className="info-item flex flex-col items-center space-y-2">
            <Utensils className={`icon ${hasKitchen ? 'text-yellow-500' : 'text-gray-400'}`} />
            <span className="text-sm font-medium">cuisine {hasKitchen}
            </span>
        </div>
        <p className="text-sm text-gray-600 col-span-2 mt-4">Palace, c’est bien plus qu’un simple motel. C’est un lieu pensé pour vous offrir repos, confort et discrétion, dans une ambiance chaleureuse et soignée.
          Créé avec passion et professionnalisme, Palace Motel répond aux besoins de tous ceux qui recherchent un endroit calme, propre et accueillant pour passer un moment agréable, que ce soit pour quelques heures ou pour plusieurs nuits.
          Notre équipe est engagée à vous garantir :
            Un service de qualité, rapide et discret;
            Des chambres toujours propres, bien entretenues et équipées;
            Une expérience client centrée sur le respect, l’écoute et la satisfaction;
          Nous croyons que chaque client mérite un accueil chaleureux et un cadre paisible, à un prix accessible.
          C’est pourquoi, chez Palace, chaque détail compte. Parce que votre confort est notre priorité..</p>
    </div>
  )
}

export default Info 