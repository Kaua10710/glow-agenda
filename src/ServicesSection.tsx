import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Scissors, Plus, Clock, DollarSign, TrendingUp, Package } from "lucide-react";

interface Service {
  id: number;
  name: string;
  category: string;
  duration: number;
  price: number;
  description: string;
  bookingsMonth: number;
  revenue: number;
  status: "ativo" | "inativo";
}

const mockServices: Service[] = [
  { id: 1, name: "Corte Masculino", category: "Cabelo", duration: 30, price: 50, description: "Corte tradicional ou moderno", bookingsMonth: 45, revenue: 2250, status: "ativo" },
  { id: 2, name: "Corte Feminino", category: "Cabelo", duration: 45, price: 90, description: "Corte com lavagem e escova", bookingsMonth: 32, revenue: 2880, status: "ativo" },
  { id: 3, name: "Hidratação", category: "Tratamento", duration: 60, price: 120, description: "Tratamento hidratante profundo", bookingsMonth: 28, revenue: 3360, status: "ativo" },
  { id: 4, name: "Luzes", category: "Coloração", duration: 120, price: 280, description: "Mechas com tonalizante", bookingsMonth: 15, revenue: 4200, status: "ativo" },
  { id: 5, name: "Escova", category: "Cabelo", duration: 45, price: 80, description: "Escova modeladora ou progressiva", bookingsMonth: 38, revenue: 3040, status: "ativo" },
  { id: 6, name: "Barba", category: "Barbearia", duration: 20, price: 40, description: "Aparar e modelar barba", bookingsMonth: 52, revenue: 2080, status: "ativo" },
  { id: 7, name: "Manicure", category: "Unhas", duration: 40, price: 45, description: "Cuidados com as unhas das mãos", bookingsMonth: 65, revenue: 2925, status: "ativo" },
  { id: 8, name: "Pedicure", category: "Unhas", duration: 50, price: 50, description: "Cuidados com as unhas dos pés", bookingsMonth: 58, revenue: 2900, status: "ativo" },
  { id: 9, name: "Coloração Completa", category: "Coloração", duration: 180, price: 350, description: "Tintura completa dos cabelos", bookingsMonth: 12, revenue: 4200, status: "ativo" },
  { id: 10, name: "Alisamento", category: "Tratamento", duration: 150, price: 300, description: "Alisamento definitivo", bookingsMonth: 8, revenue: 2400, status: "inativo" },
];

export function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = ["todos", ...Array.from(new Set(mockServices.map((s) => s.category)))];

  const filteredServices = selectedCategory === "todos"
    ? mockServices
    : mockServices.filter((s) => s.category === selectedCategory);

  const totalServices = mockServices.filter((s) => s.status === "ativo").length;
  const totalBookings = mockServices.reduce((sum, s) => sum + s.bookingsMonth, 0);
  const totalRevenue = mockServices.reduce((sum, s) => sum + s.revenue, 0);
  const avgPrice = mockServices.reduce((sum, s) => sum + s.price, 0) / mockServices.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-gray-900">Serviços</h1>
          <p className="text-gray-500 mt-1">Gerencie todos os serviços oferecidos</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
              <Plus className="h-4 w-4 mr-2" />
              Novo Serviço
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Novo Serviço</DialogTitle>
              <DialogDescription>
                Adicione um novo serviço ao catálogo
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label>Nome do Serviço</Label>
                <Input placeholder="Ex: Corte Masculino" className="mt-2" />
              </div>
              <div>
                <Label>Categoria</Label>
                <Input placeholder="Ex: Cabelo" className="mt-2" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Duração (minutos)</Label>
                  <Input type="number" placeholder="30" className="mt-2" />
                </div>
                <div>
                  <Label>Preço (R$)</Label>
                  <Input type="number" placeholder="50.00" className="mt-2" />
                </div>
              </div>
              <div>
                <Label>Descrição</Label>
                <Textarea placeholder="Descreva o serviço..." className="mt-2" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500">
                Adicionar Serviço
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Serviços Ativos</p>
              <p className="text-3xl text-gray-900">{totalServices}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Package className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Agend. no Mês</p>
              <p className="text-3xl text-gray-900">{totalBookings}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Receita do Mês</p>
              <p className="text-3xl text-gray-900">R$ {totalRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-xl">
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Preço Médio</p>
              <p className="text-3xl text-gray-900">R$ {avgPrice.toFixed(0)}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl">
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Category Filter */}
      <Card className="p-4 border-0 shadow-md">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-500"
                  : ""
              }
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </Card>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Card key={service.id} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-xl">
                <Scissors className="h-6 w-6 text-purple-600" />
              </div>
              <Badge
                variant="outline"
                className={
                  service.status === "ativo"
                    ? "bg-green-100 text-green-700 border-green-300"
                    : "bg-gray-100 text-gray-700 border-gray-300"
                }
              >
                {service.status}
              </Badge>
            </div>

            <h3 className="text-xl text-gray-900 mb-2">{service.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{service.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Categoria:</span>
                <Badge variant="outline">{service.category}</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Duração:
                </span>
                <span className="font-medium">{service.duration} min</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center gap-1">
                  <DollarSign className="h-3 w-3" />
                  Preço:
                </span>
                <span className="font-semibold text-green-600">R$ {service.price}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500">Agendamentos</p>
                  <p className="text-lg font-semibold text-gray-900">{service.bookingsMonth}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Receita</p>
                  <p className="text-lg font-semibold text-green-600">R$ {service.revenue}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">Editar</Button>
                <Button size="sm" variant="outline" className="text-red-600">Excluir</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
