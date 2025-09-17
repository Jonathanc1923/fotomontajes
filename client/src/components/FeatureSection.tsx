import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Camera, Wand2, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Fotografía Profesional",
    description: "Equipos de alta calidad y técnicas profesionales para capturar cada detalle mágico"
  },
  {
    icon: Wand2,
    title: "Edición Mágica", 
    description: "Transformamos tus fotos con efectos especiales y escenarios de ensueño"
  },
  {
    icon: Heart,
    title: "Con Mucho Amor",
    description: "Cada fotomontaje es creado con cariño y dedicación para tu familia"
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Recibe tus fotos mágicas en pocos días, listas para enmarcar y compartir"
  },
  {
    icon: Shield,
    title: "Calidad Garantizada", 
    description: "Garantizamos tu satisfacción total con cada trabajo que realizamos"
  },
  {
    icon: Sparkles,
    title: "Temáticas Únicas",
    description: "Disney, Marvel, fantasía y muchas más opciones para crear recuerdos únicos"
  }
];

export default function FeatureSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 font-fredoka mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-purple-600 max-w-2xl mx-auto">
            Somos especialistas en crear recuerdos mágicos que durarán para toda la vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover-elevate transition-all duration-300 bg-white/80 backdrop-blur-sm"
              data-testid={`card-feature-${index}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-purple-800">
                  {feature.title}
                </h3>
                <p className="text-purple-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}