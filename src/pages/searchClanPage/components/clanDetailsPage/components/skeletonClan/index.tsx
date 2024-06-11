import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";

export const SkeletonClan = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-3 p-3">
      {[...Array(8)].map((_, index) => (
        <Card
          key={index}
          sx={{
            width: 350,
            height: "400px",
            margin: "10px",
          }}
        >
          <CardMedia
            component={Skeleton}
            height="140"
            className="w-full h-32 md:h-40 lg:h-52"
          />
          <CardContent>
            <Typography
              component={Skeleton}
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                fontFamily: "Naruto",
                marginBottom: "10px",
              }}
            />
            <Typography
              component={Skeleton}
              style={{
                marginBottom: "5px",
                fontFamily: "Naruto",
                fontWeight: "bold",
                color: "#f77f00",
              }}
            />
            <Typography
              component={Skeleton}
              style={{
                marginBottom: "5px",
                fontFamily: "Naruto",
                fontWeight: "bold",
                color: "#f77f00",
              }}
            />
            <Typography
              component={Skeleton}
              style={{
                marginBottom: "5px",
                fontFamily: "Naruto",
                fontWeight: "bold",
                color: "#f77f00",
              }}
            />
            <Typography
              component={Skeleton}
              style={{
                marginBottom: "5px",
                fontFamily: "Naruto",
                fontWeight: "bold",
                color: "#f77f00",
              }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
