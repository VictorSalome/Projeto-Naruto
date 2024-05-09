import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

SwiperCore.use([Navigation]);

export const Carousel = () => {
  const narutoImages = [
    "https://wallpaperaccess.com/full/119705.jpg",
    "https://wallpaperaccess.com/full/204044.jpg",
    "https://wallpaperaccess.com/full/204042.jpg",
    "https://wallpaperaccess.com/full/204045.jpg",
  ];
  return (
    <div className="App">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} // Define o intervalo de troca das imagens para 3 segundos
      >
        {narutoImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Naruto Image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
