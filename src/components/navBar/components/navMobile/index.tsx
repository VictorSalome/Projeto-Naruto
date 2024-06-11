import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import { Drawer, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} toggle={toggleDrawer} size={20} />
        <Drawer anchor="top" open={isOpen} onClose={toggleDrawer}>
          <div className="flex justify-end mr-3">
            <Hamburger toggled={isOpen} toggle={toggleDrawer} size={20} />
          </div>
          <div className="">
            <List>
              <ListItem>
                <Link to="/" onClick={toggleDrawer}>
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/explore-world" onClick={toggleDrawer}>
                  História do anime
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/explore-characters" onClick={toggleDrawer}>
                  Personagens
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/explore-clans" onClick={toggleDrawer}>
                  Clãs
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/search-clans" onClick={toggleDrawer}>
                  Explorar clãs
                </Link>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </>
  );
};
