import { useQuery } from "react-query";
import { IGetCharacterResponse } from "../../interfaces/interfaceAPI";
import { HTTPService } from "../../services";

export const useGetCharacters = () => {
  //limite por paginacao
  const limit = 20;

  const { data, isLoading } = useQuery({
    // nome da chave
    queryKey: ["character"],
    // funcao que vai retornar os dados
    queryFn: () => {
      // funcao que vai retornar os dados
      const response = HTTPService.get<IGetCharacterResponse>(
        `/character?limit=${limit}`
      ).then((res) => res.data);

      return response;
    },
  });

  return { data, isLoading };
};

export const useGetKara = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["kara"],
    queryFn: () => {
      const response = HTTPService.get<IGetCharacterResponse>("/kara").then(
        (res) => res.data
      );

      return response;
    },
  });

  return { data, isLoading };
};

// explique o que o código acima faz em sua totalidade

// O código acima é um hook personalizado que faz uma requisição GET para a API de personagens do Naruto e retorna os dados da resposta. Ele utiliza o hook useQuery do React Query para fazer a requisição e armazenar o estado de carregamento. O hook useGetCharacter é utilizado na página Home para buscar os personagens e exibi-los em um carrossel.
