import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { ICharacter } from "../../../../../../interfaces/interfaceCharacters";

interface CharacterDetailsMobileProps {
  character: ICharacter;
}

export const CardMobile: React.FC<CharacterDetailsMobileProps> = ({
  character,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        height: "100%",
        marginRight: "10px",
        marginBottom: "15px",
        marginLeft: "15px",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={character.images[0]}
        alt={character.name}
        className="w-28 h-full md:w-40 md:h-40 lg:w-52 lg:h-52"
      />
      <CardContent>
        <Typography
          component="div"
          style={{
            fontSize: "1.2rem",
            fontFamily: "Naruto",
            marginBottom: "10px",
          }}
        >
          {character.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            marginBottom: "5px",
            fontFamily: "Naruto",
            color: "#f77f00",
          }}
        >
          <span className="font-semibold font-naruto text-black">Pais: </span>
          {character.personal.affiliation}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            marginBottom: "5px",
            fontFamily: "Naruto",
            color: "#f77f00",
          }}
        >
          <span className="font-semibold font-naruto text-black">Genero: </span>
          {character.personal.sex}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            marginBottom: "5px",
            fontFamily: "Naruto",
            color: "#f77f00",
          }}
        >
          <span className="font-semibold font-naruto text-black">Rank: </span>
          {character.rank?.ninjaRank?.["Part II" || "Part I"] ||
            "Não encontrado"}
        </Typography>
        <Typography
          component="div"
          style={{
            marginBottom: "5px",
            fontFamily: "Naruto",
            color: "#f77f00",
          }}
        >
          <span className="font-semibold font-naruto text-black">
            ocupacão:{" "}
          </span>
          {character.personal.occupation}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            marginBottom: "5px",
            fontFamily: "Naruto",
            color: "#f77f00",
          }}
        >
          <span className="font-semibold font-naruto text-black">Jutsus: </span>
          {character.jutsu?.slice(0, 3).join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
};
