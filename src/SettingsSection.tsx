import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Store,
  User,
  Bell,
  Lock,
  CreditCard,
  Clock,
  Save,
} from "lucide-react";

export function SettingsSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl text-gray-900">Configurações</h1>
        <p className="text-gray-500 mt-1">Gerencie as configurações do seu salão</p>
      </div>

      <Tabs defaultValue="salon" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="salon">
            <Store className="h-4 w-4 mr-2" />
            Salão
          </TabsTrigger>
          <TabsTrigger value="profile">
            <User className="h-4 w-4 mr-2" />
            Perfil
          </TabsTrigger>
          <TabsTrigger value="hours">
            <Clock className="h-4 w-4 mr-2" />
            Horários
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notificações
          </TabsTrigger>
          <TabsTrigger value="security">
            <Lock className="h-4 w-4 mr-2" />
            Segurança
          </TabsTrigger>
        </TabsList>

        {/* Salon Settings */}
        <TabsContent value="salon" className="space-y-6">
          <Card className="p-6 border-0 shadow-md">
            <h3 className="text-xl text-gray-900 mb-6">Informações do Salão</h3>
            <div className="space-y-6">
              <div>
                <Label>Nome do Salão</Label>
                <Input defaultValue="GlowAgenda Beleza & Estilo" className="mt-2" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Telefone</Label>
                  <Input defaultValue="(11) 3456-7890" className="mt-2" />
                </div>
                <div>
                  <Label>E-mail</Label>
                  <Input defaultValue="contato@glowagenda.com.br" className="mt-2" />
                </div>
              </div>

              <div>
                <Label>Endereço Completo</Label>
                <Input defaultValue="Rua das Flores, 123 - Centro" className="mt-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Cidade</Label>
                  <Input defaultValue="São Paulo" className="mt-2" />
                </div>
                <div>
                  <Label>Estado</Label>
                  <Input defaultValue="SP" className="mt-2" />
                </div>
                <div>
                  <Label>CEP</Label>
                  <Input defaultValue="01234-567" className="mt-2" />
                </div>
              </div>

              <div>
                <Label>Descrição do Salão</Label>
                <Textarea
                  defaultValue="Salão de beleza completo com profissionais especializados em cortes, coloração, tratamentos e cuidados com as unhas."
                  className="mt-2"
                  rows={4}
                />
              </div>

              <Separator />

              <div>
                <Label>Logo do Salão</Label>
                <div className="mt-2 flex items-center gap-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <Store className="h-12 w-12 text-purple-600" />
                  </div>
                  <Button variant="outline">Alterar Logo</Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="p-6 border-0 shadow-md">
            <h3 className="text-xl text-gray-900 mb-6">Informações Pessoais</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-purple-600" />
                </div>
                <div>
                  <Button variant="outline">Alterar Foto</Button>
                  <p className="text-sm text-gray-500 mt-2">JPG, PNG ou GIF. Máx. 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Nome</Label>
                  <Input defaultValue="Amanda" className="mt-2" />
                </div>
                <div>
                  <Label>Sobrenome</Label>
                  <Input defaultValue="Silva" className="mt-2" />
                </div>
              </div>

              <div>
                <Label>E-mail</Label>
                <Input defaultValue="amanda@glowagenda.com.br" className="mt-2" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Telefone</Label>
                  <Input defaultValue="(11) 98765-4321" className="mt-2" />
                </div>
                <div>
                  <Label>CPF</Label>
                  <Input defaultValue="123.456.789-00" className="mt-2" disabled />
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Hours Settings */}
        <TabsContent value="hours" className="space-y-6">
          <Card className="p-6 border-0 shadow-md">
            <h3 className="text-xl text-gray-900 mb-6">Horário de Funcionamento</h3>
            <div className="space-y-4">
              {[
                { day: "Segunda-feira", open: "09:00", close: "19:00" },
                { day: "Terça-feira", open: "09:00", close: "19:00" },
                { day: "Quarta-feira", open: "09:00", close: "19:00" },
                { day: "Quinta-feira", open: "09:00", close: "19:00" },
                { day: "Sexta-feira", open: "09:00", close: "19:00" },
                { day: "Sábado", open: "09:00", close: "17:00" },
                { day: "Domingo", open: "Fechado", close: "Fechado" },
              ].map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4 flex-1">
                    <Switch defaultChecked={schedule.open !== "Fechado"} />
                    <span className="font-medium w-32">{schedule.day}</span>
                  </div>
                  {schedule.open !== "Fechado" ? (
                    <div className="flex items-center gap-4">
                      <div>
                        <Label className="text-xs">Abertura</Label>
                        <Input type="time" defaultValue={schedule.open} className="mt-1 w-32" />
                      </div>
                      <span className="mt-6">até</span>
                      <div>
                        <Label className="text-xs">Fechamento</Label>
                        <Input type="time" defaultValue={schedule.close} className="mt-1 w-32" />
                      </div>
                    </div>
                  ) : (
                    <span className="text-gray-500">Fechado</span>
                  )}
                </div>
              ))}

              <Separator className="my-6" />

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Intervalo de Agendamento</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Intervalo entre horários</Label>
                    <Input defaultValue="15" type="number" className="mt-2" />
                    <p className="text-xs text-gray-500 mt-1">Minutos entre cada horário disponível</p>
                  </div>
                  <div>
                    <Label>Tempo de intervalo</Label>
                    <Input defaultValue="10" type="number" className="mt-2" />
                    <p className="text-xs text-gray-500 mt-1">Minutos de pausa entre atendimentos</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Horários
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="p-6 border-0 shadow-md">
            <h3 className="text-xl text-gray-900 mb-6">Preferências de Notificação</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Notificações por E-mail</h4>
                <div className="space-y-4">
                  {[
                    { label: "Novos agendamentos", desc: "Receba e-mail quando um novo agendamento for criado" },
                    { label: "Cancelamentos", desc: "Notificação quando um agendamento for cancelado" },
                    { label: "Lembrete de agendamentos", desc: "Lembrete 1 hora antes do atendimento" },
                    { label: "Relatório semanal", desc: "Resumo de desempenho toda segunda-feira" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Notificações Push</h4>
                <div className="space-y-4">
                  {[
                    { label: "Agendamentos urgentes", desc: "Alerta para agendamentos próximos" },
                    { label: "Mensagens de clientes", desc: "Quando um cliente enviar mensagem" },
                    { label: "Lembretes diários", desc: "Resumo de agendamentos do dia pela manhã" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.label}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Preferências
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card className="p-6 border-0 shadow-md">
            <h3 className="text-xl text-gray-900 mb-6">Segurança da Conta</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Alterar Senha</h4>
                <div className="space-y-4 max-w-md">
                  <div>
                    <Label>Senha Atual</Label>
                    <Input type="password" className="mt-2" />
                  </div>
                  <div>
                    <Label>Nova Senha</Label>
                    <Input type="password" className="mt-2" />
                  </div>
                  <div>
                    <Label>Confirmar Nova Senha</Label>
                    <Input type="password" className="mt-2" />
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
                    Atualizar Senha
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Autenticação em Dois Fatores</h4>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg max-w-2xl">
                  <div>
                    <p className="font-medium text-gray-900">Ativar autenticação em dois fatores</p>
                    <p className="text-sm text-gray-500">Adicione uma camada extra de segurança à sua conta</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Sessões Ativas</h4>
                <div className="space-y-3">
                  {[
                    { device: "Chrome - Windows", location: "São Paulo, BR", current: true },
                    { device: "Safari - iPhone", location: "São Paulo, BR", current: false },
                  ].map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">
                          {session.device}
                          {session.current && (
                            <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                              Sessão Atual
                            </span>
                          )}
                        </p>
                        <p className="text-sm text-gray-500">{session.location}</p>
                      </div>
                      {!session.current && (
                        <Button variant="outline" size="sm">
                          Encerrar
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
