import { CarouselComponent } from "../../components/carousel";
import { ContentMain } from "./components";

export const HomePage = () => {
  const narutoImages = [
    "https://i2.wp.com/getwallpapers.com/wallpaper/full/f/1/2/1105107-best-naruto-team-7-wallpapers-2560x1600-laptop.jpg",
    "https://wallpaper.forfun.com/fetch/db/db786d21d302826e9474a94fc6d5fc6e.jpeg",
    "https://i.ebayimg.com/images/g/-o4AAOSwYoFfjVAJ/s-l1200.webp",
    "https://wallpaperset.com/w/full/f/b/f/446981.jpg",
  ];

  return (
    <>
      <CarouselComponent
        images={narutoImages}
        slidesPerView={1}
        autoplay={true}
        slideClassName="w-full h-64"
      />
      <ContentMain />
    </>
  );
};
