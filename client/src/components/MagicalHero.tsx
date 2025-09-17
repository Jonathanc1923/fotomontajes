import { Button } from "@/components/ui/button";
import { Sparkles, Star, Wand2 } from "lucide-react";
import logoImg from "@assets/logo album magico_1758127287037.png";

interface MagicalHeroProps {
  onStartWizard: () => void;
}

export default function MagicalHero({ onStartWizard }: MagicalHeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Magical gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-blue-200 to-yellow-200" />
      
      {/* Floating stars */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-20 left-20 text-yellow-400 w-8 h-8 animate-pulse" />
        <Sparkles className="absolute top-32 right-32 text-pink-400 w-6 h-6 animate-pulse delay-75" />
        <Star className="absolute bottom-40 left-32 text-blue-400 w-5 h-5 animate-pulse delay-150" />
        <Wand2 className="absolute top-1/3 right-20 text-purple-400 w-7 h-7 animate-pulse delay-300" />
        <Sparkles className="absolute bottom-32 right-40 text-yellow-400 w-4 h-4 animate-pulse delay-450" />
        <Star className="absolute bottom-20 left-1/3 text-pink-400 w-6 h-6 animate-pulse delay-600" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-8">
          {/* Logo prominente */}
          <div className="mb-8">
            <img 
              src={logoImg} 
              alt="El Álbum Mágico" 
              className="w-48 md:w-64 mx-auto mb-4"
              data-testid="img-hero-logo"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-6 font-fredoka leading-tight">
            Convierte tus fotos caseras en recuerdos mágicos ✨
          </h1>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
            <p className="text-lg md:text-2xl text-purple-700 font-semibold mb-2">
              Solo hoy 5 fotomontajes profesionales a 
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl md:text-4xl font-bold text-green-600">S/50</span>
              <span className="text-xl text-gray-500 line-through">(antes S/110)</span>
            </div>
          </div>
        </div>

        <Button 
          onClick={onStartWizard}
          size="lg"
          className="text-xl px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-fredoka font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          data-testid="button-start-wizard"
        >
          <Sparkles className="w-6 h-6 mr-3" />
          Contratar ahora
        </Button>

        <p className="text-purple-600 mt-6 font-medium">
          ¡Transforma tus momentos especiales en obras de arte!
        </p>
      </div>
    </div>
  );
}