import { Clock, CreditCard, UserCheck, Award } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Agendamento Fácil",
    description: "Agende seus horários 24/7 de forma rápida e prática pelo nosso sistema online."
  },
  {
    icon: UserCheck,
    title: "Profissionais Qualificados",
    description: "Equipe experiente e certificada para garantir o melhor resultado."
  },
  {
    icon: Award,
    title: "Produtos Premium",
    description: "Utilizamos apenas produtos de alta qualidade das melhores marcas."
  },
  {
    icon: CreditCard,
    title: "Pagamento Flexível",
    description: "Aceita todas as formas de pagamento para sua comodidade."
  }
];

export function Benefits() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      <div className="px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Por que escolher o GlowAgenda?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Mais do que um salão, uma experiência completa de beleza e bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <benefit.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-white">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
