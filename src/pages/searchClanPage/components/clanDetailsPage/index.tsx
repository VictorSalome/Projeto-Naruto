import { Typography } from "@mui/material";
import { useGetClan } from "../../../../hooks";
import { useParams } from "react-router-dom";

export const ClanDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetClan();
  const clan = data?.clans.find((clan) => clan.id === Number(id));

  console.log("asdsad", clan);
  return (
    <>
      <div>
        {clan ? (
          <>
            <Typography>
              <span>{clan.name}</span>
            </Typography>
          </>
        ) : (
          <Typography variant="h4">Clã não encontrado</Typography>
        )}
      </div>
    </>
  );
};
