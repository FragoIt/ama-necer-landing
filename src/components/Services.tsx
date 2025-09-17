import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cacaoImage from "@/assets/service-cacao.jpg";
import chakrasImage from "@/assets/service-chakras.jpg";
import meditationImage from "@/assets/service-meditation.jpg";
import birthdayImage from "@/assets/service-birthday.jpg";

const services = [
  {
    title: "Ceremonia de Cacao",
    description: "Una experiencia ancestral para abrir el corazón, liberar emociones y conectar con la comunidad.",
    image: cacaoImage,
    gradient: "from-earth-light to-earth"
  },
  {
    title: "Alineación de Chakras y Canalización",
    description: "Equilibra tu energía vital y recibe mensajes que te ayuden a avanzar en tu camino.",
    image: chakrasImage,
    gradient: "from-forest-light to-forest"
  },
  {
    title: "Meditaciones Guiadas",
    description: "Encuentra calma y claridad a través de prácticas guiadas que te llevan al presente.",
    image: meditationImage,
    gradient: "from-sage to-forest-light"
  },
  {
    title: "Cumpleaños Espirituales",
    description: "Celebra tu renacer con un ritual personalizado que honra tu viaje y tu propósito.",
    image: birthdayImage,
    gradient: "from-gold-light to-gold"
  }
];

export const Services = () => {
  const handleWhatsAppClick = (service: string) => {
    const message = `Hola, me interesa conocer más sobre ${service}`;
    const whatsappUrl = `https://wa.me/573XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="servicios" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-dark mb-6">
            Servicios destacados
          </h2>
          <p className="text-lg text-earth max-w-2xl mx-auto">
            Cada experiencia está diseñada para guiarte hacia un estado de mayor conciencia y bienestar integral.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-soft hover:shadow-sacred transition-all duration-500 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-earth-dark mb-4">
                  {service.title}
                </h3>
                
                <p className="text-earth mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  variant="outline"
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="border-earth/30 text-earth hover:bg-earth hover:text-cream transition-all duration-300"
                >
                  Más información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};