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
    <CardComponent sx={{ minWidth: 175 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>

        <Typography variant="h5" component="div">
          <img src={src} alt="Hokage" />
        </Typography>
        <Typography
          sx={{ fontSize: 16, mt: 1.5 }}
          color="text.secondary"
          gutterBottom
        >
          {name}
        </Typography>
      </CardContent>
    </CardComponent>
  );
};
