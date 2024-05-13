import { Typography } from "@mui/material";
import { CarouselComponent } from "../../../../../../components";

export const ExploreWord = () => {
  const images = [
    "https://i2.wp.com/getwallpapers.com/wallpaper/full/f/1/2/1105107-best-naruto-team-7-wallpapers-2560x1600-laptop.jpg",
    "https://wallpaper.forfun.com/fetch/db/db786d21d302826e9474a94fc6d5fc6e.jpeg",
    "https://i.ebayimg.com/images/g/-o4AAOSwYoFfjVAJ/s-l1200.webp",
    "https://wallpaperset.com/w/full/f/b/f/446981.jpg",
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <Typography variant="h5" component="div" style={{ marginBottom: "1rem" }}>
        Venha explorar
      </Typography>
      <Typography variant="h6" component="div" style={{ marginBottom: "1rem" }}>
        Explore o mundo dos personagens de Naruto
      </Typography>
      <div className="w-96 mb-20">
        <CarouselComponent
          images={images}
          slidesPerView={3}
          autoplay={false}
          slideClassName="w-full h-36"
        />
      </div>
    </div>
  );
};
