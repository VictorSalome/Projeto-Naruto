/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import { useGetClan } from "../../hooks";

import { CardInitial, InputSearch, SkeletonMobile } from "./components";
import { SkeletonWeb } from "./components/skeletonWeb";

export const SearchClanPage = () => {
  const { isLoading } = useGetClan();
  const [loadingSkeleton] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClans = (value: string) => {
    setSearchTerm(value); // Atualiza o estado com o termo de busca
  };

  const isMobileView = window.innerWidth <= 770;

  if (isLoading || loadingSkeleton) {
    return <div>{isMobileView ? <SkeletonMobile /> : <SkeletonWeb />}</div>;
  }

  // Renderização do conteúdo final quando os dados estiverem carregados
  return (
    <div>
      <div>
        <InputSearch onSearch={handleSearchClans} placeholder="Insira um clã" />
      </div>

      <div>
        <CardInitial searchTerm={searchTerm} />
      </div>
    </div>
  );
};
