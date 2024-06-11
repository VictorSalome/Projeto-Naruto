import { InputSearch } from "../../../searchClanPage/components";



export const SearchBar = ({ onSearch }: { onSearch: (value: string) => void }) => (
  <InputSearch onSearch={onSearch} placeholder="Pesquisar personagem" />
);

