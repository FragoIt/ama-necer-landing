import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cacao-ceremony.jpg";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola, me interesa reservar una experiencia espiritual con Ama Necer Mamboretá";
    const whatsappUrl = `https://wa.me/573XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Reconecta con tu 
          <span className="text-gold-light block mt-2">esencia</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light leading-relaxed max-w-2xl mx-auto">
          Ceremonias y sesiones de autodescubrimiento para sanar, transformar y vivir en armonía.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            onClick={handleWhatsAppClick}
            className="bg-gradient-sacred text-earth-dark hover:shadow-glow transition-all duration-500 font-semibold px-8 py-4 text-lg border-2 border-gold/30"
          >
            Reserva tu experiencia
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToServices}
            className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white transition-all duration-300 px-8 py-4 text-lg bg-transparent"
          >
            Conoce nuestros servicios
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};