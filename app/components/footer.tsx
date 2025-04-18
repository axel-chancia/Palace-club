export default function footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* Liens verticaux à gauche */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Accueil</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">À propos</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contenu centré */}
          <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
            <h2 className="text-lg font-bold pb-4">Palace club</h2>
            <p className="text-sm text-gray-400"> 2023 Palace club ©. <br /> Tous droits réservés.</p>
          </div>

          {/* Icônes à droite */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
