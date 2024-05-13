import { Link } from "react-router-dom";

export const NavWeb = () => {
  return (
    <nav className="flex gap-3">
      <Link to="/" className="text-white">
        Home
      </Link>
      <a className="text-white">Anime</a>
      <a className="text-white">Personagens</a>
    </nav>
  );
};
