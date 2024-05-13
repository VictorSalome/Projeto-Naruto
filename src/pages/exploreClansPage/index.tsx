import { Typography } from "@mui/material";

export const ExploreClansPages = () => {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center">
          <Typography>
            <h1 className="text-2xl ">Clãs de konoa</h1>
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            className="flex text-justify items-center w-11/12 justify-center"
          >
            Em Konoha, a Vila da Folha, existem vários clãs ninja que
            desempenham papéis importantes na história e na cultura da aldeia.
            Aqui está um breve resumo sobre alguns dos clãs mais conhecidos:
            <br />
            <br />
            Clã Uchiha: Conhecidos por sua habilidade com o Sharingan, um dos
            dōjutsu mais poderosos do mundo ninja. Membros notáveis incluem
            Itachi Uchiha, Sasuke Uchiha e Madara Uchiha. O clã teve uma
            história turbulenta de conflitos internos e rivalidades.
            <br />
            <br />
            Clã Hyuga: Destacado pela habilidade de utilizar o Byakugan, outro
            dōjutsu poderoso que concede visão 360 graus. O clã é dividido em
            duas linhagens principais: a Linhagem Principal (Hyuga) e a Linhagem
            Paralela (Hyuga secundário ou ramo secundário). Hinata Hyuga e Neji
            Hyuga são membros notáveis do clã.
            <br />
            <br />
            Clã Nara: Especialistas em técnicas baseadas em sombras, como o
            Kagemane no Jutsu, que permite controlar e manipular sombras.
            Shikamaru Nara é um dos membros mais famosos do clã, conhecido por
            sua inteligência e estratégia.
            <br />
            <br />
            Clã Akimichi: Conhecidos por suas habilidades de transformação
            física e jutsus de expansão, como o Baika no Jutsu. Choji Akimichi é
            um membro notável do clã, reconhecido por sua força e lealdade.
            <br />
            <br />
            Clã Yamanaka: Especializados em técnicas de controle mental e
            leitura de mentes, como o Shintenshin no Jutsu. Ino Yamanaka é uma
            membra notável do clã, conhecida por suas habilidades em batalha e
            por sua amizade com Sakura Haruno. Estes são apenas alguns dos clãs
            presentes em Konoha, cada um contribuindo com habilidades únicas e
            características distintas para a comunidade ninja da Vila da Folha.
          </Typography>
        </div>
      </div>
    </>
  );
};
