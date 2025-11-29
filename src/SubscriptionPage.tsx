import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Scissors, Check, ArrowLeft, CreditCard, User, Mail, Phone, MapPin, Calendar as CalendarIcon, Lock } from "lucide-react";
import { useForm } from "react-hook-form@7.55.0";

interface SubscriptionFormData {
  // Dados Pessoais
  fullName: string;
  email: string;
  phone: string;
  cpf: string;
  birthDate: string;
  
  // Endereço
  zipCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  
  // Pagamento
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

const planFeatures = [
  "Agendamento prioritário",
  "10% de desconto em todos os serviços",
  "Acesso a horários exclusivos",
  "Cancelamento gratuito até 2h antes",
  "Pontos de fidelidade",
  "Brinde de aniversário"
];

interface SubscriptionPageProps {
  onBack: () => void;
}

export function SubscriptionPage({ onBack }: SubscriptionPageProps) {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm<SubscriptionFormData>();

  const onSubmit = (data: SubscriptionFormData) => {
    console.log("Dados do formulário:", data);
    // Aqui você processaria o pagamento e criaria a assinatura
    alert("Assinatura realizada com sucesso!");
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="h-full bg-gray-50 overflow-auto">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-16 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-2 rounded-lg">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                GlowAgenda
              </span>
            </div>
            <Button variant="ghost" onClick={onBack}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-16 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4">Assine o GlowAgenda Premium</h1>
            <p className="text-xl text-gray-600">
              Tenha acesso a benefícios exclusivos e transforme sua experiência de beleza
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Plan Card */}
            <div className="lg:col-span-1">
              <Card className="p-8 sticky top-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full mb-4">
                    Plano Premium
                  </div>
                  <div className="mb-2">
                    <span className="text-5xl">
                      {formatCurrency(49.90)}
                    </span>
                  </div>
                  <p className="text-gray-600">por mês</p>
                </div>

                <div className="space-y-4 mb-8">
                  {planFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-1 rounded-full flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    Cancele quando quiser, sem taxa de cancelamento
                  </p>
                </div>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Card className="p-8">
                  {/* Progress Steps */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center gap-2 ${step >= 1 ? 'text-purple-600' : 'text-gray-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                          1
                        </div>
                        <span>Dados Pessoais</span>
                      </div>
                      <div className="w-12 h-0.5 bg-gray-200" />
                      <div className={`flex items-center gap-2 ${step >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                          2
                        </div>
                        <span>Endereço</span>
                      </div>
                      <div className="w-12 h-0.5 bg-gray-200" />
                      <div className={`flex items-center gap-2 ${step >= 3 ? 'text-purple-600' : 'text-gray-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
                          3
                        </div>
                        <span>Pagamento</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 1: Personal Data */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-6">
                        <User className="h-5 w-5 text-purple-600" />
                        <h2 className="text-2xl text-purple-600">Dados Pessoais</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <Label htmlFor="fullName">Nome Completo *</Label>
                          <Input
                            id="fullName"
                            placeholder="Seu nome completo"
                            {...register("fullName", { required: "Nome é obrigatório" })}
                            className={errors.fullName ? "border-red-500" : ""}
                          />
                          {errors.fullName && (
                            <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="email">E-mail *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              placeholder="seu@email.com"
                              className="pl-10"
                              {...register("email", { 
                                required: "E-mail é obrigatório",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "E-mail inválido"
                                }
                              })}
                            />
                          </div>
                          {errors.email && (
                            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="phone">Telefone *</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="phone"
                              placeholder="(11) 99999-9999"
                              className="pl-10"
                              {...register("phone", { required: "Telefone é obrigatório" })}
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="cpf">CPF *</Label>
                          <Input
                            id="cpf"
                            placeholder="000.000.000-00"
                            {...register("cpf", { required: "CPF é obrigatório" })}
                          />
                          {errors.cpf && (
                            <p className="text-sm text-red-500 mt-1">{errors.cpf.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="birthDate">Data de Nascimento *</Label>
                          <div className="relative">
                            <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="birthDate"
                              type="date"
                              className="pl-10"
                              {...register("birthDate", { required: "Data de nascimento é obrigatória" })}
                            />
                          </div>
                          {errors.birthDate && (
                            <p className="text-sm text-red-500 mt-1">{errors.birthDate.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-end pt-4">
                        <Button
                          type="button"
                          onClick={() => setStep(2)}
                          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                        >
                          Próximo
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Address */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-6">
                        <MapPin className="h-5 w-5 text-purple-600" />
                        <h2 className="text-2xl text-purple-600">Endereço</h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="zipCode">CEP *</Label>
                          <Input
                            id="zipCode"
                            placeholder="00000-000"
                            {...register("zipCode", { required: "CEP é obrigatório" })}
                          />
                          {errors.zipCode && (
                            <p className="text-sm text-red-500 mt-1">{errors.zipCode.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="street">Rua *</Label>
                          <Input
                            id="street"
                            placeholder="Nome da rua"
                            {...register("street", { required: "Rua é obrigatória" })}
                          />
                          {errors.street && (
                            <p className="text-sm text-red-500 mt-1">{errors.street.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="number">Número *</Label>
                          <Input
                            id="number"
                            placeholder="123"
                            {...register("number", { required: "Número é obrigatório" })}
                          />
                          {errors.number && (
                            <p className="text-sm text-red-500 mt-1">{errors.number.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="complement">Complemento</Label>
                          <Input
                            id="complement"
                            placeholder="Apto, bloco, etc"
                            {...register("complement")}
                          />
                        </div>

                        <div>
                          <Label htmlFor="neighborhood">Bairro *</Label>
                          <Input
                            id="neighborhood"
                            placeholder="Nome do bairro"
                            {...register("neighborhood", { required: "Bairro é obrigatório" })}
                          />
                          {errors.neighborhood && (
                            <p className="text-sm text-red-500 mt-1">{errors.neighborhood.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="city">Cidade *</Label>
                          <Input
                            id="city"
                            placeholder="Nome da cidade"
                            {...register("city", { required: "Cidade é obrigatória" })}
                          />
                          {errors.city && (
                            <p className="text-sm text-red-500 mt-1">{errors.city.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="state">Estado *</Label>
                          <Input
                            id="state"
                            placeholder="UF"
                            maxLength={2}
                            {...register("state", { required: "Estado é obrigatório" })}
                          />
                          {errors.state && (
                            <p className="text-sm text-red-500 mt-1">{errors.state.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep(1)}
                        >
                          Voltar
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setStep(3)}
                          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                        >
                          Próximo
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Payment */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-6">
                        <CreditCard className="h-5 w-5 text-purple-600" />
                        <h2 className="text-2xl text-purple-600">Dados de Pagamento</h2>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-700">Total mensal</p>
                            <p className="text-3xl text-purple-600">{formatCurrency(49.90)}</p>
                          </div>
                          <Lock className="h-8 w-8 text-purple-600" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <Label htmlFor="cardNumber">Número do Cartão *</Label>
                          <div className="relative">
                            <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="cardNumber"
                              placeholder="0000 0000 0000 0000"
                              className="pl-10"
                              maxLength={19}
                              {...register("cardNumber", { required: "Número do cartão é obrigatório" })}
                            />
                          </div>
                          {errors.cardNumber && (
                            <p className="text-sm text-red-500 mt-1">{errors.cardNumber.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="cardName">Nome no Cartão *</Label>
                          <Input
                            id="cardName"
                            placeholder="Como está escrito no cartão"
                            {...register("cardName", { required: "Nome no cartão é obrigatório" })}
                          />
                          {errors.cardName && (
                            <p className="text-sm text-red-500 mt-1">{errors.cardName.message}</p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="expiryDate">Validade *</Label>
                            <Input
                              id="expiryDate"
                              placeholder="MM/AA"
                              maxLength={5}
                              {...register("expiryDate", { required: "Validade é obrigatória" })}
                            />
                            {errors.expiryDate && (
                              <p className="text-sm text-red-500 mt-1">{errors.expiryDate.message}</p>
                            )}
                          </div>

                          <div>
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              placeholder="000"
                              maxLength={4}
                              type="password"
                              {...register("cvv", { required: "CVV é obrigatório" })}
                            />
                            {errors.cvv && (
                              <p className="text-sm text-red-500 mt-1">{errors.cvv.message}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Lock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-blue-900">
                              Seus dados estão seguros. Utilizamos criptografia de ponta para proteger suas informações.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep(2)}
                        >
                          Voltar
                        </Button>
                        <Button
                          type="submit"
                          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                        >
                          Confirmar Assinatura
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
