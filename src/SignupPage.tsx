import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { UserPlus, ArrowLeft, Mail, Phone, User, Lock, CreditCard } from "lucide-react";
import { useState } from "react";

interface SignupPageProps {
  onBack: () => void;
  onSignup: () => void;
  onLoginRedirect: () => void;
}

export function SignupPage({ onBack, onSignup, onLoginRedirect }: SignupPageProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cpf: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        .replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
        .replace(/(\d{2})(\d{0,5})/, "($1) $2");
    }
    return value;
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        .replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4")
        .replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3")
        .replace(/(\d{3})(\d{0,3})/, "$1.$2");
    }
    return value;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Nome completo é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Telefone inválido";
    }

    if (!formData.cpf.trim()) {
      newErrors.cpf = "CPF é obrigatório";
    } else if (formData.cpf.replace(/\D/g, "").length !== 11) {
      newErrors.cpf = "CPF inválido";
    }

    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter no mínimo 6 caracteres";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirme sua senha";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Você deve aceitar os termos de uso";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Cadastro realizado:", formData);
      onSignup();
    }
  };

  return (
    <div className="h-full relative flex items-center justify-center py-16 overflow-auto">
      {/* Background with Gradient */}
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
      <div className="relative z-10 px-16 w-full max-w-3xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-white hover:text-white hover:bg-white/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        {/* Card Container */}
        <Card className="bg-white/95 backdrop-blur-sm p-12 border-0 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-2xl inline-block mb-4">
              <UserPlus className="h-10 w-10 text-purple-600" />
            </div>
            <h1 className="text-4xl mb-3">Criar Conta Gratuita</h1>
            <p className="text-gray-600 text-lg">
              Preencha seus dados para começar a usar o GlowAgenda
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome Completo */}
            <div>
              <Label htmlFor="fullName" className="text-gray-700 flex items-center gap-2">
                <User className="h-4 w-4" />
                Nome Completo
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Digite seu nome completo"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className={`mt-2 ${errors.fullName ? "border-red-500" : ""}`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* E-mail */}
            <div>
              <Label htmlFor="email" className="text-gray-700 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`mt-2 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Telefone e CPF */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-gray-700 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Telefone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", formatPhone(e.target.value))}
                  className={`mt-2 ${errors.phone ? "border-red-500" : ""}`}
                  maxLength={15}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <Label htmlFor="cpf" className="text-gray-700 flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  CPF
                </Label>
                <Input
                  id="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChange={(e) => handleChange("cpf", formatCPF(e.target.value))}
                  className={`mt-2 ${errors.cpf ? "border-red-500" : ""}`}
                  maxLength={14}
                />
                {errors.cpf && (
                  <p className="text-red-500 text-sm mt-1">{errors.cpf}</p>
                )}
              </div>
            </div>

            {/* Senha e Confirmar Senha */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password" className="text-gray-700 flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className={`mt-2 ${errors.password ? "border-red-500" : ""}`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-gray-700 flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Confirmar Senha
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Digite a senha novamente"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  className={`mt-2 ${errors.confirmPassword ? "border-red-500" : ""}`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* Termos de Uso */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <Checkbox
                id="acceptTerms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => handleChange("acceptTerms", checked as boolean)}
                className={errors.acceptTerms ? "border-red-500" : ""}
              />
              <div className="flex-1">
                <label
                  htmlFor="acceptTerms"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  Eu aceito os{" "}
                  <a href="#" className="text-purple-600 hover:text-purple-700 underline">
                    Termos de Uso
                  </a>{" "}
                  e a{" "}
                  <a href="#" className="text-purple-600 hover:text-purple-700 underline">
                    Política de Privacidade
                  </a>
                </label>
                {errors.acceptTerms && (
                  <p className="text-red-500 text-sm mt-1">{errors.acceptTerms}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-lg py-6 mt-8"
            >
              Criar Conta Gratuita
              <UserPlus className="ml-2 h-5 w-5" />
            </Button>
          </form>

          {/* Login Link */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-3">Já possui uma conta?</p>
            <Button
              type="button"
              variant="outline"
              onClick={onLoginRedirect}
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              Fazer Login
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
