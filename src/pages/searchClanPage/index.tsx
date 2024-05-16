/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import { useGetClan } from "../../hooks";

import { CardInitial, InputSearch, SkeletonSearch } from "./components";

export const SearchClanPage = () => {
  const { isLoading } = useGetClan();
  const [loadingSkeleton] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value); // Atualiza o estado com o termo de busca
  }
  if (isLoading || loadingSkeleton) {
    return (
      <div>
        <SkeletonSearch />
      </div>
    );
  }

  // Renderização do conteúdo final quando os dados estiverem carregados
  return (
    <div>
      <div>
        <InputSearch onSearch={handleSearch} />
      </div>

      <div>
        <CardInitial searchTerm={searchTerm}  />
      </div>
    </div>
  );
};
