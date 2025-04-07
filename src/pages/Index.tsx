import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import StatsSection from '@/components/StatsSection';
import FoodCard from '@/components/FoodCard';
import SimpleMap from '@/components/SimpleMap';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const Index: React.FC = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const recentDonations = [
    {
      id: 1,
      title: "Frutas Diversas",
      type: "Frutas",
      quantity: "10kg",
      expirationDate: "01/05/2025",
      location: "Mercado Boa Escolha, São Paulo",
      distance: "1.2km",
      urgent: true,
    },
    {
      id: 2,
      title: "Pães Artesanais",
      type: "Padaria",
      quantity: "15 unidades",
      expirationDate: "28/04/2025",
      location: "Padaria Sabor & Arte, São Paulo",
      distance: "3.5km",
    },
    {
      id: 3,
      title: "Legumes Orgânicos",
      type: "Feira Livre",
      quantity: "8kg",
      expirationDate: "30/04/2025",
      location: "Feira da Praça, São Paulo",
      distance: "0.8km",
    },
  ];

  const handleSchedule = () => {
    toast({
      title: "Agendamento iniciado",
      description: "Você precisa estar logado para agendar uma retirada.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <HowItWorks />
        
        <StatsSection />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-cc-green-700">
                Doações Recentes
              </h2>
              <Link to="/mapa">
                <Button variant="outline" className="border-cc-green-500 text-cc-green-600">
                  Ver Todas
                </Button>
              </Link>
            </div>
            
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3'} gap-6`}>
              {recentDonations.map(donation => (
                <FoodCard 
                  key={donation.id}
                  title={donation.title}
                  type={donation.type}
                  quantity={donation.quantity}
                  expirationDate={donation.expirationDate}
                  location={donation.location}
                  distance={donation.distance}
                  urgent={donation.urgent}
                  onSchedule={handleSchedule}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-cc-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-cc-green-700 mb-4">
                Encontre Doações Próximas
              </h2>
              <p className="text-cc-green-600 max-w-2xl mx-auto mb-8">
                Use nosso mapa interativo para encontrar pontos de doação e retirada próximos a você.
              </p>
            </div>
            
            <SimpleMap />
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-cc-green-50 rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-cc-green-700">
                    Faça parte dessa iniciativa
                  </h2>
                  <p className="text-cc-green-600">
                    Cadastre seu estabelecimento, ONG ou se registre como voluntário 
                    e ajude a transformar vidas enquanto combate o desperdício de alimentos.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <Link to="/cadastro">
                    <Button size="lg" className="bg-cc-green-600 hover:bg-cc-green-700">
                      Cadastre-se Agora
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;