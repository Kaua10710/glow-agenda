import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Calendar } from "./ui/calendar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Calendar as CalendarIcon, Plus, Search, Filter, Clock, DollarSign } from "lucide-react";

interface Appointment {
  id: number;
  clientName: string;
  service: string;
  date: string;
  time: string;
  status: "confirmado" | "pendente" | "concluido" | "cancelado";
  price: number;
  duration: number;
  phone: string;
}

const mockAppointments: Appointment[] = [
  { id: 1, clientName: "Maria Silva", service: "Hidratação", date: "2025-10-17", time: "09:00", status: "concluido", price: 120, duration: 60, phone: "(11) 98765-4321" },
  { id: 2, clientName: "João Santos", service: "Corte Masculino", date: "2025-10-17", time: "10:00", status: "concluido", price: 50, duration: 30, phone: "(11) 98765-4322" },
  { id: 3, clientName: "Ana Costa", service: "Luzes", date: "2025-10-17", time: "11:00", status: "confirmado", price: 280, duration: 120, phone: "(11) 98765-4323" },
  { id: 4, clientName: "Pedro Oliveira", service: "Corte Masculino", date: "2025-10-17", time: "14:00", status: "confirmado", price: 50, duration: 30, phone: "(11) 98765-4324" },
  { id: 5, clientName: "Juliana Souza", service: "Escova", date: "2025-10-17", time: "15:00", status: "confirmado", price: 80, duration: 45, phone: "(11) 98765-4325" },
  { id: 6, clientName: "Carlos Ferreira", service: "Barba", date: "2025-10-17", time: "16:00", status: "pendente", price: 40, duration: 20, phone: "(11) 98765-4326" },
  { id: 7, clientName: "Beatriz Lima", service: "Manicure", date: "2025-10-18", time: "09:00", status: "confirmado", price: 45, duration: 40, phone: "(11) 98765-4327" },
  { id: 8, clientName: "Rafael Mendes", service: "Corte Masculino", date: "2025-10-18", time: "10:00", status: "confirmado", price: 50, duration: 30, phone: "(11) 98765-4328" },
  { id: 9, clientName: "Camila Rocha", service: "Corte Feminino", date: "2025-10-19", time: "09:00", status: "confirmado", price: 90, duration: 45, phone: "(11) 98765-4329" },
  { id: 10, clientName: "Lucas Almeida", service: "Coloração", date: "2025-10-19", time: "14:00", status: "pendente", price: 250, duration: 180, phone: "(11) 98765-4330" },
];

export function AppointmentsSection() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmado":
        return "bg-green-100 text-green-700 border-green-300";
      case "pendente":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "concluido":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "cancelado":
        return "bg-red-100 text-red-700 border-red-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getInitials = (name: string) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  };

  const filteredAppointments = mockAppointments.filter((apt) => {
    const matchesSearch = apt.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         apt.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "todos" || apt.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-gray-900">Agendamentos</h1>
          <p className="text-gray-500 mt-1">Gerencie todos os agendamentos do salão</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
              <Plus className="h-4 w-4 mr-2" />
              Novo Agendamento
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Novo Agendamento</DialogTitle>
              <DialogDescription>
                Preencha os dados para criar um novo agendamento
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label>Cliente</Label>
                <Input placeholder="Nome do cliente" className="mt-2" />
              </div>
              <div>
                <Label>Telefone</Label>
                <Input placeholder="(00) 00000-0000" className="mt-2" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Data</Label>
                  <Input type="date" className="mt-2" />
                </div>
                <div>
                  <Label>Horário</Label>
                  <Input type="time" className="mt-2" />
                </div>
              </div>
              <div>
                <Label>Serviço</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecione o serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corte-masculino">Corte Masculino</SelectItem>
                    <SelectItem value="corte-feminino">Corte Feminino</SelectItem>
                    <SelectItem value="hidratacao">Hidratação</SelectItem>
                    <SelectItem value="luzes">Luzes</SelectItem>
                    <SelectItem value="escova">Escova</SelectItem>
                    <SelectItem value="barba">Barba</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500">
                Criar Agendamento
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card className="p-6 border-0 shadow-md">
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar por cliente ou serviço..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[200px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filtrar por status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os Status</SelectItem>
              <SelectItem value="confirmado">Confirmado</SelectItem>
              <SelectItem value="pendente">Pendente</SelectItem>
              <SelectItem value="concluido">Concluído</SelectItem>
              <SelectItem value="cancelado">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Agendamentos */}
        <div className="lg:col-span-2 space-y-4">
          {filteredAppointments.map((appointment) => (
            <Card key={appointment.id} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-purple-100 text-purple-600">
                      {getInitials(appointment.clientName)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{appointment.clientName}</h3>
                        <p className="text-sm text-gray-500">{appointment.phone}</p>
                      </div>
                      <Badge variant="outline" className={getStatusColor(appointment.status)}>
                        {appointment.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CalendarIcon className="h-4 w-4" />
                        {new Date(appointment.date).toLocaleDateString("pt-BR")}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        {appointment.time} ({appointment.duration} min)
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-medium">{appointment.service}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                        <DollarSign className="h-4 w-4" />
                        R$ {appointment.price}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">Editar</Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        Cancelar
                      </Button>
                      {appointment.status === "pendente" && (
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Confirmar
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Calendário */}
        <div>
          <Card className="p-6 border-0 shadow-md sticky top-6">
            <h3 className="font-semibold text-gray-900 mb-4">Calendário</h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
            <div className="mt-6 space-y-3">
              <p className="text-sm text-gray-500 mb-3">Legenda:</p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Dia selecionado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Vagas disponíveis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Agenda lotada</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
