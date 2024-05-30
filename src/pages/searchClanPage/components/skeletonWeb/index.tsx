import {
  Card,
  CardActionArea,
  CardContent,
  InputAdornment,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";

export const SkeletonWeb = () => {
  return (
    <>
      <div className="mt-5 flex justify-center">
        <TextField
          className="w-[60rem]"
          id="standard-search"
          type="search"
          variant="outlined"
          color="warning"
          placeholder="Insira um clã"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="text-2xl">
                <CiSearch />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="flex flex-wrap justify-center mt-3">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="p-3 w-1/4 mx-2 flex-grow-0 ">
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <Skeleton
                  variant="rectangular"
                  className="w-full "
                  height={300}
                />
                <CardContent>
                  <Typography variant="h6" component="div" fontWeight={600}>
                    <Skeleton width="100%" />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="mt-2"
                  >
                    <Skeleton width="80%" />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
