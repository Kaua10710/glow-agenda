import { Card } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    service: "Corte e Coloração",
    text: "Simplesmente amei o resultado! A equipe é super atenciosa e o agendamento online facilita muito a vida. Recomendo!",
    rating: 5
  },
  {
    name: "João Santos",
    service: "Corte Masculino",
    text: "Melhor barbearia que já fui. Profissionais muito competentes e o ambiente é top. O sistema de agendamento é perfeito.",
    rating: 5
  },
  {
    name: "Ana Costa",
    service: "Tratamento Capilar",
    text: "Meu cabelo estava muito danificado e depois do tratamento ficou incrível! Atendimento excepcional do início ao fim.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">O que dizem nossos clientes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Histórias reais de transformação e satisfação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="mb-1">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.service}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
