import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  InputAdornment,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { useGetClan } from "../../hooks";
import { CiSearch } from "react-icons/ci";

export const SearchClanPage = () => {
  const { data, isLoading } = useGetClan();
  const clans = data?.clans;
  const [loadingSkeleton] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredClans = clans?.filter((clan) =>
    clan.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Lógica para exibir o esqueleto enquanto os dados estão sendo carregados
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
          {/* Exemplo de uso de Skeleton para o Card enquanto os dados carregam */}
          {[1, 2, 3, 4].map((index) => (
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

  // Renderização do conteúdo final quando os dados estiverem carregados
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
          onChange={handleSearch}
        />
      </div>

      <div className="flex flex-wrap justify-center mt-3">
        {filteredClans?.map((clan) => (
          <div key={clan.id} className="p-2 w-1/2 md:w-1/4">
            <Card sx={{ maxWidth: 180 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={clan.characters[0].images[0]}
                  alt={clan.name}
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
    </div>
  );
};
