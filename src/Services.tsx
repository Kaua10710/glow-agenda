import { Card } from "./ui/card";
import { Scissors, Sparkles, Wind, Droplet, Star, Palette } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cortes Masculinos",
    description: "Cortes modernos e clássicos com técnicas profissionais para todos os estilos.",
    image: "https://images.unsplash.com/photo-1759408174071-f2971472dc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjAwNTUxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Sparkles,
    title: "Cortes Femininos",
    description: "Transforme seu visual com cortes personalizados e tendências exclusivas.",
    image: "https://images.unsplash.com/photo-1633229032316-e9e88274e3fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhaXJzdHlsaXN0fGVufDF8fHx8MTc2MDEzNjczN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Wind,
    title: "Escova e Chapinha",
    description: "Alisamento perfeito e escova modelada para cabelos impecáveis.",
    image: "https://images.unsplash.com/photo-1712641966879-63f3bc1a47e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc3R5bGluZyUyMHNhbG9ufGVufDF8fHx8MTc2MDA3MzkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Droplet,
    title: "Tratamentos Capilares",
    description: "Hidratação profunda, reconstrução e tratamentos para todos os tipos de cabelo.",
  },
  {
    icon: Palette,
    title: "Coloração",
    description: "Coloração completa, mechas, luzes e tonalizações com produtos de alta qualidade.",
  },
  {
    icon: Star,
    title: "Penteados",
    description: "Penteados para eventos especiais, casamentos e ocasiões importantes.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade completa de serviços de beleza para você se sentir incrível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 bg-white"
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
