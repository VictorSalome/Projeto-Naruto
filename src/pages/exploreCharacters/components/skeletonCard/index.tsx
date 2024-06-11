import { Card, CardActionArea, CardContent, Skeleton } from "@mui/material";

export const SkeletonCard = () => {
  return (
    <Card sx={{ maxWidth: 520, height: "100%" }}>
      <CardActionArea>
        <Skeleton variant="rectangular" height={100} />
        <CardContent>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
