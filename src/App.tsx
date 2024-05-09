import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flex: 1 }}>
            <img
              className="w-12 h-12 "
              src="https://via.placeholder.com/150"
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
}

export default App;
