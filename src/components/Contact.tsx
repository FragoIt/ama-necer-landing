import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    const message = "Hola, me interesa conocer más sobre sus servicios";
    const whatsappUrl = `https://wa.me/573006514386?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:amanecermamboreta@gmail.com?subject=${encodeURIComponent("Contacto desde la web")}`;
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-green-50 to-white text-center">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-dark mb-6">
            Conecta con nosotros
          </h2>
          <p className="text-lg text-earth max-w-2xl mx-auto">
            Estamos aquí para acompañarte en tu proceso de transformación
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-0 shadow-soft bg-white">
              <CardContent className="p-8 text-left">
                <h3 className="font-serif text-2xl font-semibold text-earth-dark mb-6">
                  Información de contacto
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-earth-light mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-earth-dark">Ubicación</p>
                      <p className="text-earth">Sopetrán, Antioquia, Colombia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-earth-light mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-earth-dark">WhatsApp</p>
                      <p className="text-earth">+57 300 651 4386</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-earth-light mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-earth-dark">Email</p>
                      <p className="text-earth">amanecermamboreta@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-earth-light mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-earth-dark">Horario</p>
                      <p className="text-earth">Solo con cita previa</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button onClick={handleWhatsApp} className="bg-earth hover:bg-earth-dark text-cream flex-1">
                    Contactar por WhatsApp
                  </Button>
                  <Button variant="outline" onClick={handleEmail} className="flex-1">
                    Enviar email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map card kept below if needed on mobile */}
            <Card className="border-0 shadow-soft bg-white">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-earth-dark mb-6">
                  Nuestra ubicación
                </h3>

                <div className="rounded-lg overflow-hidden h-[350px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26664.585998985352!2d-75.84605976221525!3d6.557668342150933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e45b6178773f595%3A0xd7ed128a0342e322!2sSanta%20F%C3%A9%20de%20Antioquia%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1758234311617!5m2!1ses!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Empty right column removed (map is included above) */}
        </div>
      </div>
    </section>
  );
};