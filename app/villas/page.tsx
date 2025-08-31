'use client'
import React from 'react'
import { Bed, Bath, Utensils, Wifi, Waves, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const rooms = [
  { id: 1, name: 'Chambre Standard 1', image: '/5.jpg', category: 'Standard', beds: 1, bathrooms: 1, hasKitchen: false, hasWifi: true, hasPool: false, price: 70 },
  { id: 2, name: 'Suite Deluxe 1', image: '/6.jpg', category: 'Deluxe', beds: 2, bathrooms: 1, hasKitchen: true, hasWifi: true, hasPool: true, price: 150 },
  { id: 3, name: 'Suite Familiale 1', image: '/7.jpg', category: 'Familiale', beds: 3, bathrooms: 2, hasKitchen: true, hasWifi: true, hasPool: true, price: 200 },
  { id: 4, name: 'Chambre Standard 2', image: '/8.jpg', category: 'Standard', beds: 1, bathrooms: 1, hasKitchen: false, hasWifi: true, hasPool: false, price: 75 },
  { id: 5, name: 'Suite Deluxe 2', image: '/9.jpg', category: 'Deluxe', beds: 2, bathrooms: 1, hasKitchen: true, hasWifi: true, hasPool: true, price: 155 },
  { id: 6, name: 'Suite Familiale 2', image: '/axel.jpg', category: 'Familiale', beds: 3, bathrooms: 2, hasKitchen: true, hasWifi: true, hasPool: true, price: 205 },
  { id: 7, name: 'Chambre Standard 3', image: '/david.jpg', category: 'Standard', beds: 1, bathrooms: 1, hasKitchen: false, hasWifi: true, hasPool: false, price: 72 },
  { id: 8, name: 'Suite Deluxe 3', image: '/9.jpg', category: 'Deluxe', beds: 2, bathrooms: 1, hasKitchen: true, hasWifi: true, hasPool: true, price: 160 },
  { id: 9, name: 'Suite Familiale 3', image: '/10.jpg', category: 'Familiale', beds: 3, bathrooms: 2, hasKitchen: true, hasWifi: true, hasPool: true, price: 210 },
  { id: 10, name: 'Chambre Standard 4', image: '/12.jpg', category: 'Standard', beds: 1, bathrooms: 1, hasKitchen: false, hasWifi: true, hasPool: false, price: 73 },
  { id: 11, name: 'Suite Deluxe 4', image: '/11.jpg', category: 'Deluxe', beds: 2, bathrooms: 1, hasKitchen: true, hasWifi: true, hasPool: true, price: 165 },
  { id: 12, name: 'Suite Familiale 4', image: '/13.jpg', category: 'Familiale', beds: 3, bathrooms: 2, hasKitchen: true, hasWifi: true, hasPool: true, price: 215 },
]

const GalleryPage = () => {
  const router = useRouter()

  return (
    <main className="w-full min-h-screen bg-gray-50 py-16 px-8 sm:px-16">
      {/* Bouton retour */}
      <div className="mb-8">
        <button
          onClick={() => router.push('/')}
          className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Retour à l'accueil</span>
        </button>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Galerie des Chambres
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">{room.name}</h3>
              <p className="text-sm text-gray-500">{room.category}</p>

              <div className="flex items-center flex-wrap gap-4 text-gray-700 mt-2">
                <div className="flex items-center space-x-1">
                  <Bed size={18} />
                  <span>{room.beds}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bath size={18} />
                  <span>{room.bathrooms}</span>
                </div>
                {room.hasKitchen && (
                  <div className="flex items-center space-x-1">
                    <Utensils size={18} />
                    <span>Oui</span>
                  </div>
                )}
                {room.hasWifi && (
                  <div className="flex items-center space-x-1">
                    <Wifi size={18} />
                    <span>Oui</span>
                  </div>
                )}
                {room.hasPool && (
                  <div className="flex items-center space-x-1">
                    <Waves size={18} />
                    <span>Oui</span>
                  </div>
                )}
              </div>

              <p className="text-gray-900 font-semibold mt-3">{room.price} XOF / nuit</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease forwards;
        }
      `}</style>
    </main>
  )
}

export default GalleryPage
