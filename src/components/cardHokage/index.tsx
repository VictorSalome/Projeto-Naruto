import { Card as CardComponent } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface ICardHokage {
  title: string;
  src: string;
  name: string;
}

export const CardHokage = ({ title, src, name }: ICardHokage) => {
  return (
    <CardComponent sx={{ minWidth: 135 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 16, fontFamily: "Naruto" }}
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>

        <Typography variant="h5" component="div">
          <img src={src} alt="Hokage" style={{ width: "100%" }} />
        </Typography>
        <Typography
          sx={{ fontSize: 15, mt: 1.5, fontFamily: "Naruto" }}
          color="text.secondary"
          gutterBottom
        >
          {name}
        </Typography>
      </CardContent>
    </CardComponent>
  );
};
