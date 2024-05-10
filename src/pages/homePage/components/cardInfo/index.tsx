import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useGetCharacters } from "../../../../hooks";
import { ICharacter } from "../../../../interfaces/interfaceAPI";

export const CardInfo = () => {
  const characters = useGetCharacters();
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {characters.data?.characters.map((character: ICharacter) => (
          <Card key={character.id} sx={{ minWidth: 345 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 2,
                }}
              >
                <img
                  src={character.images[0]}
                  alt={character.name}
                  width="100"
                  height="100"
                />
              </Box>
              <Typography gutterBottom variant="h5" component="div">
                {character.name}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
            {character.description}
          </Typography> */}
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};
