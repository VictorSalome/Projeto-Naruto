import { ICharacter } from "../../../../interfaces/interfaceCharacters";
import { CharacterCard } from "../characterCard";

interface ICharacterListProps {
  characters: ICharacter[];
  isLoading: boolean;
}

export const CharacterList: React.FC<ICharacterListProps> = ({
  characters,
  isLoading,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {characters.map((character, index) => (
      <CharacterCard key={index} character={character} isLoading={isLoading} />
    ))}
  </div>
);
