import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Pagination,
} from "@mui/material";
import { useGetClan } from "../../../../hooks";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const ClanDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetClan();
  const clan = data?.clans.find((clan) => clan.id === Number(id));

  const [page, setPage] = useState(1);
  const itemsPerPage = window.innerWidth < 768 ? 3 : 8;

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-3 p-3 md:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-4">
          {clan ? (
            clan.characters
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((character) => (
                <Card
                  key={character.id}
                  sx={{
                    maxWidth: 350,
                    height: "400px",
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
                    className="w-28 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52"
                  />
                  <CardContent>
                    <Typography
                      component="div"
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
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
                        fontWeight: "bold",
                        color: "#f77f00",
                      }}
                    >
                      <span className="font-semibold font-naruto">Pais: </span>{" "}
                      {character.personal.affiliation}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        marginBottom: "5px",
                        fontFamily: "Naruto",
                        fontWeight: "bold",
                        color: "#f77f00",
                      }}
                    >
                      <span className="font-semibold font-naruto">
                        Genero:{" "}
                      </span>
                      {character.personal.sex}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        marginBottom: "5px",
                        fontFamily: "Naruto",
                        fontWeight: "bold",
                        color: "#f77f00",
                      }}
                    >
                      <span className="font-semibold font-naruto">Rank: </span>
                      {character.rank?.ninjaRank?.["Part II" || "Part I"] ||
                        "Não encontrado"}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        marginBottom: "5px",
                        fontFamily: "Naruto",
                        fontWeight: "bold",
                        color: "#f77f00",
                      }}
                    >
                      <span className="font-semibold font-naruto">
                        Jutsus:{" "}
                      </span>
                      {character.jutsu?.slice(0, 3).join(", ")}
                    </Typography>
                  </CardContent>
                </Card>
              ))
          ) : (
            <Typography variant="h4">Clã não encontrado</Typography>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Pagination
          count={clan ? Math.ceil(clan.characters.length / itemsPerPage) : 1}
          page={page}
          onChange={(_event: React.ChangeEvent<unknown>, value: number) =>
            handlePageChange(value)
          }
          className="m-auto mb-10"
        />
      </div>
    </>
  );
};
