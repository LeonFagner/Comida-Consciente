import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-cc-green-100 flex items-center justify-center text-cc-green-700 mb-4">
        {icon}
      </div>
      <div className="bg-cc-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 font-bold text-lg">
        {number}
      </div>
      <h3 className="text-xl font-bold text-cc-green-700 mb-2">{title}</h3>
      <p className="text-cc-green-600">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-cc-green-700 mb-4">
          Como Funciona
        </h2>
        <p className="text-center text-cc-green-600 mb-12 max-w-2xl mx-auto">
          Conectamos quem tem excedentes de alimentos com quem precisa, em um processo simples e eficiente.
        </p>
        
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-12' : 'grid-cols-2 md:grid-cols-4 gap-8'} mb-8`}>
          <Step 
            number={1}
            title="Cadastre alimentos"
            description="Estabelecimentos cadastram seus alimentos excedentes na plataforma"
            icon={<span className="text-3xl">🍎</span>}
          />
          <Step 
            number={2}
            title="Localize no mapa"
            description="ONGs e beneficiários encontram alimentos disponíveis próximos"
            icon={<span className="text-3xl">🗺️</span>}
          />
          <Step 
            number={3}
            title="Agende a retirada"
            description="Faça a reserva e agende a retirada para uma data e horário conveniente"
            icon={<span className="text-3xl">📆</span>}
          />
          <Step 
            number={4}
            title="Contribua e receba"
            description="Estabelecimentos ganham pontos e reconhecimento, beneficiários recebem os alimentos"
            icon={<span className="text-3xl">🏆</span>}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;