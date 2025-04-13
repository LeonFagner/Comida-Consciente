import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Check, Store, ShoppingCart, Users } from "lucide-react";
import { useToast } from '@/components/ui/use-toast';

interface AgendamentoProps {
  id: number;
  titulo: string;
  doador: string;
  local: string;
  data: string;
  horario: string;
  status: "pendente" | "confirmado" | "concluido" | "cancelado";
  itens: string[];
}

const StatusBadge: React.FC<{status: AgendamentoProps["status"]}> = ({status}) => {
  switch(status) {
    case "pendente":
      return <Badge className="bg-cc-orange-500">Pendente</Badge>;
    case "confirmado":
      return <Badge className="bg-cc-blue-500">Confirmado</Badge>;
    case "concluido":
      return <Badge className="bg-cc-green-500">Concluído</Badge>;
    case "cancelado":
      return <Badge variant="destructive">Cancelado</Badge>;
    default:
      return null;
  }
};

const Agendamentos = () => {
  const { toast } = useToast();
  
  const agendamentosRecebimento = [
    {
      id: 1,
      titulo: "Doação de Frutas",
      doador: "Mercado Boa Escolha",
      local: "Av. Paulista, 1000, São Paulo",
      data: "30/04/2025",
      horario: "14:00 - 15:00",
      status: "confirmado",
      itens: ["10kg de frutas diversas"]
    },
    {
      id: 2,
      titulo: "Doação de Pães",
      doador: "Padaria Sabor & Arte",
      local: "Rua Augusta, 500, São Paulo",
      data: "28/04/2025",
      horario: "09:00 - 10:00",
      status: "pendente",
      itens: ["15 unidades de pães artesanais"]
    }
  ] as AgendamentoProps[];
  
  const agendamentosDoacao = [
    {
      id: 101,
      titulo: "Retirada de Legumes",
      doador: "Feira da Praça",
      local: "Praça da Liberdade, São Paulo",
      data: "29/04/2025",
      horario: "17:00 - 18:00",
      status: "confirmado",
      itens: ["8kg de legumes orgânicos"]
    },
    {
      id: 102,
      titulo: "Retirada de Laticínios",
      doador: "Sua Empresa",
      local: "Seu endereço de cadastro",
      data: "01/05/2025",
      horario: "10:00 - 11:00",
      status: "pendente",
      itens: ["5kg de laticínios"]
    },
    {
      id: 103,
      titulo: "Retirada de Alimentos",
      doador: "Sua Empresa",
      local: "Seu endereço de cadastro",
      data: "27/04/2025",
      horario: "14:00 - 15:00",
      status: "concluido",
      itens: ["10kg de arroz", "5kg de feijão"]
    }
  ] as AgendamentoProps[];
  
  const handleConfirmar = () => {
    toast({
      title: "Agendamento confirmado",
      description: "O agendamento foi confirmado com sucesso!",
    });
  };
  
  const handleCancelar = () => {
    toast({
      title: "Agendamento cancelado",
      description: "O agendamento foi cancelado.",
      variant: "destructive",
    });
  };
  
  const handleConcluir = () => {
    toast({
      title: "Agendamento concluído",
      description: "Obrigado por contribuir com a redução do desperdício de alimentos!",
    });
  };
  
  const AgendamentoCard: React.FC<{agendamento: AgendamentoProps, tipo: "recebimento" | "doacao"}> = ({agendamento, tipo}) => {
    return (
      <Card className="mb-4">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{agendamento.titulo}</CardTitle>
            <StatusBadge status={agendamento.status} />
          </div>
          <CardDescription>
            ID: #{agendamento.id}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 pb-2">
          <div className="flex items-center gap-2">
            {tipo === "recebimento" ? 
              <Store className="h-4 w-4 text-cc-green-600" /> : 
              <ShoppingCart className="h-4 w-4 text-cc-green-600" />
            }
            <span className="text-cc-green-700">{agendamento.doador}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-cc-blue-500" />
            <span>{agendamento.local}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-cc-orange-500" />
            <span>{agendamento.data}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-cc-orange-500" />
            <span>{agendamento.horario}</span>
          </div>
          <div>
            <p className="font-medium mb-1">Itens:</p>
            <ul className="list-disc list-inside pl-2 text-sm">
              {agendamento.itens.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="pt-2 border-t flex flex-wrap gap-2">
          {agendamento.status === "pendente" && (
            <>
              <Button 
                className="bg-cc-green-600 hover:bg-cc-green-700" 
                size="sm"
                onClick={handleConfirmar}
              >
                <Check className="h-4 w-4 mr-1" /> Confirmar
              </Button>
              <Button 
                variant="outline" 
                className="border-red-500 text-red-500 hover:bg-red-50" 
                size="sm"
                onClick={handleCancelar}
              >
                Cancelar
              </Button>
            </>
          )}
          {agendamento.status === "confirmado" && (
            <>
              <Button 
                className="bg-cc-blue-600 hover:bg-cc-blue-700" 
                size="sm"
                onClick={handleConcluir}
              >
                Marcar como Concluído
              </Button>
              <Button 
                variant="outline" 
                className="border-red-500 text-red-500 hover:bg-red-50" 
                size="sm"
                onClick={handleCancelar}
              >
                Cancelar
              </Button>
            </>
          )}
          {agendamento.status === "concluido" && (
            <span className="text-cc-green-600 flex items-center">
              <Check className="h-4 w-4 mr-1" /> Concluído em {agendamento.data}
            </span>
          )}
        </CardFooter>
      </Card>
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-cc-green-700 mb-6">
            Meus Agendamentos
          </h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Tabs defaultValue="recebimento">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="recebimento" className="text-cc-green-700">
                  <ShoppingCart className="h-4 w-4 mr-2" /> Recebimento
                </TabsTrigger>
                <TabsTrigger value="doacao" className="text-cc-green-700">
                  <Store className="h-4 w-4 mr-2" /> Doação
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="recebimento">
                <div className="mb-4">
                  <h2 className="text-lg font-medium text-cc-green-700 mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Agendamentos para Recebimento
                  </h2>
                  <p className="text-cc-green-600 mb-4">
                    Gerencie suas retiradas de alimentos agendadas.
                  </p>
                  
                  {agendamentosRecebimento.length > 0 ? (
                    agendamentosRecebimento.map(agendamento => (
                      <AgendamentoCard 
                        key={agendamento.id} 
                        agendamento={agendamento} 
                        tipo="recebimento"
                      />
                    ))
                  ) : (
                    <Card className="bg-cc-green-50">
                      <CardContent className="pt-6 flex flex-col items-center text-center">
                        <div className="text-4xl mb-2">📅</div>
                        <p className="text-cc-green-700 mb-2">Você não possui agendamentos de recebimento</p>
                        <Button className="bg-cc-green-600 hover:bg-cc-green-700 mt-2" asChild>
                          <a href="/mapa">Procurar Doações</a>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="doacao">
                <div className="mb-4">
                  <h2 className="text-lg font-medium text-cc-green-700 mb-2 flex items-center gap-2">
                    <Store className="h-5 w-5" />
                    Agendamentos para Doação
                  </h2>
                  <p className="text-cc-green-600 mb-4">
                    Gerencie as doações que você cadastrou.
                  </p>
                  
                  {agendamentosDoacao.length > 0 ? (
                    agendamentosDoacao.map(agendamento => (
                      <AgendamentoCard 
                        key={agendamento.id} 
                        agendamento={agendamento} 
                        tipo="doacao"
                      />
                    ))
                  ) : (
                    <Card className="bg-cc-green-50">
                      <CardContent className="pt-6 flex flex-col items-center text-center">
                        <div className="text-4xl mb-2">🍎</div>
                        <p className="text-cc-green-700 mb-2">Você não possui agendamentos de doação</p>
                        <Button className="bg-cc-green-600 hover:bg-cc-green-700 mt-2" asChild>
                          <a href="/doar">Cadastrar Doação</a>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Agendamentos;