import logoImg from "@assets/logo album magico_1758127287037.png";
import WhatsAppButton from "./WhatsAppButton";

interface HeaderProps {
  onStartWizard: () => void;
}

export default function Header({ onStartWizard }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoImg} 
              alt="El Álbum Mágico" 
              className="h-12 md:h-16"
              data-testid="img-header-logo"
            />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#gallery" className="text-purple-700 hover:text-purple-900 font-medium">
              Galería
            </a>
            <a href="#features" className="text-purple-700 hover:text-purple-900 font-medium">
              Servicios
            </a>
            <a href="#contact" className="text-purple-700 hover:text-purple-900 font-medium">
              Contacto
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onStartWizard}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-fredoka font-semibold px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              data-testid="button-header-cta"
            >
              ¡Contratar!
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}