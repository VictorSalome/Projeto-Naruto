import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useGetCharacters } from "../../hooks";

export const ExploreCharacters = () => {
  const { data } = useGetCharacters();
  const characters = data?.characters;

  return (
    <>
      <div>
        <div>barra de pesquisa</div>

        <div>
          {characters?.map((character) => {
            return (
              <Card sx={{ minWidth: 275 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={character.images[0]}
                    alt={character.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {character.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ranking:{" "}
                      {character.rank?.ninjaRank?.["Part II" || "Part I"] ||
                        "Não encontrado"}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
