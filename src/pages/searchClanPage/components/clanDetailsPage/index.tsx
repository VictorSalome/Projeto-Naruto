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

import { SkeletonClan } from "./components/skeletonClan";

export const ClanDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetClan();
  const clan = data?.clans.find((clan) => clan.id === Number(id));

  const [page, setPage] = useState(1);
  const itemsPerPage = window.innerWidth < 768 ? 3 : 10;

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-3 p-3">
        {isLoading || !clan ? (
          <SkeletonClan />
        ) : (
          clan.characters
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((character) => (
              <Card
                key={character.id}
                sx={{
                  width: 350,
                  height: "400px",
                  margin: "5px",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={character.images[0]}
                  alt={character.name}
                  className="w-full h-32 md:h-40 lg:h-52"
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
                    <span className="font-semibold font-naruto text-black">
                      Pais:{" "}
                    </span>{" "}
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
                    <span className="font-semibold font-naruto text-black">
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
                    <span className="font-semibold font-naruto text-black">
                      Rank:{" "}
                    </span>
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
                    <span className="font-semibold font-naruto text-black">
                      Jutsus:{" "}
                    </span>
                    {character.jutsu?.slice(0, 3).join(", ")}
                  </Typography>
                </CardContent>
              </Card>
            ))
        )}
      </div>
      <div className="flex justify-center" style={{ position: "relative" }}>
        <Pagination
          count={clan ? Math.ceil(clan.characters.length / itemsPerPage) : 1}
          page={page}
          onChange={(_event: React.ChangeEvent<unknown>, value: number) => {
            handlePageChange(value);
            window.scrollTo(0, 0);
          }}
          className="m-auto "
        />
      </div>
    </>
  );
};
