import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ICharacter } from "../../../../interfaces/interfaceCharacters";

interface ICharacterCardProps {
  character: ICharacter;
  isLoading: boolean;
  onCardClick?: () => void; // Coloque ? para deixar opcional essa prop
}

export const CharacterCard: React.FC<ICharacterCardProps> = ({
  character,
  isLoading,
  onCardClick,
}) => {
  return (
    <div className="flex-1 px-3">
      <Card onClick={onCardClick} sx={{ maxWidth: 520, height: "100%" }}>
        <CardActionArea>
          {!isLoading && (
            <>
              {character?.images && (
                <CardMedia
                  component="img"
                  image={character.images[0]}
                  alt={character.name}
                  className="w-full h-48 md:h-64"
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ranking:{" "}
                  {character.rank?.ninjaRank?.["Part II"] ||
                    character.rank?.ninjaRank?.["Part I"] ||
                    "Não encontrado"}
                </Typography>
              </CardContent>
            </>
          )}
        </CardActionArea>
      </Card>
    </div>
  );
};
