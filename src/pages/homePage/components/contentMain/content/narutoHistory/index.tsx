import { Typography } from "@mui/material";

export const NarutoHistory = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Typography variant="h5" component="div" style={{ marginBottom: "1rem" }}>
        Naruto
      </Typography>
      <Typography variant="h6" component="div" style={{ marginBottom: "1rem" }}>
        Naruto: A Jornada do Ninja Determinado
      </Typography>
      <Typography
        sx={{ mb: 1.5 }}
        color="text.secondary"
        className="flex  text-justify items-center w-11/12 justify-center"
      >
        Naruto é uma série de mangá e anime criada por Masashi Kishimoto.
        <br />
        <br />
        A história gira em torno de Naruto Uzumaki, um jovem ninja da Vila
        Oculta da Folha, que tem o sonho de se tornar o Hokage, o líder de sua
        vila e o ninja mais forte de todos. Naruto nasceu com o chakra (energia
        espiritual) da Raposa de Nove Caudas selado dentro dele, o que o tornou
        um pária na vila, pois muitos o temiam e o evitavam por causa do poder
        da raposa. No entanto, Naruto é determinado e otimista, buscando ganhar
        o respeito dos outros através de suas próprias habilidades.
        <br />
        <br />
        Ao longo da história, Naruto forma laços de amizade com outros ninjas,
        como Sasuke Uchiha e Sakura Haruno, e é treinado por Kakashi Hatake. Ele
        também participa de missões perigosas e enfrenta inimigos poderosos,
        incluindo membros da organização criminosa Akatsuki.
        <br />
        <br />A jornada de Naruto é marcada por superação de desafios,
        aprendizado de novas habilidades de ninjutsu, genjutsu e taijutsu, e a
        busca pela compreensão e aceitação de si mesmo e dos outros. A série
        explora temas de amizade, coragem, sacrifício e redenção, culminando na
        realização do sonho de Naruto de se tornar o Hokage e proteger sua vila.
      </Typography>
    </div>
  );
};
