'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

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
      `Réservation confirmée pour ${gender === 'female' ? 'Mme.' : 'M.'} ${name} (${email}) du ${arrivalDate} au ${departureDate} pour ${guests} personne(s).`
    );
  };

  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-200 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8 animate-fadeIn
                      overflow-auto max-h-[90vh]">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Réservez votre séjour</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleReservation();
          }}
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet :
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email :
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700 mb-1">
                Date d'arrivée :
              </label>
              <input
                type="date"
                id="arrivalDate"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 mb-1">
                Date de départ :
              </label>
              <input
                type="date"
                id="departureDate"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
              Genre :
            </label>
            <select
              id="gender"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Homme</option>
              <option value="female">Femme</option>
            </select>
          </div>

          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre de personnes :
            </label>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
                aria-label="Réduire le nombre de personnes"
              >
                -
              </button>
              <span className="text-lg font-bold">{guests}</span>
              <button
                type="button"
                className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                onClick={() => setGuests((prev) => prev + 1)}
                aria-label="Augmenter le nombre de personnes"
              >
                +
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg font-bold shadow-md hover:scale-105 transition-transform"
          >
            Confirmer la réservation
          </Button>
        </form>

        {confirmationMessage && (
          <p className="mt-5 text-green-700 font-semibold text-center">{confirmationMessage}</p>
        )}
      </div>
    </main>
  );
};

export default Reservation;
