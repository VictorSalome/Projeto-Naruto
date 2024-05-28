import { Button, Typography } from "@mui/material";

import { Link } from "react-router-dom";

export const ExploreClansPages = () => {
  return (
    <>
      <div>
        <div className="flex flex-col ">
          <div className="mt-2 flex flex-col ">
            <Typography className="text-center">
              <h1 className="text-2xl font-naruto ">Clas em Naruto</h1>
            </Typography>

            <img
              src="https://img.quizur.com/f/img6166c8fe7e98e5.77316732.png?lastEdited=1634126082"
              alt="clans"
              className="flex flex-col justify-center items-center p-3 md:w-[50rem] md:flex md:mx-auto"
            />

            <div className="flex flex-col text-justify items-center justify-center mt-4">
              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                className="flex text-justify items-center w-11/12 justify-center"
              >
                No universo de Naruto, os "clãs" são grupos familiares ou
                étnicos que compartilham características específicas, como
                habilidades únicas, linhagens sanguíneas especiais, e até mesmo
                tradições e crenças culturais distintas.
                <br />
                <br />
                Esses clãs desempenham um papel significativo na narrativa,
                contribuindo para a riqueza e complexidade do mundo ninja.
                Alguns clãs são conhecidos por suas habilidades excepcionais em
                combate, enquanto outros se destacam por suas aptidões em áreas
                como cura, inteligência estratégica, entre outros. O conflito e
                a cooperação entre os diferentes clãs são elementos fundamentais
                para o enredo de Naruto, influenciando as relações entre
                personagens e o desenvolvimento da trama.
              </Typography>

              <div className="mt-5 mb-10">
                <Link to="/search-clans">
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
                    Faça uma busca por clãs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
