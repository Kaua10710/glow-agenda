import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Scissors, ArrowRight, LogIn, Sparkles } from "lucide-react";
import { useState } from "react";

interface WelcomePageProps {
  onExplore: () => void;
  onLogin: () => void;
  onSignup: () => void;
}

export function WelcomePage({ onExplore, onLogin, onSignup }: WelcomePageProps) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você faria a autenticação real
    console.log("Login com:", email, password);
    onLogin();
  };

  return (
    <div className="h-full relative flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwMTQ0OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-pink-800/85 to-purple-900/90" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-16 w-full max-w-7xl mx-auto">
        {/* Logo and Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <Scissors className="h-12 w-12 text-purple-600" />
            </div>
          </div>
          <h1 className="text-6xl mb-4 text-white">
            Bem-vindo ao GlowAgenda
          </h1>
          <p className="text-2xl text-white/90 max-w-2xl mx-auto">
            Sua plataforma completa para agendamento de serviços de beleza
          </p>
        </div>

        {/* Cards Container */}
        {!showLoginForm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* New Customers Card */}
            <Card className="bg-white/95 backdrop-blur-sm p-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl inline-block mb-6">
                  <Sparkles className="h-12 w-12 text-purple-600" />
                </div>
                <h2 className="text-3xl mb-4">Novo por aqui?</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Descubra nossos serviços premium de beleza e bem-estar. 
                  Agende com facilidade e transforme seu visual.
                </p>
                <Button
                  size="lg"
                  onClick={onExplore}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-lg py-6"
                >
                  Conhecer o GlowAgenda
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>

            {/* Existing Customers Card */}
            <Card className="bg-white/95 backdrop-blur-sm p-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl inline-block mb-6">
                  <LogIn className="h-12 w-12 text-purple-600" />
                </div>
                <h2 className="text-3xl mb-4">Já é cliente?</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Acesse sua conta para gerenciar agendamentos, 
                  visualizar histórico e aproveitar seus benefícios.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setShowLoginForm(true)}
                  className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg py-6"
                >
                  Fazer Login
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>
        ) : (
          /* Login Form */
          <div className="max-w-md mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm p-10 border-0 shadow-2xl">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-2xl inline-block mb-4">
                  <LogIn className="h-10 w-10 text-purple-600" />
                </div>
                <h2 className="text-3xl mb-2">Acessar sua conta</h2>
                <p className="text-gray-600">Entre para continuar</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-gray-700">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-700">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    Lembrar-me
                  </label>
                  <a href="#" className="text-purple-600 hover:text-purple-700">
                    Esqueceu a senha?
                  </a>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                >
                  Entrar
                </Button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowLoginForm(false)}
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Voltar
                  </button>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">Ainda não tem uma conta?</p>
                <Button
                  variant="outline"
                  onClick={onSignup}
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Criar conta gratuita
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Footer Info */}
        <div className="text-center mt-16 text-white/80">
          <p className="text-sm">
            Transforme seu visual com os melhores profissionais
          </p>
        </div>
      </div>
    </div>
  );
}
