import { Link } from "react-router-dom";

export const NavWeb = () => {
  return (
    <nav className="flex gap-3">
      <Link to="/" className="text-white">
        Home
      </Link>
      <Link to="/explore-world">História do anime</Link>
      <Link to="/explore-characters">Personagens</Link>
      <Link to="/sexplore-clans">Clãs</Link>
      <Link to="/search-clans">Explorar clãs</Link>
    </nav>
  );
};
