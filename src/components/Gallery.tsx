import { useState } from "react";
import { Card } from "@/components/ui/card";
import cacaoImage from "@/assets/service-cacao.jpg";
import chakrasImage from "@/assets/service-chakras.jpg";
import meditationImage from "@/assets/service-meditation.jpg";
import birthdayImage from "@/assets/service-birthday.jpg";
import heroImage from "@/assets/hero-cacao-ceremony.jpg";
import guidesImage from "@/assets/spiritual-guides.jpg";
import altarImage from "@/assets/gallery-altar.jpg";
import natureImage from "@/assets/gallery-nature.jpg";

const galleryImages = [
  { src: heroImage, alt: "Ceremonia de cacao en círculo sagrado" },
  { src: cacaoImage, alt: "Elementos ceremoniales del cacao" },
  { src: chakrasImage, alt: "Sesión de alineación de chakras" },
  { src: meditationImage, alt: "Meditación en la naturaleza" },
  { src: birthdayImage, alt: "Celebración de cumpleaños espiritual" },
  { src: guidesImage, alt: "Nuestros guías espirituales" },
  { src: altarImage, alt: "Altar sagrado con elementos ceremoniales" },
  { src: natureImage, alt: "La naturaleza de Sopetrán que nos inspira" }
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-dark mb-6">
            Momentos sagrados
          </h2>
          <p className="text-lg text-earth max-w-2xl mx-auto">
            Imágenes que capturan la esencia de nuestras ceremonias y el ambiente de transformación
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-0 shadow-soft hover:shadow-sacred transition-all duration-500 cursor-pointer group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    index === 0 ? 'h-96 md:h-full' : 'h-64'
                  }`}
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
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <button 
                className="absolute top-4 right-4 text-white text-3xl hover:text-gold-light transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};