
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cc-green-50 p-4">
      <div className="text-center space-y-6">
        <div className="text-9xl text-cc-green-500">404</div>
        <h1 className="text-3xl font-bold text-cc-green-700">Página não encontrada</h1>
        <p className="text-cc-green-600 max-w-md mx-auto">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <Link to="/">
          <Button className="bg-cc-green-600 hover:bg-cc-green-700">
            Voltar para o início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;