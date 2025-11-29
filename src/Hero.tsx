import { Button } from "./ui/button";
import { Calendar } from "lucide-react";

interface HeroProps {
  onScheduleClick?: () => void;
}

export function Hero({ onScheduleClick }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBtb2Rlcm58ZW58MXx8fHwxNzYwMTE4NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="px-16 z-10 text-white w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            Seu estilo,<br />nossa paixão
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Agende seus serviços de beleza com facilidade no GlowAgenda. 
            Cortes modernos, tratamentos capilares e muito mais.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={onScheduleClick}
              className="bg-white text-black hover:bg-gray-100"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Agora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Ver Serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
