import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useGetClan } from "../../../../hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type CardInitialProps = {
  onClick?: () => void; // Adicionando a propriedade onClick opcional ao tipo de props
};

export const CardInitial: React.FC<CardInitialProps> = ({ onClick }) => {
  const { data } = useGetClan();
  const clans = data?.clans;

  const [searchTerm] = useState("");
  const navigate = useNavigate();

  const handleCardClick = (clanId: number) => {
    navigate(`/clan/${clanId}`);
  };

  const filteredClans = clans?.filter((clan) =>
    clan.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-wrap justify-center mt-3" onClick={onClick}>
        {filteredClans?.map((clan) => (
          <div
            key={clan.id}
            onClick={() => handleCardClick(clan.id)}
            className="p-2 w-1/2 md:w-1/4"
          >
            <Card sx={{ maxWidth: 180 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={clan.characters[0].images[0]}
                  alt={clan.name}
                  className="w-28 h-28"
                />
                <CardContent>
                  <Typography variant="h6" component="div" fontWeight={600}>
                    Clã <span>{clan.name.split(" ")[0]}</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="mt-2"
                  >
                    Integrantes:
                    <span className="font-bold">{clan.characters.length}</span>
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
