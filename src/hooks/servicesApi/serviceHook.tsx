import { useQuery } from "react-query";
import { IGetCharacterResponse } from "../../interfaces/interfaceAPI";
import { HTTPService } from "../../services";

export const useGetCharacters = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["character"],
    queryFn: () => {
      const response = HTTPService.get<IGetCharacterResponse>(
        "/character"
      ).then((res) => res.data);

      return response;
    },
  });

  return { data, isLoading };
};

// explique o que o código acima faz em sua totalidade

// O código acima é um hook personalizado que faz uma requisição GET para a API de personagens do Naruto e retorna os dados da resposta. Ele utiliza o hook useQuery do React Query para fazer a requisição e armazenar o estado de carregamento. O hook useGetCharacter é utilizado na página Home para buscar os personagens e exibi-los em um carrossel.
