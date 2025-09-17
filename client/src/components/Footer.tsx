import logoImg from "@assets/logo album magico_1758127287037.png";
import { MessageCircle, Phone, Mail, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <img 
              src={logoImg} 
              alt="El Álbum Mágico" 
              className="h-20 mx-auto md:mx-0 mb-4"
              data-testid="img-footer-logo"
            />
            <p className="text-purple-200 mb-4">
              Creamos recuerdos mágicos que durarán para toda la vida. 
              Cada fotomontaje es una obra de arte única.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1 text-pink-300">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 fill-current" />
              <span>en Perú</span>
            </div>
          </div>

          {/* Servicios */}
          <div className="text-center">
            <h3 className="text-xl font-fredoka font-semibold mb-4 text-yellow-300">
              Nuestros Servicios
            </h3>
            <ul className="space-y-2 text-purple-200">
              <li>Fotomontajes de Bebé</li>
              <li>Sesiones Familiares</li>
              <li>Temática Disney</li>
              <li>Personajes Marvel</li>
              <li>Escenarios de Fantasía</li>
              <li>Sesiones de Cumpleaños</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-fredoka font-semibold mb-4 text-yellow-300">
              Contáctanos
            </h3>
            <div className="space-y-3 text-purple-200">
              <a 
                href="https://wa.link/p15xd2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 hover:text-green-300 transition-colors"
                data-testid="link-footer-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="w-4 h-4" />
                <span>Te llamamos</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="w-4 h-4" />
                <span>Lima, Perú</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-yellow-300 font-semibold mb-2">¡Oferta Especial!</p>
              <p className="text-2xl font-bold">5 fotomontajes por S/50</p>
              <p className="text-sm text-purple-300 line-through">antes S/110</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-700 mt-8 pt-6 text-center text-purple-300">
          <p>&copy; 2024 El Álbum Mágico. Todos los derechos reservados.</p>
          <p className="text-sm mt-1">Creando magia desde el corazón ✨</p>
        </div>
      </div>
    </footer>
  );
}