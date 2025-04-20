import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type LoginData = {
  email: string;
  password: string;
};

type UseLoginProps = {
  onSuccess: (user: any) => void;
  onError: (msg: string) => void;
};

export function useLogin({ onSuccess, onError }: UseLoginProps) {
  return useMutation({
    mutationFn: async ({ email, password }: LoginData) => {
      const response = await axios.get("http://localhost:3001/users", {
        params: { email },
      });

      const user = response.data[0];
      console.log(user.fullName)

      if (!user) {
        throw new Error("Usuário não encontrado");
      }

      if (user.password !== password) {
        throw new Error("Senha incorreta");
      }

      return user;
    },
    onSuccess: (user) => {
      onSuccess(user);
    },
    onError: (error: any) => {
      onError(error.message || "Erro desconhecido");
    },
  });
}
