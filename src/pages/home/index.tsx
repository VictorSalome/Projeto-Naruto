import { ViewCarousel } from "@mui/icons-material";

export const Home = () => {
  const images = [
    { src: "https://via.placeholder.com/500x300", alt: "Image 1" },
    { src: "https://via.placeholder.com/500x300", alt: "Image 2" },
    { src: "https://via.placeholder.com/500x300", alt: "Image 3" },
    { src: "https://via.placeholder.com/500x300", alt: "Image 4" },
  ];
  return (
    <div>
      {" "}
      <ViewCarousel autoPlay interval={3000} animation="fade">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: "100%", height: "auto" }}
          />
        ))}
      </ViewCarousel>
    </div>
  );
};
