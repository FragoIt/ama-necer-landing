import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "La ceremonia de cacao fue un antes y un después en mi vida. Sentí una apertura profunda en mi corazón.",
    author: "Laura M."
  },
  {
    text: "La alineación de chakras me devolvió la energía y la motivación que había perdido.",
    author: "Andrés G."
  },
  {
    text: "Un espacio seguro y amoroso donde pude ser yo misma y sanar viejas heridas.",
    author: "Carolina P."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-earth-dark mb-6">
            Voces de transformación
          </h2>
          <p className="text-lg text-earth max-w-2xl mx-auto">
            Historias reales de quienes han vivido la experiencia
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-sacred transition-all duration-300 bg-white relative overflow-hidden">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-gold opacity-60" />
                </div>
                
                {/* Testimonial Text */}
                <p className="text-earth leading-relaxed mb-6 text-lg italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-10 h-0.5 bg-gradient-sacred mr-4"></div>
                  <span className="font-semibold text-earth-dark">
                    {testimonial.author}
                  </span>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-sacred opacity-5 rounded-full transform translate-x-10 -translate-y-10"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-earth-light italic text-lg">
            "Cada experiencia es única, como cada alma que nos visita"
          </p>
        </div>
      </div>
    </section>
  );
};