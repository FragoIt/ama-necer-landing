import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.contact || !formData.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos del formulario.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the form data to your backend
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });

    // Reset form
    setFormData({ name: "", contact: "", message: "" });
  };

  const handleWhatsAppClick = () => {
    const message = `Hola, soy ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/573XXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-cream">
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
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-soft bg-white">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-earth-dark mb-6">
                Envíanos un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-earth font-medium mb-2">
                    Nombre *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Tu nombre completo"
                    className="border-stone/30 focus:border-earth focus:ring-earth"
                  />
                </div>
                
                <div>
                  <label className="block text-earth font-medium mb-2">
                    Email o WhatsApp *
                  </label>
                  <Input
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    placeholder="tu@email.com o +57 300 123 4567"
                    className="border-stone/30 focus:border-earth focus:ring-earth"
                  />
                </div>
                
                <div>
                  <label className="block text-earth font-medium mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Cuéntanos qué servicio te interesa y cualquier pregunta que tengas..."
                    className="border-stone/30 focus:border-earth focus:ring-earth h-32"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit"
                    className="bg-earth hover:bg-earth-dark text-cream flex-1"
                  >
                    Enviar mensaje
                  </Button>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={handleWhatsAppClick}
                    disabled={!formData.name || !formData.message}
                    className="border-forest text-forest hover:bg-forest hover:text-cream flex-1"
                  >
                    Enviar por WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-0 shadow-soft bg-white">
              <CardContent className="p-8">
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
                      <p className="text-earth">+57 XXX XXX XXXX</p>
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
              </CardContent>
            </Card>
            
            {/* Map placeholder */}
            <Card className="border-0 shadow-soft bg-white">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-earth-dark mb-6">
                  Nuestra ubicación
                </h3>
                
                <div className="bg-gradient-nature rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Sopetrán, Antioquia</p>
                    <p className="text-sm opacity-90">Un lugar mágico rodeado de naturaleza</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};