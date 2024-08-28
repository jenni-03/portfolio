import { Container, Grid } from '@mui/material'
import Project from './Project'
import { useTheme } from '../context/Context'

const Projects = () => {
  const { darkTheme } = useTheme()

  return (
    <div className={`${darkTheme ? 'bg-gray-800' : ''} pt-28 pb-10 sm:pb-20`} id='projects'>
      <div className='mx-auto max-w-8xl px-4 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className={`text-3xl font-bold tracking-tight ${darkTheme ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>Algunos proyectos que he apoyado y desarrollado</h2>
        </div>
        <Container>
          <Grid container spacing={3} sx={{ py: 5 }}>
            <Grid item xs={12} sm={12} md={12}>
              <Project
                title='Watti App'
                tech={
                    [
                      { nombre: 'Kotlin', icono: 'kotlin.png' },
                      { nombre: 'Node JS', icono: 'node.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Watti Energy es una aplicación móvil diseñada para la gestión integral de sistemas solares. Permite a los usuarios seguir el proceso completo de solicitud de renting solar, desde la inicial hasta la finalización, incluyendo la posibilidad de solicitar visitas técnicas. La app también facilita el monitoreo detallado del estado de la planta solar, ofreciendo información sobre el consumo y la generación de energía en tiempo real, con gráficos explicativos diarios, semanales y mensuales.'
                imagenes={['watti-1.png', 'watti-2.png', 'watti-3.png', 'watti-4.png', 'watti-5.png']}
              />

            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Project
                title='Nuvi App'
                tech={
                    [
                      { nombre: 'Dart', icono: 'dart.png' },
                      { nombre: 'Flutter', icono: 'flutter.png' },
                      { nombre: 'Node JS', icono: 'node.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Aplicación móvil para la gestión de condominios, la cual permite a los residentes y administradores realizar diferentes actividades de manera sencilla y rápida'
                imagenes={['app1.png', 'app11.png', 'app111.png', 'app1111.png', 'app11111.png', 'app111111.png', 'app1111111.png', 'app11111111.png']}
              />

            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Project
                title='Simulador UFPSPRO'
                github={['https://github.com/jenni-03/UFPS_PRO.git', 'https://github.com/luc4shk/simuladorAYD']}
                img='simulador.png'
                tech={
                    [
                      { nombre: 'Node JS', icono: 'node.webp' },
                      { nombre: 'React JS', icono: `${darkTheme ? 'react-dark.webp' : 'react.webp'}` }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Simulador de Pruebas Saber PRO para la preparación de los estudiantes de Ingeniería de Sistemas de la Universidad Francisco de Paula Santander'
                imagenes={['sim1.png', 'sim11.png', 'sim111.png', 'sim1111.png']}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Projects
