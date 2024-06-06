import { CardMedia } from "@mui/material";
import { NarutoHistory } from "./content/narutoHistory";
import { ExploreWord } from "./content/exploreWord";

export const ContentMain = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-5 h-32 w-52">
        <CardMedia
          component="img"
          image="https://narutodb.xyz/_next/image?url=%2Fnaruto-head.png&w=828&q=75"
          alt="Naruto Shippuden"
        />
      </div>
      <div>
        <NarutoHistory />
      </div>


      <div>
        <ExploreWord />
      </div>
    </div>
  );
};
