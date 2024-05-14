import { Route, Routes, useNavigate } from "react-router-dom";
import {
  ExploreWorldPage,
  HomePage,
  ExploreClansPages,
  SearchClanPage,
} from "../pages";
import { NavBar } from "../components";

import { useEffect } from "react";

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
        <Route path="/seach-clans" element={<SearchClanPage />} />
      </Routes>
    </>
  );
};
