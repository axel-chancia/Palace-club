export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          
          {/* Liens verticaux à gauche */}
          <nav className="w-full md:w-1/3">
            <ul className="space-y-3 text-center md:text-left">
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
          </nav>

          {/* Contenu centré */}
          <div className="w-full md:w-1/3 text-center">
            <h2 className="text-lg font-bold pb-4">Palace club</h2>
            <p className="text-sm text-gray-400">
              2023 Palace club ©.<br />
              Tous droits réservés.
            </p>
          </div>

          {/* Icônes à droite */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-white transition" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white transition" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
