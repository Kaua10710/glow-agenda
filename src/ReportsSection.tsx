import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Download, TrendingUp, DollarSign, Users, Calendar } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 8500, appointments: 85 },
  { month: "Fev", revenue: 9200, appointments: 92 },
  { month: "Mar", revenue: 11000, appointments: 105 },
  { month: "Abr", revenue: 10500, appointments: 98 },
  { month: "Mai", revenue: 12500, appointments: 115 },
  { month: "Jun", revenue: 13200, appointments: 125 },
  { month: "Jul", revenue: 14000, appointments: 132 },
  { month: "Ago", revenue: 15500, appointments: 145 },
  { month: "Set", revenue: 14800, appointments: 138 },
  { month: "Out", revenue: 16200, appointments: 152 },
];

const serviceData = [
  { name: "Corte", value: 35, color: "#8b5cf6" },
  { name: "Coloração", value: 25, color: "#ec4899" },
  { name: "Tratamento", value: 20, color: "#3b82f6" },
  { name: "Unhas", value: 15, color: "#10b981" },
  { name: "Outros", value: 5, color: "#f59e0b" },
];

const topServices = [
  { name: "Corte Masculino", bookings: 52, revenue: 2600 },
  { name: "Manicure", bookings: 65, revenue: 2925 },
  { name: "Hidratação", bookings: 28, revenue: 3360 },
  { name: "Luzes", bookings: 15, revenue: 4200 },
  { name: "Escova", bookings: 38, revenue: 3040 },
];

export function ReportsSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-gray-900">Relatórios</h1>
          <p className="text-gray-500 mt-1">Análise e estatísticas do seu negócio</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="mes">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semana">Esta Semana</SelectItem>
              <SelectItem value="mes">Este Mês</SelectItem>
              <SelectItem value="trimestre">Este Trimestre</SelectItem>
              <SelectItem value="ano">Este Ano</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar PDF
          </Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Receita Total</p>
              <p className="text-3xl text-gray-900">R$ 16.200</p>
              <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                +15% vs mês anterior
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-xl">
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Agendamentos</p>
              <p className="text-3xl text-gray-900">152</p>
              <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                +10% vs mês anterior
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Novos Clientes</p>
              <p className="text-3xl text-gray-900">28</p>
              <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                +22% vs mês anterior
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Ticket Médio</p>
              <p className="text-3xl text-gray-900">R$ 106,58</p>
              <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                +5% vs mês anterior
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl">
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-xl text-gray-900 mb-6">Receita Mensal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                formatter={(value: number) => `R$ ${value.toLocaleString()}`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8b5cf6"
                strokeWidth={2}
                name="Receita"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Services Distribution */}
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-xl text-gray-900 mb-6">Distribuição de Serviços</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={serviceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {serviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Appointments Chart */}
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-xl text-gray-900 mb-6">Agendamentos Mensais</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="appointments" fill="#ec4899" name="Agendamentos" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Services */}
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-xl text-gray-900 mb-6">Serviços Mais Vendidos</h3>
          <div className="space-y-4">
            {topServices.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-lg flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{service.name}</p>
                    <p className="text-sm text-gray-500">{service.bookings} agendamentos</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">R$ {service.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg text-gray-900 mb-4">Taxa de Ocupação</h3>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl text-purple-600">87%</span>
            <span className="text-green-600 mb-2">+5%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full" style={{ width: "87%" }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-3">Média de horários ocupados</p>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg text-gray-900 mb-4">Taxa de Retorno</h3>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl text-purple-600">72%</span>
            <span className="text-green-600 mb-2">+8%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full" style={{ width: "72%" }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-3">Clientes que retornam</p>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <h3 className="text-lg text-gray-900 mb-4">Satisfação</h3>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl text-purple-600">4.8</span>
            <span className="text-gray-500 mb-2">/ 5.0</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full" style={{ width: "96%" }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-3">Avaliação média dos clientes</p>
        </Card>
      </div>
    </div>
  );
}
