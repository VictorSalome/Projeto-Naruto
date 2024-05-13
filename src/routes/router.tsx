import { Route, Routes } from "react-router-dom";
import { ExploreWorldPage, HomePage } from "../pages";
import { NavBar } from "../components";
import { ExploreClansPages } from "../pages/exploreClansPage";

export const AppRouter: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore-world" element={<ExploreWorldPage />} />
        <Route path="/explore-clans" element={<ExploreClansPages />} />
      </Routes>
    </>
  );
};
