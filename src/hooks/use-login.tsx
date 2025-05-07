import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { hashPassword } from "./use-casdastro";

type LoginData = {
  email: string;
  senha: string;
};

type UseLoginProps = {
  onSuccess: (user: any) => void;
  onError: (msg: string) => void;
};

export function useLogin({ onSuccess, onError }: UseLoginProps) {
  const [isLogin, setIsLogin] = useState(() => {

    return localStorage.getItem("isLogin") === "true";

  });





  useEffect(() => {

    localStorage.setItem("isLogin", String(isLogin));
  }, [isLogin]);

  const mutation = useMutation({
    mutationFn: async (form: LoginData) => {
      const response = await axios.get("http://localhost:3001/users", {
        params: { email: form.email },
      });


      const user = response.data[0];


      if (!user)
        throw new Error("Usuário não encontrado");

      const hashPasswordAtt = await hashPassword(form.email, form.senha, user.nonce);


      if (user.senha !== hashPasswordAtt) {
        throw new Error("Senha incorreta");
      }

      setIsLogin(true);
      return user;
    },
    onSuccess: (user) => {
      onSuccess(user);
    },
    onError: (error: any) => {
      onError(error.message || "Erro desconhecido");
    },
  });

  return {
    mutate: mutation.mutate,
    isLogin,
    setIsLogin,
  };
}
