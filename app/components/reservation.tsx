'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { generateKey } from 'crypto';

const Reservation: React.FC = () => {
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [gender, setGender] = useState('male');

  const handleReservation = () => {
    if (!name || !email || !arrivalDate || !departureDate) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    setConfirmationMessage(
      `Réservation confirmée pour ${
        gender === 'female' ? 'Mme.' : 'M.'
      } ${name} (${email}) du ${arrivalDate} au ${departureDate} pour ${guests} personne(s).`
    );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-lg text-center animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6">Réservez votre séjour</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Nom complet :
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email :
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700 mb-2">
          Date d'arrivée :
        </label>
        <input
          type="date"
          id="arrivalDate"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-2">
          Date de départ :
        </label>
        <input
          type="date"
          id="departureDate"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
          Genre :
        </label>
        <select
          id="gender"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Homme</option>
          <option value="female">Femme</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
          Nombre de personnes :
        </label>
        <div className="flex items-center justify-center gap-4">
          <button
            className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
          >
            <span>-</span>
          </button>
          <span className="text-lg font-bold">{guests}</span>
          <button
            className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            onClick={() => setGuests((prev) => prev + 1)}
          >
            <span>+</span>
          </button>
        </div>
      </div>
      <Button
        className="w-full py-3 bg-green-500 text-white rounded-lg font-bold shadow-md hover:scale-105 transition-transform"
        onClick={handleReservation}
      >
        Confirmer la réservation
      </Button>
      {confirmationMessage && (
        <p className="mt-4 text-green-600 font-bold">{confirmationMessage}</p>
      )}
    </div>
  );
};

export default Reservation;
