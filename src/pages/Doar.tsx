import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Doar = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Doação cadastrada",
      description: "Sua doação foi cadastrada com sucesso!",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-cc-green-700 mb-6">
              Cadastrar Doação de Alimentos
            </h1>
            
            <Card>
              <CardHeader>
                <CardTitle>Detalhes da Doação</CardTitle>
                <CardDescription>
                  Preencha as informações abaixo para cadastrar alimentos para doação.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-cc-green-700 mb-1 block">
                        Nome do Item *
                      </label>
                      <Input required placeholder="Ex: Frutas Diversas, Arroz, Leite" className="input-focus" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-cc-green-700 mb-1 block">
                          Categoria *
                        </label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma categoria" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="frutas">Frutas</SelectItem>
                            <SelectItem value="vegetais">Vegetais</SelectItem>
                            <SelectItem value="nao-pereciveis">Não-perecíveis</SelectItem>
                            <SelectItem value="paes">Pães e massas</SelectItem>
                            <SelectItem value="laticinios">Laticínios</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-cc-green-700 mb-1 block">
                          Quantidade *
                        </label>
                        <div className="flex space-x-2">
                          <Input required placeholder="Ex: 10" className="input-focus" />
                          <Select defaultValue="kg">
                            <SelectTrigger className="w-[100px]">
                              <SelectValue placeholder="Unidade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kg">kg</SelectItem>
                              <SelectItem value="g">g</SelectItem>
                              <SelectItem value="l">litros</SelectItem>
                              <SelectItem value="unidades">unidades</SelectItem>
                              <SelectItem value="caixas">caixas</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-cc-green-700 mb-1 block">
                        Data de Validade *
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal input-focus"
                          >
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>Selecionar data</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <div className="p-4 bg-white">
                            <p className="text-center text-sm">Componente de calendário aqui</p>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-cc-green-700 mb-1 block">
                        Endereço de Retirada *
                      </label>
                      <Input required placeholder="Digite o endereço completo" className="input-focus" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-cc-green-700 mb-1 block">
                          Horários de Retirada Disponíveis *
                        </label>
                        <Input required placeholder="Ex: Segunda a Sexta, 9h às 18h" className="input-focus" />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium text-cc-green-700 mb-1 block">
                          Contato *
                        </label>
                        <Input required placeholder="Telefone ou email" className="input-focus" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-cc-green-700 mb-1 block">
                        Observações
                      </label>
                      <Textarea placeholder="Informações adicionais sobre a doação" className="input-focus" />
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" id="urgent" className="h-4 w-4 rounded border-gray-300 text-cc-green-600 focus:ring-cc-green-500" />
                      <label htmlFor="urgent" className="ml-2 block text-cc-green-700">
                        Marcar como urgente (validade próxima)
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-cc-green-600 hover:bg-cc-green-700"
                    >
                      Cadastrar Doação
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="bg-cc-green-50 text-sm text-cc-green-700">
                <p>
                  Os alimentos cadastrados ficarão disponíveis para visualização no mapa 
                  e poderão ser reservados por instituições e pessoas cadastradas.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Doar;