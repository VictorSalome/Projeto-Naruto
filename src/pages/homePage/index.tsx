import { useGetCharacters } from "../../hooks";
import { Carousel } from "./components/carousel";

export const HomePage = () => {
  const characters = useGetCharacters();
  console.log(characters.data);

  return (
    <>
      <Carousel />
      {/* 
      {characters.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {characters.data?.characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )} */}
    </>
  );
};
