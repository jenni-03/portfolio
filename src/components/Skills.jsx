import { Container, Grid } from "@mui/material";
import Project from "./Project";

const Skills = ({ darkTheme }) => {
    return (
        <div className={`${darkTheme ? 'bg-gray-800' : ''} py-28 sm:pb-20`} id="projects">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className={`text-3xl font-bold tracking-tight ${darkTheme ? 'text-white' : 'text-gray-900'} sm:text-4xl`} >Some projects that I have supported and developed</h2>
                </div>
                <Container sx={{ zIndex: 10 }}>
                    <Grid container spacing={3} sx={{ my: 5 }}>
                        <Grid item xs={12} sm={4} md={4}>
                            <Project
                                nombre="HOLA"
                                github={[""]}
                                public=""
                                img="https://raw.githubusercontent.com/jenni-03/portfolio/main/src/assets/nombre-img"
                                tecs={
                                    [
                                        { nombre: 'React.js', icono: `${darkTheme ? 'react-dark.webp' : 'react.png'}` },
                                        { nombre: 'Node JS', icono: 'node.png' },
                                        { nombre: 'MongoDB', icono: 'mongo.png' },
                                    ]
                                }
                                darkTheme={darkTheme}
                            />

                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Project
                                nombre=""
                                github={[""]}
                                public=""
                                img=""
                                tecs={
                                    [
                                        { nombre: 'React.js', icono: `${darkTheme ? 'react-dark.webp' : 'react.png'}` },
                                        { nombre: 'Javascript', icono: 'js.png' },
                                        { nombre: 'Tailwind', icono: 'tailwind.png' },
                                    ]
                                }
                                darkTheme={darkTheme}
                            />

                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Project
                                nombre=""
                                github={[""]}
                                public=""
                                img=""
                                tecs={
                                    [
                                        { nombre: 'Angular', icono: 'angular.png' },
                                        { nombre: 'Typescript', icono: 'typescript.svg' },
                                        { nombre: 'Material UI', icono: 'mui.png' },
                                    ]
                                }
                                darkTheme={darkTheme}
                            />

                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Skills;