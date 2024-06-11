import { Drawer, IconButton, Typography, List, ListItem, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const FilterDrawer = ({
  open,
  onClose,
  onLetterChange,
}: {
  open: boolean;
  onClose: () => void;
  onLetterChange: (letter: string) => void;
}) => (
  <Drawer anchor="left" open={open} onClose={onClose}>
    <div style={{ width: 300, padding: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Filtro de Personagem</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>

      <ListItem className="cursor-pointer" onClick={() => onLetterChange("")}>
        Mostrar Todos
      </ListItem>

      <List className="">
        <Grid container spacing={1}>
          {Array.from(Array(26)).map((_, i) => (
            <Grid item xs={2} key={i}>
              <ListItem
                sx={{ cursor: "pointer" }}
                onClick={() => onLetterChange(String.fromCharCode(65 + i))}
              >
                {String.fromCharCode(65 + i)}
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </List>
    </div>
  </Drawer>
);


