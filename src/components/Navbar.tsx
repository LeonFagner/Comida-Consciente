
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useLogin } from '@/hooks/use-login';
import { toast } from '@/hooks/use-toast';


const Navbar = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const { isLogin, setIsLogin } = useLogin({
    onSuccess: (user) => {
      console.log("Usuário logado:", user);
    },
    onError: (msg) => {
      alert(msg);
    },
  });

  const handleClick = () => {
    
    if (isLogin) {
      setIsLogin(false);
      localStorage.removeItem("isLogin");
      toast({
        title: "Logout realizado",
        description: `Até logo!`,
      });
      navigate("/");
    } else {
      navigate("/login"); 
  };
}

  
  
  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-cc-green-500 flex items-center justify-center">
            <span className="text-white font-bold">CC</span>
          </div>
          <h1 className="text-xl font-bold text-cc-green-700">Comida Consciente</h1>
        </Link>

        {isMobile ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/" className="w-full">Início</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/mapa" className="w-full">Mapa</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/doar" className="w-full">Doar Alimentos</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/agendamentos" className="w-full">Agendamentos</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/sobre" className="w-full">Sobre</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/login" className="w-full">Entrar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/cadastro" className="w-full">Cadastrar</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Link to="/" className="text-cc-green-700 hover:text-cc-green-500 font-medium">Início</Link>
              <Link to="/mapa" className="text-cc-green-700 hover:text-cc-green-500 font-medium">Mapa</Link>
              <Link to="/doar" className="text-cc-green-700 hover:text-cc-green-500 font-medium">Doar Alimentos</Link>
              <Link to="/agendamentos" className="text-cc-green-700 hover:text-cc-green-500 font-medium">Agendamentos</Link>
              <Link to="/sobre" className="text-cc-green-700 hover:text-cc-green-500 font-medium">Sobre</Link>
            </div>
            <div className="flex gap-2">
              
                <Button onClick={handleClick} variant="outline" className="border-cc-green-500 text-cc-green-700 hover:bg-cc-green-700" >{isLogin? "Sair" : "Entrar"}</Button>
              
              <Link to="/cadastro">
                <Button className={`bg-cc-green-600 hover:bg-cc-green-700 ${!isLogin ? 'Cadastrar' : 'hidden'}`}> Cadastrar</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;