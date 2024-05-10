import axios from "axios";

export const HTTPService = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

// o axios.create é um método que cria uma instância do axios com configurações personalizadas para a instância criada e retorna uma nova instância do axios. É útil quando você deseja usar a mesma configuração em várias solicitações, como o URL base, cabeçalhos padrão, etc.

// explique o que é o import.meta.env.VITE_API_URL as string

// O import.meta.env é um objeto que contém informações sobre o ambiente de execução. O VITE_API_URL é uma variável de ambiente que é definida no arquivo .env e é acessada por import.meta.env.VITE_API_URL. O as string é uma afirmação de tipo que diz ao TypeScript que o valor retornado por import.meta.env.VITE_API_URL é uma string.
