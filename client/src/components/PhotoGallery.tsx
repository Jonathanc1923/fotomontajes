import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Sparkles, Eye } from "lucide-react";

// Import sample images
import monstersImg from "@assets/6e962d61-7aa0-4010-9889-956b71e2e25e_1758126876413.jpg";
import moonImg from "@assets/9c474195-07bc-4bdd-bdea-12067ed76364_1758126876414.jpg";
import ballerinaImg from "@assets/87735100-a949-4908-9b57-70f38a2ad938_1758126876414.jpg";
import princessImg from "@assets/foto15_1758126876415.jpg";
import lambImg from "@assets/2e4124f7-dc68-4be9-a6ab-e8684e3b707e_1758126876415.jpg";
import peterPanImg from "@assets/994f6225-b0b3-4b29-a73c-de941f859789_1758126876415.jpg";
import cinderellaImg from "@assets/89c5c25d-1415-4cd8-b897-0ac5beb26d88_1758126876416.jpg";
import balloonImg from "@assets/48b44a95-4f4f-4662-bd86-7f0e518e6142_1758126876416.jpg";
import marioImg from "@assets/492330742_1240768438048772_8307688729786010659_n_1758126876417.jpg";
import princessCarriageImg from "@assets/494147861_1296189768892720_4684710318659525456_n_1758126876418.jpg";
import princeImg from "@assets/91d832aa-62de-4a65-bfc6-f0054089cf7b_1758126876418.jpg";
import snowWhiteImg from "@assets/542b0a32-3e11-4f3d-8691-a2a24c855bb8_1758126876419.jpg";

const samplePhotos = [
  {
    id: 1,
    src: monstersImg,
    title: "Monsters Inc Adventure",
    category: "Disney",
    description: "Bebé con personajes de Monsters Inc en escenario temático"
  },
  {
    id: 2,
    src: moonImg,
    title: "Sweet Dreams Moon",
    category: "Fantasía",
    description: "Bebé durmiendo en luna mágica con estrellitas"
  },
  {
    id: 3,
    src: ballerinaImg,
    title: "Little Ballerina",
    category: "Fantasía",
    description: "Bebé bailarina en tutú rosa con muñequita"
  },
  {
    id: 4,
    src: princessImg,
    title: "Royal Princess",
    category: "Fantasía",
    description: "Bebé princesa con corona dorada elegante"
  },
  {
    id: 5,
    src: lambImg,
    title: "Little Lamb",
    category: "Bebé",
    description: "Tierno bebé con gorrito y ovejita de peluche"
  },
  {
    id: 6,
    src: peterPanImg,
    title: "Peter Pan Adventure",
    category: "Disney",
    description: "Bebé como Peter Pan con personajes Disney"
  },
  {
    id: 7,
    src: cinderellaImg,
    title: "Cinderella Magic",
    category: "Disney",
    description: "Bebé Cenicienta en carruaje mágico"
  },
  {
    id: 8,
    src: balloonImg,
    title: "Rainbow Fun",
    category: "Cumpleaños",
    description: "Bebé festivo con globos y cámara de juguete"
  },
  {
    id: 9,
    src: marioImg,
    title: "Super Mario World",
    category: "Marvel",
    description: "Bebé Mario con escenario de videojuego"
  },
  {
    id: 10,
    src: princessCarriageImg,
    title: "Princess Carriage",
    category: "Disney",
    description: "Pequeña princesa en carruaje dorado"
  },
  {
    id: 11,
    src: princeImg,
    title: "Little Prince",
    category: "Disney",
    description: "Bebé príncipe con castillo Disney de fondo"
  },
  {
    id: 12,
    src: snowWhiteImg,
    title: "Snow White Dreams",
    category: "Disney",
    description: "Bebé Blancanieves con vestido clásico"
  }
];

interface PhotoGalleryProps {
  showTitle?: boolean;
  maxItems?: number;
  columns?: number;
}

export default function PhotoGallery({ showTitle = true, maxItems, columns = 4 }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof samplePhotos[0] | null>(null);
  
  const photosToShow = maxItems ? samplePhotos.slice(0, maxItems) : samplePhotos;
  
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3', 
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
  };

  return (
    <div className="w-full">
      {showTitle && (
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 font-fredoka">
              Nuestros Trabajos Mágicos
            </h2>
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-lg text-purple-600 max-w-2xl mx-auto">
            Descubre la magia que podemos crear con las fotos de tus pequeños. 
            Cada imagen cuenta una historia única y especial.
          </p>
        </div>
      )}
      
      <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-4`}>
        {photosToShow.map((photo) => (
          <Card 
            key={photo.id}
            className="group relative overflow-hidden hover-elevate cursor-pointer transition-all duration-300"
            onClick={() => setSelectedPhoto(photo)}
            data-testid={`card-gallery-photo-${photo.id}`}
          >
            <div className="aspect-square relative">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
              
              {/* Category badge */}
              <div className="absolute top-2 left-2">
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {photo.category}
                </span>
              </div>
            </div>
            
            <div className="p-3">
              <h3 className="font-semibold text-purple-800 text-sm truncate">
                {photo.title}
              </h3>
              <p className="text-xs text-purple-600 mt-1 line-clamp-2">
                {photo.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal for enlarged view */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-3xl">
          {selectedPhoto && (
            <div className="space-y-4">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full font-medium">
                    {selectedPhoto.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-purple-800 font-fredoka">
                  {selectedPhoto.title}
                </h3>
                <p className="text-purple-600">
                  {selectedPhoto.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}