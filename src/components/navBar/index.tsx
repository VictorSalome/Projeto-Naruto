import { useMediaQuery } from "@mui/material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavMobile, NavWeb } from "./components";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#f77f00" }}>
        <Toolbar>
          <Typography
            variant="h6"
            style={{ flex: 1 }}
            className="flex items-center  "
          >
            <Link to="/">
              <img
                className="w-12 h-12 "
                src="https://i.pinimg.com/originals/74/45/6c/74456c2bd47666329b9dee5dcad4ece7.png"
                alt="img-naruto"
              />
            </Link>

            <p className="font-naruto">Naruto</p>
          </Typography>
          {isMobile ? <NavMobile /> : <NavWeb />}
        </Toolbar>
      </AppBar>
    </>
  );
};
