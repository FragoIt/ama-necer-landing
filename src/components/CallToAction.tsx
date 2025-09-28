import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola, quiero agendar mi sesión espiritual con Ama Necer Mamboretá";
    const whatsappUrl = `https://wa.me/573006514386?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-sacred overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <div className="mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-dark mb-8 leading-tight">
            Tu viaje hacia el autodescubrimiento 
            <span className="block text-3xl md:text-4xl mt-2 font-normal">
              comienza aquí
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-earth-dark/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Da el primer paso hacia una vida más plena y consciente.
          </p>
        </div>
        
        {/* CTA Button */}
        <Button 
          size="lg"
          onClick={handleWhatsAppClick}
          className="bg-earth hover:bg-earth-dark text-cream shadow-sacred hover:shadow-glow transition-all duration-500 font-semibold px-12 py-6 text-xl"
        >
          Agendar ahora
        </Button>
        
        {/* Supporting Text */}
        <div className="mt-12 space-y-4">
          <p className="text-earth-dark/70 text-lg">
            ✨ Solo con cita previa ✨
          </p>
          <p className="text-earth-dark/60">
            Respuesta inmediata por WhatsApp
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};