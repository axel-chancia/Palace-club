'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Accueil", href: "/" },
    { label: "Nos Villas", href: "/villas" },
    { label: "Créer un compte", href: "/signup" },
    { label: "Connexion", href: "/login" },
    { label: "À propos", href: "/a-propos" },
  ];

  return (
    <nav className="bg-white p-3 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="text-xl font-bold text-blue-600">
              <img
                src="/images.png"
                alt="Logo"
                className="h-20 w-auto rounded-full"
              />
            </Link>
            <Link href="/" className="text-xl font-bold text-gray-800">
              Palace Club
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition duration-200 ${
                  pathname === href
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Hamburger menu */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col p-4 space-y-3">
            {menuItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block font-medium ${
                    pathname === href
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
