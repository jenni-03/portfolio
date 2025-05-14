import { Container, Grid } from "@mui/material";
import Project from "./Project";
import { useTheme } from "../context/Context";

const projectsData = (darkTheme) => [
  {
    title: "Watti App",
    tech: [
      // { nombre: "Dart", icono: "dart.png" },
      // { nombre: "Flutter", icono: "flutter.png" },
      // { nombre: "Springboot", icono: "spring-boot.webp" },
    ],
    descripcion:
      "Watti Energy es una aplicación móvil diseñada para la gestión integral de sistemas solares. Permite a los usuarios seguir el proceso completo de solicitud de renting solar, desde la inicial hasta la finalización, incluyendo la posibilidad de solicitar visitas técnicas. La app también facilita el monitoreo detallado del estado de la planta solar, ofreciendo información sobre el consumo y la generación de energía en tiempo real, con gráficos explicativos diarios, semanales y mensuales.",
    imagenes: [
      "watti-1.jpg",
      "watti-2.jpg",
      "watti-3.jpg",
      "watti-4.jpg",
      "watti-5.jpg",
    ],
  },
  {
    title: "Nuvi App",
    tech: [
      // {
      //   nombre: "React Native",
      //   icono: darkTheme ? "react-dark.webp" : "react.webp",
      // },
      // { nombre: "Node JS", icono: "node.webp" },
    ],
    descripcion:
      "Aplicación móvil para la gestión de condominios, la cual permite a los residentes y administradores realizar diferentes actividades de manera sencilla y rápida",
    imagenes: [
      "app1.png",
      "app11.png",
      "app111.png",
      "app1111.png",
      "app11111.png",
      "app111111.png",
      "app1111111.png",
      "app11111111.png",
    ],
  },
  {
    title: "Mediador Pedagógico",
    github: ["https://github.com/jenni-03/mediador-pedagogico"],
    live: "https://mediador-pedagogico.netlify.app/",
    img: "mediador-pedagogico-1.png",
    tech: [
      {
        nombre: "React JS",
        icono: darkTheme ? "react-dark.webp" : "react.webp",
      },
    ],
    descripcion:
      "Mediador Pedagógico para la enseñanza de estructuras de datos lineales, árboles binarios y árboles n-arios.",
    imagenes: [
      "mediador-pedagogico-1.png",
      "mediador-pedagogico-2.png",
      "mediador-pedagogico-3.png",
      "mediador-pedagogico-4.png",
    ],
  },
  {
    title: "Simulador UFPSPRO",
    github: [
      "https://github.com/jenni-03/UFPS_PRO.git",
      "https://github.com/luc4shk/simuladorAYD",
    ],
    img: "simulador.png",
    tech: [
      { nombre: "Node JS", icono: "node.webp" },
      {
        nombre: "React JS",
        icono: darkTheme ? "react-dark.webp" : "react.webp",
      },
    ],
    descripcion:
      "Simulador de Pruebas Saber PRO para la preparación de los estudiantes de Ingeniería de Sistemas de la Universidad Francisco de Paula Santander",
    imagenes: ["sim1.png", "sim11.png", "sim111.png", "sim1111.png"],
  },
];

const Projects = () => {
  const { darkTheme } = useTheme();
  const projects = projectsData(darkTheme);

  return (
    <section
      className={`${darkTheme ? "bg-gray-800" : ""} pt-28 pb-10 sm:pb-20`}
      id="projects"
    >
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            className={`text-3xl font-bold tracking-tight ${
              darkTheme ? "text-white" : "text-gray-900"
            } sm:text-4xl`}
          >
            Proyectos en los que he participado y liderado
          </h2>
        </header>
        <Container>
          <Grid container spacing={3} sx={{ py: 5 }}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <Project {...project} darkTheme={darkTheme} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default Projects;
