import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FoodCard from '@/components/FoodCard';
import { useIsMobile } from "@/hooks/use-mobile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import data from '../data/stats.json';

const Mapa = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // const donations = [
    // {
    //   id: 1,
    //   title: "Frutas Diversas",
    //   type: "Frutas",
    //   quantity: "10kg",
    //   expirationDate: "01/05/2025",
    //   location: "Mercado Boa Escolha, São Paulo",
    //   distance: "1.2km",
    //   urgent: true,
    // },
    // {
    //   id: 2,
    //   title: "Pães Artesanais",
    //   type: "Padaria",
    //   quantity: "15 unidades",
    //   expirationDate: "28/04/2025",
    //   location: "Padaria Sabor & Arte, São Paulo",
    //   distance: "3.5km",
    // },
    // {
    //   id: 3,
    //   title: "Legumes Orgânicos",
    //   type: "Feira Livre",
    //   quantity: "8kg",
    //   expirationDate: "30/04/2025",
    //   location: "Feira da Praça, São Paulo",
    //   distance: "0.8km",
    // },
    // {
    //   id: 4,
    //   title: "Arroz e Feijão",
    //   type: "Não-perecíveis",
    //   quantity: "20kg",
    //   expirationDate: "31/12/2025",
    //   location: "Mercado do Povo, São Paulo",
    //   distance: "5.1km",
    // },
    // {
    //   id: 5,
    //   title: "Verduras Frescas",
    //   type: "Vegetais",
    //   quantity: "15kg",
    //   expirationDate: "29/04/2025",
    //   location: "Horta Comunitária, São Paulo",
    //   distance: "2.3km",
    //   urgent: true,
    // },
    // {
    //   id: 6,
    //   title: "Laticínios",
    //   type: "Laticínios",
    //   quantity: "5kg",
    //   expirationDate: "30/04/2025",
    //   location: "Mercado Central, São Paulo",
    //   distance: "4.7km",
    // },
  // ];

  const handleSchedule = () => {
    toast({
      title: "Agendamento iniciado",
      description: "Você precisa estar logado para agendar uma retirada.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-cc-green-700 mb-6">
              Mapa de Doações
            </h1>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-medium text-cc-green-700 mb-4">Filtros</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-cc-green-700 mb-1 block">
                        Localização
                      </label>
                      <Input placeholder="Digite seu endereço" className="input-focus" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-cc-green-700 mb-1 block">
                        Distância
                      </label>
                      <Select defaultValue="5">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a distância" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Até 1 km</SelectItem>
                          <SelectItem value="3">Até 3 km</SelectItem>
                          <SelectItem value="5">Até 5 km</SelectItem>
                          <SelectItem value="10">Até 10 km</SelectItem>
                          <SelectItem value="20">Até 20 km</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-cc-green-700 mb-1 block">
                        Tipo de Alimento
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Todos os tipos" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="todos">Todos os tipos</SelectItem>
                          <SelectItem value="frutas">Frutas</SelectItem>
                          <SelectItem value="vegetais">Vegetais</SelectItem>
                          <SelectItem value="nao-pereciveis">Não-perecíveis</SelectItem>
                          <SelectItem value="paes">Pães e massas</SelectItem>
                          <SelectItem value="laticinios">Laticínios</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-cc-green-700 mb-1 block">
                        Data de Validade
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
                    
                    <div className="flex gap-2 pt-2">
                      <Button className="bg-cc-green-600 hover:bg-cc-green-700 flex-1">
                        Aplicar Filtros
                      </Button>
                      <Button variant="outline" className="border-cc-green-500 text-cc-green-700">
                        Limpar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="bg-gray-200 w-full mb-6" style={{ height: '300px' }}>
                  <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-cc-blue-100 to-cc-blue-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">🗺️</div>
                    </div>
                    <div className="absolute bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center">
                      <p className="text-cc-green-700">
                        Visualização do mapa interativo
                      </p>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-cc-green-700 mb-4">
                  Doações Próximas
                </h2>
                
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                  {data.map(data => (
                    <FoodCard 
                      key={data.id}
                      title={data.title}
                      type={data.type}
                      quantity={data.quantity}
                      expirationDate={data.expirationDate}
                      location={data.location}
                      distance={data.distance}
                      urgent={data.urgent}
                      onSchedule={handleSchedule}
                      image={data.image}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mapa;