import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";

interface StatItemProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, icon }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <div className="text-cc-orange-500 mb-2">
        {icon}
      </div>
      <div className="text-3xl font-bold text-cc-green-700 mb-1">{number}</div>
      <div className="text-cc-green-600 text-center">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-cc-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-cc-green-700 mb-12">
          Nosso Impacto
        </h2>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-4'} gap-8`}>
          <StatItem 
            number="5.2t" 
            label="Alimentos salvos do desperdício" 
            icon={<span className="text-4xl">🥦</span>} 
          />
          <StatItem 
            number="143" 
            label="Estabelecimentos parceiros" 
            icon={<span className="text-4xl">🏪</span>} 
          />
          <StatItem 
            number="25+" 
            label="ONGs beneficiadas" 
            icon={<span className="text-4xl">🤝</span>} 
          />
          <StatItem 
            number="1720" 
            label="Famílias atendidas" 
            icon={<span className="text-4xl">👨‍👩‍👧‍👦</span>} 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;