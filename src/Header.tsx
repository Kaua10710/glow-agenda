import { Button } from "./ui/button";
import { Scissors, Menu, X, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onScheduleClick?: () => void;
  onBackToWelcome?: () => void;
}

export function Header({ onScheduleClick, onBackToWelcome }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            {onBackToWelcome && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onBackToWelcome}
                className="hover:bg-purple-50"
              >
                <ArrowLeft className="h-5 w-5 text-purple-600" />
              </Button>
            )}
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-2 rounded-lg">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                GlowAgenda
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="hover:text-purple-600 transition-colors">
              Início
            </a>
            <a href="#servicos" className="hover:text-purple-600 transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-purple-600 transition-colors">
              Sobre
            </a>
            <a href="#depoimentos" className="hover:text-purple-600 transition-colors">
              Depoimentos
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={onScheduleClick}
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
            >
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a
                href="#inicio"
                className="hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#servicos"
                className="hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#sobre"
                className="hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#depoimentos"
                className="hover:text-purple-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Depoimentos
              </a>
              <Button 
                onClick={onScheduleClick}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
              >
                Agendar
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
