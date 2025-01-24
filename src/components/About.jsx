import { Avatar, Grid } from "@mui/material";
import { useTheme } from "../context/Context";

const About = () => {

    const { darkTheme } = useTheme()

    const handleScroll = () => {
        const targetElement = document.getElementById('about');

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    return (

        <>
            <div className={`${darkTheme ? 'bg-gray-800 text-white' : 'bg-white'} pt-28 sm:pt-48`} id='about'>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" >
                        <Grid item xs={12} sm={6} md={6} textAlign="left">
                            <div>
                                <h2 className="text-lg font-bold tracking-tight sm:text-lg mb-10">Hola 👋, soy Jennifer Salazar</h2>
                                <h2 className="text-6xl font-bold tracking-tight sm:text-5xl mb-10">Ingeniera de sistemas en formación</h2>

                                <p className="mt-6 text-xl leading-8">
                                    Desarrolladora de software con experiencia en desarrollo web y móvil. Persona autodidacta, proactiva y orientada a resultados.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'end' } }}>
                            <Avatar src='https://raw.githubusercontent.com/jenni-03/portfolio/main/src/assets/foto-p.jpg' sx={{ width: '20rem', height: '20rem', cursor: 'pointer', ':hover': { transform: 'scale(1.05)' } }} onClick={handleScroll} />
                        </Grid>
                    </Grid>
                </div>

            </div>
        </>
    )
}

export default About;
