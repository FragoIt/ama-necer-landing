import { Card } from "@/components/ui/card";
import guidesImage from "@/assets/selene_mission.jpeg";

export const Mission = () => {
  return (
  <section id="mission" className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-dark mb-6">
                Nuestra misión
              </h2>
              
              <p className="text-lg text-earth leading-relaxed">
                En <span className="font-semibold text-earth-dark">Amaecer Mamboretá</span> creemos que cada ser humano guarda en su interior una chispa divina. Nuestra misión es acompañarte a encenderla, guiándote en un viaje de reconexión con tu cuerpo, tu mente y tu espíritu.
              </p>
              
              <p className="text-lg text-earth leading-relaxed mt-6">
                Creamos espacios sagrados donde la naturaleza, la energía y la intención se unen para que puedas recordar quién eres y vivir desde tu verdad.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-gradient-sacred"></div>
              <span className="text-gold font-medium">Espacios sagrados en santa fe de Antioquia</span>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-soft">
              <img 
                src={guidesImage} 
                alt="Guías espirituales de Ama Necer Mamboretá"
                className="w-full h-96 object-cover"
              />
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-sacred rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-forest/20 rounded-full"></div>
          </div>
        </div>
      </div>
  </section>
  );
};