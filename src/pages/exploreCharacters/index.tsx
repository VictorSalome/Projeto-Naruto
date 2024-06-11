import { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Pagination,
  Skeleton,
  Typography,
  Drawer,
  Button,
  IconButton,
  List,
  ListItem,
  Grid,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import { useGetCharacters } from "../../hooks";
import { ICharacter } from "../../interfaces/interfaceCharacters";
import { InputSearch } from "../searchClanPage/components";

export const ExploreCharacters = () => {
  const { data, isLoading } = useGetCharacters();

  const characters: ICharacter[] | undefined = data?.characters.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [page, setPage] = useState(1);
  const [filteredCharacters, setFilteredCharacters] = useState<
    ICharacter[] | undefined
  >([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("");

  const itemsPerPage = 6;

  useEffect(() => {
    if (characters) {
      setFilteredCharacters(characters);
    }
  }, [characters]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleLetterChange = (letter: string) => {
    setSelectedLetter(letter);
    setDrawerOpen(false);
    setPage(1); // Reset to the first page whenever the filter changes
    if (letter) {
      setFilteredCharacters(
        characters?.filter((character) => character.name.startsWith(letter))
      );
    } else {
      setFilteredCharacters(characters);
    }
  };

  const paginatedCharacters = filteredCharacters?.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      <InputSearch
        onSearch={(value) =>
          setFilteredCharacters(
            characters?.filter((character) =>
              character.name.toUpperCase().includes(value.toUpperCase())
            )
          )
        }
        placeholder="Pesquisar personagem"
      />

      <div className="flex justify-end pr-1 lg:justify-start">
        <Button
          style={{ color: "#f77f00" }}
          startIcon={<FilterListIcon />}
          onClick={() => setDrawerOpen(true)}
          className="lg:ml-[calc(50%-20rem)]"
        >
          Filtros
        </Button>
      </div>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div style={{ width: 300, padding: 20 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Filtro de Personagem</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <ListItem
            className="cursor-pointer"
            onClick={() => handleLetterChange("")}
          >
            Mostrar Todos
          </ListItem>

          <List className="">
            <Grid container spacing={1}>
              {Array.from(Array(26)).map((_, i) => (
                <Grid item xs={2} key={i}>
                  <ListItem
                    sx={{ cursor: "pointer" }}
                    onClick={() =>
                      handleLetterChange(String.fromCharCode(65 + i))
                    }
                  >
                    {String.fromCharCode(65 + i)}
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </List>
        </div>
      </Drawer>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="flex-1 px-3">
              <Card sx={{ maxWidth: 520, height: "100%" }}>
                <CardActionArea>
                  <Skeleton variant="rectangular" height={100} />
                  <CardContent>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedCharacters?.map((character, index) => (
            <div key={index} className="flex-1 px-3">
              <Card sx={{ maxWidth: 520, height: "100%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={character.images[0]}
                    alt={character.name}
                    className="w-full h-48 md:h-64"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {character.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ranking:{" "}
                      {character.rank?.ninjaRank?.["Part II" || "Part I"] ||
                        "Não encontrado"}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Pagination
          count={
            filteredCharacters
              ? Math.ceil(filteredCharacters.length / itemsPerPage)
              : 0
          }
          page={page}
          onChange={handlePageChange}
          style={{ margin: "0 auto" }}
        />
      </div>
    </div>
  );
};
