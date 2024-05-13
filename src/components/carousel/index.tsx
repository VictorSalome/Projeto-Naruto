import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";

SwiperCore.use([Navigation, Autoplay]);
interface IPropsCarousel {
  images: string[];
  slidesPerView: number;
  autoplay: boolean;
  slideClassName: string;
}

export const CarouselComponent: React.FC<IPropsCarousel> = ({
  images,
  slidesPerView,
  autoplay,
  slideClassName,
}) => {
  return (
    <div className="App">
      <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        autoplay={autoplay}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Naruto Image ${index + 1}`}
              className={slideClassName}
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
