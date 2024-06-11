import { Typography, CardContent, CardMedia, Grid } from "@mui/material";
import { ICharacter } from "../../../../../../interfaces/interfaceCharacters";

interface CharacterDetailsWebProps {
  character: ICharacter;
}

export const CardWeb: React.FC<CharacterDetailsWebProps> = ({
  character,
}) => {
  return (
    <Grid container spacing={2} sx={{ maxWidth: "80%", margin: "auto" }}>
      <Grid item xs={12} md={4}>
        <CardMedia
          component="img"
          image={character.images[0]}
          alt={character.name}
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <CardContent>
          <Typography
            component="div"
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontFamily: "Naruto",
              marginBottom: "20px",
            }}
          >
            {character.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "10px",
              fontFamily: "Naruto",
              color: "#f77f00",
            }}
          >
            <span className="font-semibold font-naruto text-black">Pais: </span>
            {character.personal.affiliation}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "10px",
              fontFamily: "Naruto",
              color: "#f77f00",
            }}
          >
            <span className="font-semibold font-naruto text-black">
              Genero:{" "}
            </span>
            {character.personal.sex}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "10px",
              fontFamily: "Naruto",
              color: "#f77f00",
            }}
          >
            <span className="font-semibold font-naruto text-black">Rank: </span>
            {character.rank?.ninjaRank?.["Part II" || "Part I"] ||
              "Não encontrado"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "10px",
              fontFamily: "Naruto",
              color: "#f77f00",
            }}
          >
            <span className="font-semibold font-naruto text-black">
              Ocupacão:{" "}
            </span>
            {character.personal.occupation}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "10px",
              fontFamily: "Naruto",
              color: "#f77f00",
            }}
          >
            <span className="font-semibold font-naruto text-black">
              Jutsus:{" "}
            </span>
            {character.jutsu?.slice(0, 3).join(", ")}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};
