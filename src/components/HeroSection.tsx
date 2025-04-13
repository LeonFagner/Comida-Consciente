import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Imagem from '/images/bg-comidaVerde.jpg';

const HeroSection = () => {
  return (
    <section className="hero-gradient text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Transforme excedentes em esperança
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Conectando doadores de alimentos com quem mais precisa.
              Reduza o desperdício e faça a diferença na sua comunidade.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/doar">
                <Button size="lg" variant="outline" className="border-white bg-white text-cc-green-700 hover:bg-white/10">
                  Quero Doar
                </Button>
              </Link>
              <Link to="/mapa">
                <Button size="lg" variant="outline" className="border-white text-cc-green-700 hover:bg-white/10">
                  Ver Doações Próximas
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <img src={Imagem}
                   alt="bg"
                   className='w-full h-full object-cover rounded-full shadow-lg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;