import Hamburger from "hamburger-react";
import { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

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
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Anime" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Personagens" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </>
  );
};
