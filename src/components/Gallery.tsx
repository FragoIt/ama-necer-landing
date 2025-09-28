import { useState } from "react";
import { Card } from "@/components/ui/card";
import cacaoImage from "@/assets/service-cacao.jpg";
import chakrasImage from "@/assets/alineacion_chakaras.jpeg";
import meditationImage from "@/assets/meditacionGuiada.jpeg";
import birthdayImage from "@/assets/holistica_ceremonia.jpeg";
import ceremoniaImage from "@/assets/ceremonia_cacao.jpeg";
import guidesImage from "@/assets/guides_.jpeg";
import altarImage from "@/assets/altarina.jpeg";
import natureImage from "@/assets/nature.jpeg";

const galleryImages = [
  { src: ceremoniaImage, alt: "Ceremonia de cacao en círculo sagrado" },
  { src: cacaoImage, alt: "Elementos ceremoniales del cacao" },
  { src: chakrasImage, alt: "Sesión de alineación de chakras" },
  { src: meditationImage, alt: "Meditación en la naturaleza" },
  { src: birthdayImage, alt: "Ceremonia holística" },
  { src: guidesImage, alt: "Nuestros guías espirituales" },
  { src: altarImage, alt: "Altar sagrado con elementos ceremoniales" },
  { src: natureImage, alt: "La naturaleza que nos inspira" }
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-12 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-earth-dark mb-4 sm:mb-6">
            Momentos sagrados
          </h2>
          <p className="text-base sm:text-lg text-earth max-w-2xl mx-auto px-4">
            Imágenes que capturan la esencia de nuestras ceremonias y el ambiente de transformación
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-0 shadow-soft hover:shadow-sacred transition-all duration-500 cursor-pointer group ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    index === 0 ? 'h-64 sm:h-96 md:h-[600px] aspect-[16/9]' : 'h-48 sm:h-64'
                  } ${image.src === birthdayImage ? 'object-[center_15%]' : ''} ${image.src === guidesImage ? 'object-[center_15%]' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-earth opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white font-medium text-lg shadow-text">
                    {image.alt}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Modal for enlarged image */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center">
              <img 
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button 
                className="absolute -top-12 right-0 text-white text-4xl hover:text-gold-light transition-colors p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ×
              </button>
              <p className="absolute -bottom-10 left-0 right-0 text-center text-white text-sm sm:text-base">
                {galleryImages[selectedImage].alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};