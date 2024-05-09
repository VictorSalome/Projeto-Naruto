import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export const NavBar = () => {
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#f77f00" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1 }}>
            <img
              className="w-12 h-12 "
              src="https://i.pinimg.com/originals/74/45/6c/74456c2bd47666329b9dee5dcad4ece7.png"
              alt=""
            />
          </Typography>
          <div>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
