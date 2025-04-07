import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";

const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-cc-green-50 py-8 mt-auto border-t border-cc-green-100">
      <div className="container mx-auto px-4">
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-4 gap-8'}`}>
          <div>
            <h3 className="text-lg font-bold text-cc-green-700 mb-4">Comida Consciente</h3>
            <p className="text-cc-green-700 mb-4">
              Conectando quem tem com quem precisa, reduzindo o desperdício de alimentos e promovendo a 
              solidariedade social.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-bold text-cc-green-700 mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-cc-green-600 hover:text-cc-green-800">Início</Link></li>
              <li><Link to="/mapa" className="text-cc-green-600 hover:text-cc-green-800">Mapa</Link></li>
              <li><Link to="/doar" className="text-cc-green-600 hover:text-cc-green-800">Doar Alimentos</Link></li>
              <li><Link to="/agendamentos" className="text-cc-green-600 hover:text-cc-green-800">Agendamentos</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-bold text-cc-green-700 mb-4">Saiba Mais</h4>
            <ul className="space-y-2">
              <li><Link to="/sobre" className="text-cc-green-600 hover:text-cc-green-800">Sobre Nós</Link></li>
              <li><Link to="/parcerias" className="text-cc-green-600 hover:text-cc-green-800">Parcerias</Link></li>
              <li><Link to="/impacto" className="text-cc-green-600 hover:text-cc-green-800">Impacto Social</Link></li>
              <li><Link to="/contato" className="text-cc-green-600 hover:text-cc-green-800">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-bold text-cc-green-700 mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-cc-green-600">contato@comidaconsciente.org</li>
              <li className="text-cc-green-600">(11) 99999-9999</li>
              <li className="text-cc-green-600">São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-cc-green-200 text-center">
          <p className="text-cc-green-600 text-sm">
            © {new Date().getFullYear()} Comida Consciente. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;