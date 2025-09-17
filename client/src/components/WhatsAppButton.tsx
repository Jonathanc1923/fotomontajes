import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.link/p15xd2', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse"
      data-testid="button-whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
}