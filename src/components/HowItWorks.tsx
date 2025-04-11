import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import imgAlimentos from '../assets/images/img-alimentos-1.jpg';
import imgAgenda from '../assets/images/img-calendario-1.jpg';
import imgMapa from '../assets/images/img-mapa-1.jpg';
import imgRanking from '../assets/images/img-ranking.jpg';


interface StepProps {
  number: number;
  title: string;
  description: string;
  img: React.ReactElement<HTMLImageElement>;
}

const Step  = ({ number, title, description, img }: StepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16  flex items-center justify-center mb-4">
        {img}
      </div>
      <div className="bg-cc-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 font-bold text-lg">
        {number}
      </div>
      <h3 className="text-xl font-bold text-cc-green-700 mb-2">{title}</h3>
      <p className="text-cc-green-600">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
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
            img={<img src={imgAlimentos} alt="Logo" className='rounded-full' />}
          />
          <Step 
            number={2}
            title="Localize no mapa"
            description="ONGs e beneficiários encontram alimentos disponíveis próximos"
            img={<img src={imgMapa} alt="Logo" className='rounded-full'/>}
          />
          <Step 
            number={3}
            title="Agende a retirada"
            description="Faça a reserva e agende a retirada para uma data e horário conveniente"
            img={<img src={imgAgenda} alt="Logo" className='rounded-full' />}
          />
          <Step 
            number={4}
            title="Contribua e receba"
            description="Estabelecimentos ganham pontos e reconhecimento, beneficiários recebem os alimentos"
            img={<img src={imgRanking} alt="Logo" className='rounded-full' />}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;