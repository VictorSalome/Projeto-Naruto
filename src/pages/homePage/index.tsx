import { CarouselComponent } from "../../components/carousel";
import { ContentMain } from "./components";

export const HomePage = () => {
  const narutoImages = [
    "https://observatoriodocinema.uol.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&height=675&format=.jpg&quality=91&imagick=uploads-observatoriodocinema.seox.com.br/2023/09/naruto-capa.jpg",
    "https://wallpaper.forfun.com/fetch/db/db786d21d302826e9474a94fc6d5fc6e.jpeg",
    "https://miro.medium.com/v2/resize:fit:1400/0*qKksSvflsm_XHdI7.jpg",
    "https://wallpaperset.com/w/full/f/b/f/446981.jpg",
  ];

  return (
    <>
      <CarouselComponent
        images={narutoImages}
        slidesPerView={1}
        autoplay={true}
    
      />
      <ContentMain />
    </>
  );
};
