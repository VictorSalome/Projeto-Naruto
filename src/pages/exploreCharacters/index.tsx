import React, { useEffect, useState } from "react";
import { Pagination, Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useGetCharacters } from "../../hooks";
import { ICharacter } from "../../interfaces/interfaceCharacters";

import { SkeletonCard } from "./components/skeletonCard/index.tsx";
import { CharacterCard, FilterDrawer, SearchBar } from "./components/index.ts";

export const ExploreCharacters = () => {
  const { data, isLoading } = useGetCharacters();
  console.log("isLoading", isLoading);
  const characters: ICharacter[] | undefined = data?.characters.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [page, setPage] = useState(1);
  const [filteredCharacters, setFilteredCharacters] = useState<
    ICharacter[] | undefined
  >([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
    setDrawerOpen(false);
    setPage(1);
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
      <SearchBar
        onSearch={(value: string) =>
          setFilteredCharacters(
            characters?.filter((character) =>
              character.name.toUpperCase().includes(value.toUpperCase())
            )
          )
        }
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
      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onLetterChange={handleLetterChange}
      />

      <div>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: itemsPerPage }).map((_, index) => (
              <div key={index} className="flex-1 px-3">
                <SkeletonCard />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedCharacters?.map((character, index) => (
              <CharacterCard
                key={index}
                character={character}
                isLoading={isLoading}
              />
            ))}
          </div>
        )}
      </div>

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
