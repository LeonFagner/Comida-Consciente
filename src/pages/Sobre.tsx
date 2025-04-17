import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import StatsSection from '@/components/StatsSection';
import frutas from '../../public/images/img-verdurasFrescas.jpg';

const Sobre = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 bg-cc-green-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-cc-green-700 mb-6 text-center">
              Sobre o Comida Consciente
            </h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-cc-green-600 mb-6">
                Conectando quem tem com quem precisa, reduzindo o desperdício de alimentos e 
                promovendo a solidariedade social.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-2 gap-16'} items-center`}>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-cc-green-700 mb-4">
                  Nossa Missão
                </h2>
                <p className="text-cc-green-600 mb-4">
                  O Comida Consciente nasceu da necessidade de criar uma ponte entre o 
                  desperdício de alimentos por um lado e a insegurança alimentar por outro.
                </p>
                <p className="text-cc-green-600 mb-4">
                  Nossa missão é reduzir o desperdício de alimentos, conectando estabelecimentos 
                  que têm excedentes com organizações e indivíduos que podem utilizá-los, 
                  criando um ciclo virtuoso de solidariedade e conscientização.
                </p>
                <p className="text-cc-green-600">
                  Acreditamos que a tecnologia pode ser uma poderosa aliada para resolver 
                  problemas sociais e ambientais, e é isso que buscamos com nossa plataforma colaborativa.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="aspect-square rounded-lg flex items-center justify-center">
                    <img className="rounded-3xl" src={frutas} alt="img-frutas" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                    <div className="text-4xl">♻️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <StatsSection />
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-cc-green-700 mb-8 text-center">
              Como Participar
            </h2>
            
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-cc-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">🏪</div>
                </div>
                <h3 className="text-xl font-bold text-cc-green-700 mb-2">
                  Estabelecimentos
                </h3>
                <p className="text-cc-green-600 mb-4">
                  Supermercados, restaurantes, padarias, feiras e produtores podem 
                  cadastrar seus excedentes de alimentos para doação.
                </p>
                <Button className="bg-cc-green-600 hover:bg-cc-green-700">
                  Cadastrar Estabelecimento
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-cc-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">🤝</div>
                </div>
                <h3 className="text-xl font-bold text-cc-green-700 mb-2">
                  ONGs e Instituições
                </h3>
                <p className="text-cc-green-600 mb-4">
                  Organizações sociais, cozinhas comunitárias e instituições de assistência 
                  podem encontrar e agendar retiradas de doações.
                </p>
                <Button className="bg-cc-green-600 hover:bg-cc-green-700">
                  Cadastrar Instituição
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-cc-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">🙋</div>
                </div>
                <h3 className="text-xl font-bold text-cc-green-700 mb-2">
                  Voluntários
                </h3>
                <p className="text-cc-green-600 mb-4">
                  Pessoas que desejam contribuir podem se cadastrar como voluntárias 
                  para ajudar na logística de retirada e entrega de alimentos.
                </p>
                <Button className="bg-cc-green-600 hover:bg-cc-green-700">
                  Seja Voluntário
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-cc-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-cc-green-700 mb-6">
              Junte-se a nós
            </h2>
            <p className="text-lg text-cc-green-600 mb-8 max-w-2xl mx-auto">
              Seja parte dessa iniciativa e ajude a transformar a forma como lidamos 
              com os alimentos em nossa sociedade.
            </p>
            <Button size="lg" className="bg-cc-green-600 hover:bg-cc-green-700">
              Cadastre-se Agora
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sobre;