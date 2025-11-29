import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Plus, Search, Mail, Phone, Calendar, DollarSign, TrendingUp, Users } from "lucide-react";

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  totalVisits: number;
  lastVisit: string;
  totalSpent: number;
  status: "ativo" | "inativo";
}

const mockClients: Client[] = [
  { id: 1, name: "Maria Silva", email: "maria@email.com", phone: "(11) 98765-4321", totalVisits: 15, lastVisit: "2025-10-15", totalSpent: 1850, status: "ativo" },
  { id: 2, name: "João Santos", email: "joao@email.com", phone: "(11) 98765-4322", totalVisits: 8, lastVisit: "2025-10-17", totalSpent: 420, status: "ativo" },
  { id: 3, name: "Ana Costa", email: "ana@email.com", phone: "(11) 98765-4323", totalVisits: 22, lastVisit: "2025-10-10", totalSpent: 3200, status: "ativo" },
  { id: 4, name: "Pedro Oliveira", email: "pedro@email.com", phone: "(11) 98765-4324", totalVisits: 12, lastVisit: "2025-10-17", totalSpent: 680, status: "ativo" },
  { id: 5, name: "Juliana Souza", email: "juliana@email.com", phone: "(11) 98765-4325", totalVisits: 18, lastVisit: "2025-10-16", totalSpent: 1560, status: "ativo" },
  { id: 6, name: "Carlos Ferreira", email: "carlos@email.com", phone: "(11) 98765-4326", totalVisits: 5, lastVisit: "2025-09-20", totalSpent: 250, status: "inativo" },
  { id: 7, name: "Beatriz Lima", email: "beatriz@email.com", phone: "(11) 98765-4327", totalVisits: 30, lastVisit: "2025-10-14", totalSpent: 4200, status: "ativo" },
  { id: 8, name: "Rafael Mendes", email: "rafael@email.com", phone: "(11) 98765-4328", totalVisits: 10, lastVisit: "2025-10-12", totalSpent: 550, status: "ativo" },
];

export function ClientsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = mockClients.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.phone.includes(searchQuery)
  );

  const getInitials = (name: string) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  };

  const totalClients = mockClients.length;
  const activeClients = mockClients.filter((c) => c.status === "ativo").length;
  const totalRevenue = mockClients.reduce((sum, c) => sum + c.totalSpent, 0);
  const avgTicket = totalRevenue / mockClients.reduce((sum, c) => sum + c.totalVisits, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl text-gray-900">Clientes</h1>
          <p className="text-gray-500 mt-1">Gerencie sua base de clientes</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
              <Plus className="h-4 w-4 mr-2" />
              Novo Cliente
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Novo Cliente</DialogTitle>
              <DialogDescription>
                Adicione um novo cliente ao sistema
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label>Nome Completo</Label>
                <Input placeholder="Nome do cliente" className="mt-2" />
              </div>
              <div>
                <Label>E-mail</Label>
                <Input type="email" placeholder="email@exemplo.com" className="mt-2" />
              </div>
              <div>
                <Label>Telefone</Label>
                <Input placeholder="(00) 00000-0000" className="mt-2" />
              </div>
              <div>
                <Label>CPF</Label>
                <Input placeholder="000.000.000-00" className="mt-2" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500">
                Adicionar Cliente
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
              <p className="text-sm text-gray-500 mb-1">Total de Clientes</p>
              <p className="text-3xl text-gray-900">{totalClients}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-xl">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Clientes Ativos</p>
              <p className="text-3xl text-gray-900">{activeClients}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-0 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Receita Total</p>
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
              <p className="text-sm text-gray-500 mb-1">Ticket Médio</p>
              <p className="text-3xl text-gray-900">R$ {avgTicket.toFixed(2)}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl">
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Search */}
      <Card className="p-6 border-0 shadow-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar por nome, e-mail ou telefone..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </Card>

      {/* Clients Table */}
      <Card className="border-0 shadow-md">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Total de Visitas</TableHead>
                <TableHead>Última Visita</TableHead>
                <TableHead>Total Gasto</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-purple-100 text-purple-600">
                          {getInitials(client.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{client.name}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="h-3 w-3" />
                        {client.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-3 w-3" />
                        {client.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{client.totalVisits}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-3 w-3" />
                      {new Date(client.lastVisit).toLocaleDateString("pt-BR")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-semibold text-green-600">
                      R$ {client.totalSpent.toLocaleString()}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        client.status === "ativo"
                          ? "bg-green-100 text-green-700 border-green-300"
                          : "bg-gray-100 text-gray-700 border-gray-300"
                      }
                    >
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Ver Perfil</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
