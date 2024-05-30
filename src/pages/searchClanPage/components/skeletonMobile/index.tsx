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

export const SkeletonMobile = () => {
  return (
    <>
      <div className="mt-5 flex justify-center">
        <TextField
          className="w-full"
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
        {/* Exemplo de uso de Skeleton para o Card enquanto os dados carregam */}
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="p-2 w-1/2 md:w-1/4">
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <Skeleton variant="rectangular" height={140} />
                <CardContent>
                  <Typography variant="h6" component="div" fontWeight={600}>
                    <Skeleton />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="mt-2"
                  >
                    <Skeleton />
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
