import { Card as CardComponent } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const Card = () => {
  return (
    <CardComponent sx={{ minWidth: 175 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Primeiro Hokage
        </Typography>

        <Typography variant="h5" component="div">
          <img
            src="https://img.wattpad.com/c4d02758b6204388c08d5c1290265387a994a9a2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5a4d685770304b454e346a4266773d3d2d31322e313633623463333734303339666436353139383539323333303934332e6a7067?s=fit&w=720&h=720"
            alt="Hokage"
          />
        </Typography>
        <Typography
          sx={{ fontSize: 16, mt: 1.5 }}
          color="text.secondary"
          gutterBottom
        >
          Hashirama Senju
        </Typography>
      </CardContent>
    </CardComponent>
  );
};
