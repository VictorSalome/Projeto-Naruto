import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  InputAdornment,
  Skeleton,
  TextField,
  Typography,
  Pagination,
} from "@mui/material";
import { useGetClan } from "../../hooks";
import { CiSearch } from "react-icons/ci";

export const SearchClanPage = () => {
  const { data, isLoading } = useGetClan();
  let clans = data?.clans || []; // Inicializa clans com um array vazio se for undefined

  const [loadingSkeleton] = useState(false);
  const [page, setPage] = useState(1);

  const cardsPerPage = 6;
  const indexOfLastCard = page * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = clans.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  if (isLoading || loadingSkeleton) {
    return (
      <div>
        <div className="mt-5 flex justify-center">
          <TextField
            className="w-96"
            id="standard-search"
            type="search"
            variant="outlined"
            color="warning"
            placeholder="Insira um clã"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" className="text-2xl">
                  <CiSearch />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="flex flex-wrap justify-center mt-3">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="p-2 w-1/2 md:w-1/4">
              <Card sx={{ maxWidth: 180 }}>
                <CardActionArea>
                  <Skeleton variant="rectangular" height={140} />
                  <CardContent>
                    <Typography variant="h6" component="div" fontWeight={600}>
                      <Skeleton />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mt-2"
                    >
                      <Skeleton />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-5 flex justify-center">
        <TextField
          className="w-96"
          id="standard-search"
          type="search"
          variant="outlined"
          color="warning"
          placeholder="Insira um clã"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="text-2xl">
                <CiSearch />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="flex flex-wrap justify-center mt-3">
        {currentCards.map((clan) => (
          <div key={clan.id} className="p-2 w-1/2 md:w-1/4">
            <Card sx={{ maxWidth: 180 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={clan.characters[0].images}
                  alt="green iguana"
                  className="w-28 h-28"
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
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-3">
        <Pagination
          count={Math.ceil(clans.length / cardsPerPage)}
          page={page}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};
