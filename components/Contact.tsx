'use client'
import React from 'react'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-20 px-8 sm:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Nous contacter</h2>
        <p className="text-gray-700 mb-12">
          Vous avez des questions ou souhaitez réserver ? Remplissez le formulaire ci-dessous ou contactez-nous directement.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500" size={28} />
              <span className="text-gray-800">palacemotel@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-green-500" size={28} />
              <span className="text-gray-800">+241 066 34 56 78</span>
            </div>
          </div>

          {/* Contact form */}
          <form className="flex flex-col space-y-4 bg-white p-8 rounded-xl shadow-md">
            <input
              type="text"
              placeholder="Votre nom"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Votre message"
              rows={5}
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
