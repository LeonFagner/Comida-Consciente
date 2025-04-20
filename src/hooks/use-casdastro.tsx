import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

interface CadastroData {
  id?: string;
  tipo: string;
  nomeCompleto: string;
  cpf: string;
  email: string;
  telefone: string;
  senha: string;
  confirmarSenha: string;
  interesse: string;
  endereco: string;
}

export const useCadastro = ({ onSuccess, onError }: {
  onSuccess: () => void;
  onError: (msg: string) => void;
}) => {
  const mutation = useMutation({
    mutationFn: async (form: CadastroData) => {
      const { data } = await axios.get("http://localhost:3001/user", {
        params: { email: form.email }
      });

      if (data.length > 0) {
        throw new Error("E-mail já cadastrado.");
      }

      if (form.senha !== form.confirmarSenha) {
        throw new Error("As senhas não coincidem.");
      }

      const payload = { ...form, id: uuidv4() };
      return await axios.post("http://localhost:3001/user", payload);
    },
    onSuccess,
    onError: (err: any) => {
      onError(err.message || "Erro desconhecido.");
    }
  });

  return mutation;
};