import { Route, Routes, useNavigate } from "react-router-dom";

import { NavBar } from "../components";

import { useEffect } from "react";
import {
  ExploreClansPages,
  ExploreWorldPage,
  HomePage,
  SearchClanPage,
  ExploreCharacters,
  ClanDetailsPage,
  CharacterDetailsPage,
} from "../pages";

export const AppRouter: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore-world" element={<ExploreWorldPage />} />
        <Route path="/explore-clans" element={<ExploreClansPages />} />
        <Route path="/search-clans" element={<SearchClanPage />} />
        <Route path="/explore-characters" element={<ExploreCharacters />} />
        <Route path="/clan/:id" element={<ClanDetailsPage />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
      </Routes>
    </>
  );
};
