'use client'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaArrowLeft } from 'react-icons/fa'

const LoginPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      redirect: false,
      email: formData.email,
      password: formData.password,
    })
    if (res?.error) {
      alert(res.error)
    } else {
      router.push('/')
    }
  }

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">

      {/* 🔹 Bouton CTA retour accueil fixé haut gauche */}
      <button
        onClick={() => router.push('/')}
        className="absolute top-6 left-6 flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
      >
        <FaArrowLeft size={20} />
        <span>Accueil</span>
      </button>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Connexion PalaceClub</h1>

        {/* Formulaire classique */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="email@exemple.com"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Mot de passe"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          >
            Se connecter
          </button>
        </form>

        <div className="space-y-4">
          {/* Connexion avec Google */}
          <button
            onClick={() => signIn('google')}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 hover:shadow-md transition-shadow"
          >
            <FcGoogle size={24} />
            <span>Se connecter avec Google</span>
          </button>

          {/* Connexion avec Facebook */}
          <button
            onClick={() => signIn('facebook')}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <FaFacebook size={24} />
            <span>Se connecter avec Facebook</span>
          </button>
        </div>

        <div className="text-center text-gray-500">
          Pas encore membre ?{' '}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => router.push('/signup')}
          >
            Inscrivez-vous
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease forwards;
        }
      `}</style>
    </main>
  )
}

type InputFieldProps = {
  label: string
  name: string
  type: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, placeholder, value, onChange }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-1" htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
    />
  </div>
)

export default LoginPage
