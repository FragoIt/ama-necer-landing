import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import altarImage from "@/assets/gallery-altar.jpg";
import cacaoImage from "@/assets/ceremonia_cacao.jpeg";
import chakrasImage from "@/assets/alineacion_chakaras.jpeg";
import meditationImage from "@/assets/meditacionGuiada.jpeg";
import birthdayImage from "@/assets/service-birthday.jpg";
import oracleImage from "@/assets/oraculo_terapeutico.jpeg";
import matricidioImage from "@/assets/matrimonio_ceremonia.jpeg";
import psiloscibinaImage from "@/assets/psiloscibina_ceremonia.jpeg";
import sanacionUtero from "@/assets/sanacion_utero.jpeg";
import seleneMission from "@/assets/selene_mission.jpeg";

const initialServices = [
  {
    title: "Ceremonia de Cacao",
    description: "La ceremonia de cacao es un espacio sagrado de conexión con el corazón, guiado por la medicina ancestral del cacao ceremonial, una planta maestra conocida como el alimento de los dioses.",
    image: cacaoImage,
    gradient: "from-earth-light to-earth"
  },
  {
    title: "Oráculo de ángeles terapéutico",
    description: "El oráculo angelical es una herramienta espiritual que facilita la conexión con los ángeles y guías divinos. No es un método adivinatorio ni se utiliza para predecir el futuro, sino que es una práctica terapéutica y de autoconocimiento.",
    image: oracleImage,
    gradient: "from-gold-light to-sage"
  },
  {
    title: "Alineación de Chakras y Canalización",
    description: "Una alineación de chakras es un viaje energético y espiritual que busca restablecer el flujo natural de tu energía vital. Cada chakra —o centro energético— guarda información emocional, mental y espiritual. Cuando uno o varios están en desequilibrio, podemos sentirnos desconectadas, pesadas, confundidas o bloqueadas.",
    image: chakrasImage,
    gradient: "from-forest-light to-forest"
  },
  {
    title: "Meditaciones Guiadas",
    description: "Es una práctica en la que un facilitador te acompaña verbalmente a través del proceso meditativo. Puede durar desde unos minutos hasta más de una hora y tiene distintos enfoques según el propósito que busque.",
    image: meditationImage,
    gradient: "from-sage to-forest-light"
  },
  {
    title: "Cumpleaños Espirituales",
    description: "¿Sabías que no solo nacemos una vez?<br /> Tu cumpleaños espiritual es la oportunidad perfecta para honrar tu alma, agradecer tu camino y renacer en consciencia.",
    image: birthdayImage,
    gradient: "from-gold-light to-gold"
  },
  {
    title: "Terapia con psiloscibina",
    description: "Una experiencia terapéutica guiada con hongos sagrados, utilizados ancestralmente para la sanación y el crecimiento espiritual. En un ambiente seguro y contenido, facilitamos un viaje interior profundo que puede ayudar con la depresión, ansiedad, traumas y el descubrimiento personal. Cada sesión es personalizada y cuenta con preparación previa e integración posterior con acompañamiento constante.",
    image: psiloscibinaImage,
    gradient: "from-forest-dark to-earth"
  },
  {
    title: "Ceremonias cabalísticas",
    description: "[La esencia de las ceremonias holísticas se basa en el reconocimiento y la veneración de la vida y de todos los elementos que nos rodean.Desde los ciclos naturales, como el cambio de las estaciones, periodoslunares, hasta los eventos importantes en nuestras vidas, comonacimientos, matrimonios, inicios y cierres significativos,cumpleaños, despedidas de solteras, círculos de mujeres, etc ",
        image: matricidioImage,
    gradient: "from-gold to-earth-dark"
  }
];

const additionalServices = [
  {
    title: "Sanación de útero",
    description: "Un espacio sagrado para reconectar con tu útero, centro de poder creativo y transformador. A través de rituales ancestrales, meditación y trabajo energético, sanamos heridas transgeneracionales y recuperamos la sabiduría innata de nuestro útero sagrado.",
    image: sanacionUtero, // Puedes cambiar esta imagen por una específica
    gradient: "from-rose-300 to-rose-600"
  },
  {
    title: "Sanación de niño interior",
    description: "Un viaje terapéutico y espiritual para sanar las heridas de nuestra infancia. A través de técnicas de regresión, arte-terapia y meditación guiada, nos reconectamos con nuestro niño interior para darle el amor y la comprensión que necesita.",
    image: seleneMission, // Puedes cambiar esta imagen por una específica
    gradient: "from-sky-300 to-sky-600"
  }
];

export const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const displayedServices = showAllServices 
    ? [...initialServices, ...additionalServices]
    : initialServices;
  const handleWhatsAppClick = (service: string) => {
    const message = `Hola, me interesa conocer más sobre ${service}`;
    const whatsappUrl = `https://wa.me/573006514386?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-12 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-earth-dark mb-4 sm:mb-6">
            Servicios destacados
          </h2>
          <p className="text-base sm:text-lg text-earth max-w-2xl mx-auto px-4">
            Cada experiencia está diseñada para guiarte hacia un estado de mayor conciencia y bienestar integral.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {displayedServices.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-soft hover:shadow-sacred transition-all duration-500 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
              
              <CardContent className="p-6 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-earth-dark mb-3 sm:mb-4">
                  {service.title}
                </h3>
                
                <p
                  className="text-earth mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
                
                <Button 
                  variant="outline"
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="border-earth/30 text-earth hover:bg-earth hover:text-cream transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                >
                  Más información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ver más button */}
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            onClick={() => setShowAllServices(!showAllServices)}
            className="border-earth/30 text-earth hover:bg-earth hover:text-cream transition-all duration-300 px-8"
          >
            {showAllServices ? "Ver menos" : "Ver más servicios"}
          </Button>
        </div>
      </div>
    </section>
  );
};