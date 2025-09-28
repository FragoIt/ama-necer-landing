import { CheckCircle } from "lucide-react";

const benefits = [
  "Mayor claridad mental y emocional",
  "Liberación de bloqueos energéticos", 
  "Reconexión con la naturaleza y lo sagrado",
  "Sentido renovado de propósito y dirección",
  "Bienestar integral y paz interior"
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 px-6 bg-gradient-nature">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
          Beneficios y transformaciones
        </h2>
        
        <p className="text-xl text-sage mb-12">
          Experimenta cambios profundos que perduran en tu vida diaria
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
            >
              <CheckCircle className="text-gold-light w-6 h-6 flex-shrink-0" />
              <span className="text-white text-lg font-medium text-left">
                {benefit}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-4">
            <span className="text-gold-light font-semibold text-lg">
              ✨ Transformación auténtica y duradera ✨
            </span>
          </div>
        </div>
      </div>
  </section>
  );
};