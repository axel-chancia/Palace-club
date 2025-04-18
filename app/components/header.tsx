import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header 
            className="relative w-full h-screen flex items-center justify-center bg-fixed bg-center bg-cover" 
            style={{ backgroundImage: "url('arsel.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center p-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                    Bienvenue au Palace club la villa du sommeil !
                </h1>
                <p className="text-lg md:text-2xl font-bold mb-8 text-white">
                    Voyager vers une destination de choix 
                </p>
                <Button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg animate-bounce">
                    Réserver
                </Button>
            </div>
        </header>
    );
}
