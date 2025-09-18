import { useState } from "react";
import Header from "@/components/Header";
import MagicalHero from "@/components/MagicalHero";
import WizardModal from "@/components/WizardModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import PhotoGallery from "@/components/PhotoGallery";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer"; // 👈 importamos el contador

export default function Home() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const startWizard = () => {
    setIsWizardOpen(true);
  };

  const closeWizard = () => {
    setIsWizardOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Contador de promoción */}
      <div className="py-4 px-6 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto">
          <CountdownTimer />
        </div>
      </div>

      <Header onStartWizard={startWizard} />
      <MagicalHero onStartWizard={startWizard} />
      
      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <PhotoGallery maxItems={8} columns={4} />
          
          {/* CTA after gallery */}
          <div className="text-center mt-12">
            <p className="text-lg text-purple-600 mb-6">
              ¡Tu pequeño también puede tener fotos así de mágicas! ✨
            </p>
            <button
              onClick={startWizard}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-fredoka font-semibold px-8 py-3 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              data-testid="button-start-wizard-gallery"
            >
              ¡Crear mi fotomontaje ahora!
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <FeatureSection />
      </section>
      
      {/* Final CTA Section */}
      <section
        id="contact"
        className="py-16 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-fredoka mb-4">
            ¡No esperes más para crear magia! ✨
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Oferta especial válida solo por tiempo limitado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={startWizard}
              className="bg-white text-purple-600 font-fredoka font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              data-testid="button-start-wizard-final"
            >
              Contratar fotomontajes ahora
            </button>
            <div className="text-center">
              <div className="text-2xl font-bold">S/50</div>
              <div className="text-sm opacity-75 line-through">antes S/110</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <WizardModal isOpen={isWizardOpen} onClose={closeWizard} />
      <WhatsAppButton />
    </div>
  );
}
