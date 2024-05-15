import { Route, Routes, useNavigate } from "react-router-dom";

import { NavBar } from "../components";

import { useEffect } from "react";
import {
  ExploreClansPages,
  ExploreWorldPage,
  HomePage,
  SearchClanPage,
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
      </Routes>
    </>
  );
};
