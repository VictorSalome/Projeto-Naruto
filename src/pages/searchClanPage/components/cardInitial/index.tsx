import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Pagination,
  Typography,
} from "@mui/material";
import { useGetClan } from "../../../../hooks";
import { useNavigate } from "react-router-dom";

interface CardInitialProps {
  searchTerm: string; // Adiciona a propriedade searchTerm ao tipo de props
}

export const CardInitial: React.FC<CardInitialProps> = ({ searchTerm }) => {
  const { data } = useGetClan();
  const clans = data?.clans;
  const navigate = useNavigate();

  const handleCardClick = (clanId: number) => {
    navigate(`/clan/${clanId}`);
  };

  const filteredClans = clans?.filter((clan) =>
    clan.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [page, setPage] = React.useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  return (
    <div className="flex flex-wrap justify-center mt-3">
      {filteredClans
        ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        .map((clan) => (
          <div
            key={clan.id}
            onClick={() => handleCardClick(clan.id)}
            className="p-3 w-1/2 md:w-1/4 flex-grow-0 mx-auto md:mx-2"
          >
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={clan.characters[0].images[0]}
                  alt={clan.name}
                  className="w-full h-48 md:h-72"
                />
                <CardContent>
                  <Typography variant="h6" component="div" fontWeight={600}>
                    Clã <span>{clan.name.split(" ")[0]}</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="mt-2"
                  >
                    Integrantes:
                    <span className="font-bold">{clan.characters.length}</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      {filteredClans?.length !== undefined &&
        filteredClans.length > itemsPerPage && (
          <div className="flex justify-center mt-3 w-full">
            <div className="flex w-full justify-center">
              <Pagination
                count={Math.ceil(filteredClans.length / itemsPerPage)}
                page={page}
                onChange={(
                  _event: React.ChangeEvent<unknown>,
                  value: number
                ): void => handlePageChange(value)}
                className="mx-auto mt-4"
              />
            </div>
          </div>
        )}
    </div>
  );
};
