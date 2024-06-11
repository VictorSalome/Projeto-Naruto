import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetCharacters } from "../../../../hooks";
import { ICharacter } from "../../../../interfaces/interfaceCharacters";
import { SkeletonCard } from "../skeletonCard";
import { useMediaQuery, useTheme } from "@mui/material";
import { CardMobile, CardWeb } from "./components";

export const CharacterDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetCharacters();
  const character = data?.characters.find(
    (char: ICharacter) => char.id === Number(id)
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isLoading) {
    return (
      <div className="mt-5 p-10">
        <SkeletonCard />
      </div>
    );
  }

  if (!character) {
    return <Typography variant="h4">Personagem não encontrado</Typography>;
  }

  return (
    <div className="flex justify-center items-center mt-3 p-3">
      {isMobile ? (
        <CardMobile character={character} />
      ) : (
        <CardWeb character={character} />
      )}
    </div>
  );
};
