import { Route, Routes } from "react-router-dom";
import { ExploreWorldPage, HomePage } from "../pages";
import { NavBar } from "../components";

export const AppRouter: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore-world" element={<ExploreWorldPage />} />
      </Routes>
    </>
  );
};
