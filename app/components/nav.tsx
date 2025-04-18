'use client';

import Image from "@/public/images.png";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { label: "Home", href: "/Home" },
        { label: "La villa", href: "/la-villa" },
        { label: "Offres", href: "/offres" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <nav className="bg-gray-800 bg-opacity-75 fixed top-0 left-0 w-full z-10 flex items-center justify-between p-4">
            {/* Logo and Name */}
            <div className="flex items-center space-x-2">
                <img
                    src={Image.src}
                    alt="Logo"
                    className="h-12 w-12 rounded-full"
                />
                <span className="text-white text-lg font-bold text-center">
                    <Link href="/">Palace club</Link>
                </span>
            </div>

            {/* Links and User Icon for large screens */}
            <div className="hidden md:flex md:items-center md:space-x-6">
                <ul className="flex items-center space-x-6">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className="text-white hover:text-yellow-400 transition-colors"
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
                <button className="text-white hover:text-yellow-400 transition-colors">
                    <User size={24} />
                </button>
            </div>

            {/* Hamburger Menu for small screens */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Dropdown Menu for small screens */}
            <ul
                className={`${
                    isOpen ? "block" : "hidden"
                } md:hidden absolute top-16 right-4 w-48 bg-gray-800 p-4 space-y-4 rounded-lg`}
            >
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="text-white hover:text-yellow-400 transition-colors"
                    >
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
                <li>
                    <button className="text-white hover:text-yellow-400 transition-colors flex items-center">
                        <User size={24} />
                        <span className="ml-2">Inscrivez vous</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
