
import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const SimpleMap: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-gray-200 w-full" style={{ height: isMobile ? '300px' : '400px' }}>
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-cc-blue-100 to-cc-blue-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl">🗺️</div>
        </div>
        <div className="absolute bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-md text-center">
          <h3 className="text-xl font-bold text-cc-green-700 mb-2">Mapa Interativo</h3>
          <p className="text-cc-green-600 mb-4">
            Visualize doações disponíveis e encontre pontos de retirada próximos a você.
          </p>
          <Link to="/mapa">
            <Button className="bg-cc-green-600 hover:bg-cc-green-700">
              Explorar Mapa
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimpleMap;