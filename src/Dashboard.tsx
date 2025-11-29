import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  LayoutDashboard,
  Calendar as CalendarIcon,
  Users,
  Scissors,
  Settings,
  BarChart3,
  Clock,
  DollarSign,
  TrendingUp,
  LogOut,
  Menu,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { AppointmentsSection } from "./AppointmentsSection";
import { ClientsSection } from "./ClientsSection";
import { ServicesSection } from "./ServicesSection";
import { ReportsSection } from "./ReportsSection";
import { SettingsSection } from "./SettingsSection";

interface DashboardProps {
  onLogout: () => void;
}

type ServiceType = "Corte Masculino" | "Corte Feminino" | "Hidratação" | "Luzes" | "Escova" | "Barba" | "Manicure" | "Pedicure";

interface Appointment {
  id: number;
  clientName: string;
  service: ServiceType;
  time: string;
  status: "confirmado" | "pendente" | "concluido";
  price: number;
  duration: number;
  avatar?: string;
}

const mockAppointments: Appointment[] = [
  {
    id: 1,
    clientName: "Maria Silva",
    service: "Hidratação",
    time: "09:00",
    status: "concluido",
    price: 120,
    duration: 60,
  },
  {
    id: 2,
    clientName: "João Santos",
    service: "Corte Masculino",
    time: "10:00",
    status: "concluido",
    price: 50,
    duration: 30,
  },
  {
    id: 3,
    clientName: "Ana Costa",
    service: "Luzes",
    time: "11:00",
    status: "confirmado",
    price: 280,
    duration: 120,
  },
  {
    id: 4,
    clientName: "Pedro Oliveira",
    service: "Corte Masculino",
    time: "14:00",
    status: "confirmado",
    price: 50,
    duration: 30,
  },
  {
    id: 5,
    clientName: "Juliana Souza",
    service: "Escova",
    time: "15:00",
    status: "confirmado",
    price: 80,
    duration: 45,
  },
  {
    id: 6,
    clientName: "Carlos Ferreira",
    service: "Barba",
    time: "16:00",
    status: "pendente",
    price: 40,
    duration: 20,
  },
  {
    id: 7,
    clientName: "Beatriz Lima",
    service: "Manicure",
    time: "16:30",
    status: "confirmado",
    price: 45,
    duration: 40,
  },
  {
    id: 8,
    clientName: "Rafael Mendes",
    service: "Corte Masculino",
    time: "17:30",
    status: "confirmado",
    price: 50,
    duration: 30,
  },
];

const upcomingAppointments: Appointment[] = [
  {
    id: 9,
    clientName: "Camila Rocha",
    service: "Corte Feminino",
    time: "Amanhã - 09:00",
    status: "confirmado",
    price: 90,
    duration: 45,
  },
  {
    id: 10,
    clientName: "Lucas Almeida",
    service: "Corte Masculino",
    time: "Amanhã - 10:00",
    status: "confirmado",
    price: 50,
    duration: 30,
  },
  {
    id: 11,
    clientName: "Patricia Nunes",
    service: "Hidratação",
    time: "Amanhã - 14:00",
    status: "pendente",
    price: 120,
    duration: 60,
  },
];

export function Dashboard({ onLogout }: DashboardProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [activeMenu, setActiveMenu] = useState<string>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Dates for calendar modifiers
  const today = new Date();
  const availableDates = [
    new Date(2025, 9, 18), // Oct 18
    new Date(2025, 9, 19), // Oct 19
    new Date(2025, 9, 20), // Oct 20
    new Date(2025, 9, 22), // Oct 22
    new Date(2025, 9, 24), // Oct 24
  ];
  const fullyBookedDates = [
    new Date(2025, 9, 17), // Oct 17 (today)
    new Date(2025, 9, 21), // Oct 21
    new Date(2025, 9, 23), // Oct 23
  ];

  const todayAppointments = mockAppointments.filter(
    (apt) => apt.status === "confirmado" || apt.status === "pendente"
  );
  const completedToday = mockAppointments.filter((apt) => apt.status === "concluido");
  const totalRevenue = mockAppointments
    .filter((apt) => apt.status === "concluido")
    .reduce((sum, apt) => sum + apt.price, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmado":
        return "bg-green-100 text-green-700 border-green-300";
      case "pendente":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "concluido":
        return "bg-blue-100 text-blue-700 border-blue-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "agendamentos", label: "Agendamentos", icon: CalendarIcon },
    { id: "clientes", label: "Clientes", icon: Users },
    { id: "servicos", label: "Serviços", icon: Scissors },
    { id: "relatorios", label: "Relatórios", icon: BarChart3 },
    { id: "configuracoes", label: "Configurações", icon: Settings },
  ];

  return (
    <div className="flex h-full bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-purple-900 to-purple-800 text-white transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-purple-700">
          <div className="flex items-center justify-between">
            {sidebarOpen ? (
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg">
                  <Scissors className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="font-bold">GlowAgenda</h2>
                  <p className="text-xs text-purple-300">Gerenciamento</p>
                </div>
              </div>
            ) : (
              <div className="bg-white p-2 rounded-lg mx-auto">
                <Scissors className="h-6 w-6 text-purple-600" />
              </div>
            )}
          </div>
        </div>

        {/* Toggle Sidebar */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute top-6 -right-3 bg-purple-600 rounded-full p-1 shadow-lg hover:bg-purple-700 transition-colors"
        >
          {sidebarOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeMenu === item.id
                    ? "bg-purple-700 text-white"
                    : "text-purple-200 hover:bg-purple-700/50 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-purple-700">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-purple-200 hover:bg-purple-700/50 hover:text-white transition-colors"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {sidebarOpen && <span>Sair</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-gray-900">
                {activeMenu === "dashboard" && "Dashboard"}
                {activeMenu === "agendamentos" && "Agendamentos"}
                {activeMenu === "clientes" && "Clientes"}
                {activeMenu === "servicos" && "Serviços"}
                {activeMenu === "relatorios" && "Relatórios"}
                {activeMenu === "configuracoes" && "Configurações"}
              </h1>
              <p className="text-gray-500 mt-1">
                Bem-vindo de volta! Aqui está o resumo do seu dia.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Hoje</p>
                <p className="font-semibold text-gray-900">
                  {new Date().toLocaleDateString("pt-BR", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </p>
              </div>
              <Avatar className="h-12 w-12 border-2 border-purple-200">
                <AvatarFallback className="bg-purple-100 text-purple-600">
                  AD
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-6">
          {activeMenu === "dashboard" && (
            <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Clientes Hoje</p>
                  <p className="text-3xl text-gray-900">{mockAppointments.length}</p>
                  <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    +12% vs ontem
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Confirmados</p>
                  <p className="text-3xl text-gray-900">{todayAppointments.length}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {completedToday.length} concluídos
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-xl">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Receita Hoje</p>
                  <p className="text-3xl text-gray-900">R$ {totalRevenue}</p>
                  <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    +8% vs ontem
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-xl">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Próximo Cliente</p>
                  <p className="text-3xl text-gray-900">
                    {todayAppointments[0]?.time || "--:--"}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {todayAppointments[0]?.clientName || "Nenhum agendamento"}
                  </p>
                </div>
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Agendamentos do Dia */}
            <Card className="lg:col-span-2 border-0 shadow-md">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl text-gray-900">Agendamentos de Hoje</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {mockAppointments.length} agendamentos programados
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  {mockAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-purple-100 text-purple-600">
                            {getInitials(appointment.clientName)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900">
                          {appointment.clientName}
                        </p>
                        <p className="text-sm text-gray-500">{appointment.service}</p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <p className="font-semibold text-gray-900">
                          {appointment.time}
                        </p>
                        <p className="text-sm text-gray-500">
                          {appointment.duration} min
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <Badge
                          variant="outline"
                          className={getStatusColor(appointment.status)}
                        >
                          {appointment.status}
                        </Badge>
                      </div>
                      <div className="flex-shrink-0">
                        <p className="font-semibold text-green-600">
                          R$ {appointment.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Calendário */}
            <Card className="border-0 shadow-md">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl text-gray-900">Calendário</h2>
                <p className="text-sm text-gray-500 mt-1">Selecione uma data</p>
              </div>
              <div className="p-6">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  modifiers={{
                    available: availableDates,
                    fullyBooked: fullyBookedDates,
                    today: today,
                  }}
                  modifiersClassNames={{
                    available: "bg-green-100 text-green-900 hover:bg-green-200",
                    fullyBooked: "bg-red-100 text-red-900 hover:bg-red-200",
                    today: "bg-purple-500 text-white hover:bg-purple-600",
                  }}
                />
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Hoje</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Disponível</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Lotado</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Próximos Agendamentos */}
          <Card className="border-0 shadow-md">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl text-gray-900">Próximos Agendamentos</h2>
              <p className="text-sm text-gray-500 mt-1">
                Agendamentos confirmados para os próximos dias
              </p>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Serviço</TableHead>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Duração</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingAppointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">
                              {getInitials(appointment.clientName)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">
                            {appointment.clientName}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{appointment.service}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>{appointment.duration} min</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getStatusColor(appointment.status)}
                        >
                          {appointment.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-semibold text-green-600">
                        R$ {appointment.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>

          {/* Resumo de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Scissors className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Cortes</p>
                  <p className="text-2xl text-gray-900">4</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <Scissors className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Coloração</p>
                  <p className="text-2xl text-gray-900">1</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Scissors className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tratamentos</p>
                  <p className="text-2xl text-gray-900">2</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Scissors className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Outros</p>
                  <p className="text-2xl text-gray-900">1</p>
                </div>
              </div>
            </Card>
          </div>
            </>
          )}

          {activeMenu === "agendamentos" && <AppointmentsSection />}
          {activeMenu === "clientes" && <ClientsSection />}
          {activeMenu === "servicos" && <ServicesSection />}
          {activeMenu === "relatorios" && <ReportsSection />}
          {activeMenu === "configuracoes" && <SettingsSection />}
        </div>
      </main>
    </div>
  );
}
