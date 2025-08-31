'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const AboutPage = () => {
  const router = useRouter()

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center">
      
      {/* 🔹 Bouton retour accueil */}
      <button
        onClick={() => router.push('/')}
        className="absolute top-6 left-6 flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
      >
        <FaArrowLeft size={20} />
        <span>Accueil</span>
      </button>

      {/* 🔹 Bannière (photo d’hôtel) */}
      <div 
        className="w-full h-64 md:h-96 bg-cover bg-center rounded-b-3xl shadow-lg" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}
      />

      {/* 🔹 Contenu principal */}
      <div className="max-w-4xl bg-white shadow-2xl rounded-3xl p-8 md:p-12 mt-[-50px] relative z-10 w-11/12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">À propos de PalaceClub</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-10 text-center">
          <span className="font-semibold text-blue-600">PalaceClub</span> est un lieu d’exception 
          où luxe, confort et convivialité se rencontrent.  
          Nous offrons à nos membres une expérience unique avec des services haut de gamme, 
          un cadre élégant et une atmosphère chaleureuse.  
        </p>

        {/* 🔹 Section Contacts */}
        <div className="grid gap-6 md:grid-cols-3 text-center">
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <FaEnvelope className="text-blue-600 text-3xl mb-3" />
            <p className="font-semibold">Email</p>
            <p className="text-gray-600 text-sm md:text-base">contact@palaceclub.com</p>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <FaPhone className="text-blue-600 text-3xl mb-3" />
            <p className="font-semibold">Téléphone</p>
            <p className="text-gray-600 text-sm md:text-base">+33 1 23 45 67 89</p>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-blue-600 text-3xl mb-3" />
            <p className="font-semibold">Adresse</p>
            <p className="text-gray-600 text-sm md:text-base">123 Avenue du Luxe, Paris</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
