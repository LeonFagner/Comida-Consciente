import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";

import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { useCadastro } from '@/hooks/use-casdastro';


interface CadastroData {
  tipo: string;
  nomeCompleto: string;
  cpf: string;
  email: string;
  telefone: string;
  senha: string;
  confirmarSenha: string;
  interesse: string;
  endereco: string;
  nonce: string
}

export const Cadastro = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [form, setForm] = useState<CadastroData>({
    tipo: "",
    nomeCompleto: "",
    cpf: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    interesse: "",
    endereco: "",
    nonce:""
  });

  const { mutate } = useCadastro({
    onSuccess: () => {
      toast({
        title: "Cadastro realizado",
        description: "Sua conta foi criada com sucesso!",
      });
      navigate("/");
    },
    onError: (msg) => {
      toast({
        title: "Erro",
        description: msg,
        variant: "destructive",
      });
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(form); 
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-cc-green-700">
                Cadastre-se no Comida Consciente
              </CardTitle>
              <CardDescription className="text-center">
                Crie sua conta e faça parte dessa iniciativa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="pessoa"  className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="pessoa">Pessoa</TabsTrigger>
                  <TabsTrigger value="estabelecimento">Estabelecimento</TabsTrigger>
                  <TabsTrigger value="ong">ONG/Instituição</TabsTrigger>
                </TabsList>

                <TabsContent value="pessoa">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input name="nomeCompleto" id="nome_completo" placeholder="Seu nome completo" required className="input-focus" value={form.nomeCompleto} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cpf">CPF</Label>
                        <Input name='cpf'  placeholder="000.000.000-00" required className="input-focus" onChange={handleChange} value={form.cpf} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input name='email' id="email" type="email" placeholder="seu@email.com" required className="input-focus" value={form.email} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input name='telefone' placeholder="(00) 00000-0000" required className="input-focus" value={form.telefone} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="senha">Senha</Label>
                        <Input name='senha'  type="password" required className="input-focus" value={form.senha} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmarsenha">Confirmar Senha</Label>
                        <Input name='confirmarSenha' type="password" required className="input-focus" value={form.confirmarSenha} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interesse">Interesse Principal</Label>
                      <Select required value={form.interesse} name='interesse'>
                        <SelectTrigger className="input-focus">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent >
                          <SelectItem value="beneficiario">Receber doações</SelectItem>
                          <SelectItem value="voluntario">Ser voluntário</SelectItem>
                          <SelectItem value="ambos">Ambos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="endereco">Endereço</Label>
                      <Input
                        name='endereco'
                        placeholder="Seu endereço completo"
                        required className="input-focus"
                        value={form.endereco}
                        onChange={handleChange} />
                    </div>

                    <Button type="submit" className="w-full bg-cc-green-600 hover:bg-cc-green-700">
                      Criar Conta
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="estabelecimento">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome_estabelecimento">Nome do Estabelecimento</Label>
                        <Input id="nome_estabelecimento" placeholder="Nome do seu estabelecimento" required className="input-focus" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cnpj">CNPJ</Label>
                        <Input id="cnpj" placeholder="00.000.000/0000-00" required className="input-focus" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email_estabelecimento">Email</Label>
                        <Input id="email_estabelecimento" type="email" placeholder="seu@estabelecimento.com" required className="input-focus" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone_estabelecimento">Telefone</Label>
                        <Input id="telefone_estabelecimento" placeholder="(00) 00000-0000" required className="input-focus" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tipo_estabelecimento">Tipo de Estabelecimento</Label>
                      <Select required>
                        <SelectTrigger className="input-focus">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="supermercado">Supermercado</SelectItem>
                          <SelectItem value="restaurante">Restaurante</SelectItem>
                          <SelectItem value="padaria">Padaria</SelectItem>
                          <SelectItem value="feira">Feira</SelectItem>
                          <SelectItem value="produtor">Produtor Rural</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="senha_estabelecimento">Senha</Label>
                        <Input id="senha_estabelecimento" type="password" required className="input-focus" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmarsenha_estabelecimento">Confirmar Senha</Label>
                        <Input id="confirmarsenha_estabelecimento" type="password" required className="input-focus" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="endereco_estabelecimento">Endereço</Label>
                      <Input id="endereco_estabelecimento" placeholder="Endereço completo do estabelecimento" required className="input-focus" />
                    </div>

                    <Button type="submit" className="w-full bg-cc-green-600 hover:bg-cc-green-700">
                      Criar Conta 
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="ong">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome_ong">Nome da Instituição</Label>
                        <Input id="nome_ong" placeholder="Nome da sua instituição" required className="input-focus" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cnpj_ong">CNPJ</Label>
                        <Input id="cnpj_ong" placeholder="00.000.000/0000-00" required className="input-focus" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email_ong">Email</Label>
                        <Input id="email_ong" type="email" placeholder="contato@instituicao.org" required className="input-focus" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone_ong">Telefone</Label>
                        <Input id="telefone_ong" placeholder="(00) 00000-0000" required className="input-focus" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tipo_ong">Tipo de Instituição</Label>
                      <Select required>
                        <SelectTrigger className="input-focus">
                          <SelectValue placeholder="Selecione uma opção" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ong">ONG</SelectItem>
                          <SelectItem value="cozinha">Cozinha Comunitária</SelectItem>
                          <SelectItem value="abrigo">Abrigo</SelectItem>
                          <SelectItem value="instituicao">Instituição Beneficente</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="senha_ong">Senha</Label>
                        <Input id="senha_ong" type="password" required className="input-focus" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmarsenha_ong">Confirmar Senha</Label>
                        <Input id="confirmarsenha_ong" type="password" required className="input-focus" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="endereco_ong">Endereço</Label>
                      <Input id="endereco_ong" placeholder="Endereço completo da instituição" required className="input-focus" />
                    </div>

                     <Button type="submit" className="w-full bg-cc-green-600 hover:bg-cc-green-700">
                      Criar Conta 
                    </Button> 
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <div className="text-center w-full text-sm">
                Já tem uma conta?{" "}
                <Link to="/login" className="text-cc-green-600 hover:underline font-medium">
                  Entrar
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cadastro;