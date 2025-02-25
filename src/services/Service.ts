import axios from "axios";

export const api = axios.create({
  baseURL: "https://farmacia-nest-t0o5.onrender.com",
});

// Método GET --> listar categorias
export const listar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};

// Método POST --> cadastrar nova categoria
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

// Método PUT --> atualizar categoria existente
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.put(url, dados);
  setDados(resposta.data);
};

// Método DELETE --> remover categoria
export const deletar = async (url: string) => {
  await api.delete(url);
};