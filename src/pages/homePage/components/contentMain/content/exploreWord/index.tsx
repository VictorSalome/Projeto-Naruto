import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ExploreWord = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Typography variant="h5" component="div" style={{ marginBottom: "1rem" }}>
        Venha explorar
      </Typography>
      <Typography variant="h6" component="div" style={{ marginBottom: "1rem" }}>
        Explore o mundo dos personagens de Naruto
      </Typography>
      <div>
        <div className="flex items-center justify-center">
          <img
            src="https://miro.medium.com/v2/resize:fit:2000/0*R52lzA8m-PbN62Qz"
            alt="logo-ninja"
            className="flex flex-col justify-center items-center p-3"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            className="flex text-justify items-center w-11/12 justify-center"
          >
            Venha explorar o vasto universo de Naruto, onde personagens
            extraordinários e aventuras emocionantes aguardam por você! Navegue
            por um mundo repleto de ninjas habilidosos, jutsus poderosos e
            missões épicas. Embarque em jornadas incríveis, descubra segredos
            ocultos e enfrente desafios que testarão sua coragem e determinação.
            <br />
            <br />
            Conheça heróis lendários como Naruto Uzumaki, Sasuke Uchiha e Sakura
            Haruno, cujas jornadas de crescimento, amizade e superação cativaram
            milhões de fãs ao redor do mundo. Explore vilões temíveis como
            Orochimaru, Akatsuki e outros antagonistas que desafiam nossos
            heróis a cada passo do caminho.
            <br />
            <br />
            Com imagens deslumbrantes, histórias envolventes e personagens
            inesquecíveis, o mundo de Naruto está pronto para ser explorado por
            você. Prepare-se para uma experiência única, repleta de emoção,
            aprendizado e momentos que ficarão gravados em sua memória para
            sempre. Junte-se à jornada e descubra o que faz de Naruto uma
            obra-prima do mundo dos animes e mangás!
          </Typography>
        </div>
      </div>

      <div className="mt-5 mb-10">
        <Link to="/explore-world">
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
            Explore o mundo
          </Button>
        </Link>
      </div>
    </div>
  );
};
