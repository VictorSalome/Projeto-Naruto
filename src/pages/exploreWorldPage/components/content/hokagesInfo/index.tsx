import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { CardHokage } from "../../../../../components/cardHokage";
import { Link } from "react-router-dom";

export const HokagesInfo = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <img
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*-p9KdeOq6kbXpwuf.jpg"
          alt="logo-ninja"
          className="flex flex-col justify-center items-center p-3"
        />
      </div>

      <div className="flex flex-col text-justify items-center justify-center mt-2 mb-2">
        <Typography>
          <h1 className="text-2xl  font-naruto">Konoha</h1>
        </Typography>
        <Typography
          sx={{ mb: 1 }}
          color="text.secondary"
          className="flex  text-justify items-center w-11/12 justify-center"
        >
          A Vila da Folha, também conhecida como Konoha, é o lar de uma das mais
          renomadas e respeitadas aldeias ninja do universo de Naruto.
          Localizada no País do Fogo, essa vila é um símbolo de coragem,
          determinação e lealdade.
          <br />
          <br />
          Ao longo dos anos, a Vila da Folha foi governada por diversos líderes
          poderosos e carismáticos, conhecidos como Hokages. O título de Hokage
          é concedido ao ninja mais forte e habilidoso da aldeia, aquele que
          lidera e protege seu povo com sabedoria e bravura.
          <br />
          <br />
        </Typography>

        <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              <span>
                <CardHokage
                  name="Hashirama Senju"
                  title="Primeiro Hokage"
                  src="https://img.wattpad.com/c4d02758b6204388c08d5c1290265387a994a9a2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5a4d685770304b454e346a4266773d3d2d31322e313633623463333734303339666436353139383539323333303934332e6a7067?s=fit&w=720&h=720"
                />
              </span>
            </Grid>
            <Grid xs={6} fontSize={16}>
              <span>
                <CardHokage
                  name="Tobirama Senju"
                  title="Segundo Hokage"
                  src="https://uploads.spiritfanfiction.com/historias/capas/202205/imagine-hot--tobirama-senju-23888175-140520221336.jpg"
                />
              </span>
            </Grid>
            <Grid xs={6}>
              <span>
                {" "}
                <CardHokage
                  name="Hiruzen Sarutobi"
                  title="Terceiro Hokage"
                  src="https://pm1.aminoapps.com/6477/93103ddc6e2822aa8d996d1b616a6883a1134619_00.jpg"
                />
              </span>
            </Grid>
            <Grid xs={6}>
              <span>
                {" "}
                <CardHokage
                  name="Minato Namikaze"
                  title="Quarto Hokage"
                  src="https://i.pinimg.com/1200x/da/24/ca/da24cab64a6e0d9ab797269428efc06c.jpg"
                />
              </span>
            </Grid>
          </Grid>
        </Box>

        <Typography
          sx={{ mt: 1.5 }}
          color="text.secondary"
          className="flex  text-justify items-center w-11/12 justify-center"
        >
          Os Hokages são figuras lendárias na história de Konoha, cada um
          deixando sua marca única no desenvolvimento e crescimento da vila.
          Desde o lendário Hashirama Senju, o Primeiro Hokage, até o icônico
          Naruto Uzumaki, o Sétimo Hokage, esses líderes moldaram a Vila da
          Folha em um centro de poder e excelência ninja.
          <br />
          <br />
          Além de seu papel como líderes militares e políticos, os Hokages
          representam valores como amizade, perseverança e sacrifício. Eles são
          exemplos a serem seguidos por todos os habitantes de Konoha,
          inspirando gerações de ninjas a se esforçarem para alcançar o melhor
          de si mesmos em busca da paz e da harmonia entre as nações shinobi.
        </Typography>
        <div className="mt-5 mb-10">
          <Link to="/explore-clans">
            <Button
              style={{ backgroundColor: "#f77f00" }}
              variant="contained"
              startIcon={
                <img
                  src="https://www.iconninja.com/files/468/145/137/naruto-icon.svg"
                  alt="leaf-seven"
                  width="30"
                  height="30"
                />
              }
              className="mt-5"
            >
              Conheça sobre os clãs
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
