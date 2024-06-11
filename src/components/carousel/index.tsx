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
}

export const CarouselComponent: React.FC<IPropsCarousel> = ({
  images,
  slidesPerView,
  autoplay,
}) => {
  return (
    <div className="App cursor-pointer">
      <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerView}
        autoplay={autoplay}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex justify-center items-center">
              <img
                src={image}
                alt={`Naruto Image ${index + 1}`}
                className="h-60 w-full object-cover object-top md:h-[30rem]"
              />
              <div className="absolute inset-0 bg-black opacity-45"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                <p className="text-center font-bold font-naruto md:text-2xl">
                  {index === 0
                    ? " Eu nunca volto atras na minha palavra. Esse e o meu jeito ninja."
                    : index === 1
                    ? "Eu sou apenas um ninja de nivel genin, mas vou me tornar Hokage um dia!"
                    : index === 2
                    ? " Eu sou aquele que vai superar todos os obstaculos!"
                    : " O trabalho duro supera o talento natural"}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
