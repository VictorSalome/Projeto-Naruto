import { Box, Card, CardContent, Typography } from "@mui/material";
import { useGetCharacters } from "../../../../hooks";
import { ICharacter } from "../../../../interfaces/interfaceCharacters";

export const CardInfo = () => {
  const { data } = useGetCharacters();

  const characters = data;

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {characters?.characters.map((character: ICharacter) => (
          <Card key={character.id} sx={{ minWidth: 120 }}>
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
              <Typography gutterBottom component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character.personal.clan}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};
