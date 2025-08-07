'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link"; 

export default function Header() {
    return (
        <header
            className="relative w-full h-screen flex items-center justify-center bg-fixed bg-center bg-cover transition-all duration-700"
            style={{ backgroundImage: "url('/arsel.jpg')" }}
        >
            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Contenu centré */}
            <div className="relative text-center px-4 sm:px-8 max-w-3xl">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md animate-fade-in-up">
                    Bienvenue au <span className="text-yellow-400">Palace Club</span>,
                    <br />
                    la villa du sommeil
                </h1>

                <p className="mt-6 text-lg sm:text-2xl text-white/90 font-medium animate-fade-in-up delay-200">
                    Voyagez vers une destination de rêve et de confort
                </p>

                <Link href="/reservation" passHref>
                    <Button
                        className="mt-10 px-8 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl animate-bounce"
                    >
                        Réserver
                    </Button>
                </Link>
            </div>
        </header>
    );
}
