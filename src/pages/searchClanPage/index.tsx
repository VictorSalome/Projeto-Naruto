import { Typography } from "@mui/material";
import { useGetClan } from "../../hooks";

export const SearchClanPage = () => {
  const { data } = useGetClan();

  const clans = data?.clans;
  console.log(clans);

  return (
    <div>
      {clans?.map((clan) => (
        <div className="flex flex-col justify-center items-center " key={clan.id}>
          <img
            src={clan.characters[0].images[0]}
            alt={clan.name}
            className="w-40 h-40 rounded-full"
          />
          <Typography
            variant="h5"
            component="div"
            style={{ marginBottom: "1rem" }}
          >
            {clan.name}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            style={{ marginBottom: "1rem" }}
          >
            {clan.characters.length} personagens
          </Typography>
        </div>
      ))}
    </div>
  );
};
