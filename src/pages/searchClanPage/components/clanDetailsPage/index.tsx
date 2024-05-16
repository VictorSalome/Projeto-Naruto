import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useGetClan } from "../../../../hooks";
import { useParams } from "react-router-dom";

export const ClanDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetClan();
  const clan = data?.clans.find((clan) => clan.id === Number(id));

  console.log(clan);

  return (
    <>
      <div className="flex flex-wrap justify-center mt-3 p-3">
        {clan ? (
          <div className="p-2  ">
            <Typography variant="h4">Clã {clan.name}</Typography>
            <Typography variant="subtitle1">Membros do clã:</Typography>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {clan.characters.map((character) => (
                <Card
                  key={character.id}
                  sx={{ maxWidth: 180, marginBottom: "10px" }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={character.images[0]}
                    alt={character.name}
                    className="w-28 h-32"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {character.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span className="font-bold">Pais:</span>{" "}
                      {character.personal.affiliation}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span className="font-bold">Genero:</span>
                      {character.personal.sex}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span className="font-bold">Rank:</span>
                      {character.rank?.ninjaRank?.["Part II" || "Part I"] ||
                        "Não encontrado"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span className="font-bold">Jutsus:</span>
                      {character.jutsu?.slice(0, 3).join(", ")}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <Typography variant="h4">Clã não encontrado</Typography>
        )}
      </div>
    </>
  );
};
