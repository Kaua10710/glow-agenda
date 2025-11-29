import { Button } from "./ui/button";
import { Calendar, Phone } from "lucide-react";

interface CTAProps {
  onScheduleClick?: () => void;
}

export function CTA({ onScheduleClick }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="px-16 text-center">
        <h2 className="text-4xl md:text-5xl mb-6 text-white">
          Pronto para transformar seu visual?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Agende agora mesmo e garanta seu horário com nossos profissionais
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            onClick={onScheduleClick}
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Online
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            <Phone className="mr-2 h-5 w-5" />
            Ligar Agora
          </Button>
        </div>
      </div>
    </section>
  );
}
