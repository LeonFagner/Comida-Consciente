import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


export async function hashPassword(email: string, password: string, nonce: string): Promise<string> {
  const combined = `${email}:${password}:${nonce}`; // sal = email + nonce
  const encoder = new TextEncoder();
  const data = encoder.encode(combined);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}


interface CadastroData {
  id?: string;
  tipo: string;
  nomeCompleto: string;
  cpf: string;
  email: string;
  telefone: string;
  senha: string;
  confirmarSenha?: string;
  interesse: string;
  endereco: string;
  nonce : string 
}

export const useCadastro = ({ onSuccess, onError }: {
  onSuccess: () => void;
  onError: (msg: string) => void;
}) => {
  const mutation = useMutation({
    mutationFn: async (form: CadastroData) => {
      const { data } = await axios.get("http://localhost:3001/users", {
        params: { email: form.email }
      });

      if (data.length > 0) {
        throw new Error("E-mail já cadastrado.");
      }

      if (form.senha !== form.confirmarSenha) {
        throw new Error("As senhas não coincidem.");
      }
     

      const nonce = Date.now().toString();
      const hashedPassword = await hashPassword(form.email, form.senha, nonce);

      const payload = {
        ...form,
        senha: hashedPassword, 
        id: uuidv4(),
        nonce, 
        
      };
      delete payload.confirmarSenha;
     
      localStorage.setItem("isLogin", "true");
      return await axios.post("http://localhost:3001/users", payload);
    },
    onSuccess,
    onError: (err: any) => {
      onError(err.message || "Erro desconhecido.");
    }
  });

  return mutation;
};