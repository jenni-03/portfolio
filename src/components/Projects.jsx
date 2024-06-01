import { Container, Grid } from '@mui/material'
import Project from './Project'
import { useTheme } from '../context/Context'

const Projects = () => {
  const { darkTheme } = useTheme()

  return (
    <div className={`${darkTheme ? 'bg-gray-800' : ''} pt-28 pb-10 sm:pb-20`} id='projects'>
      <div className='mx-auto max-w-8xl px-4 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className={`text-3xl font-bold tracking-tight ${darkTheme ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>Some projects that I have supported and developed</h2>
        </div>
        <Container>
          <Grid container spacing={3} sx={{ py: 5 }}>
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
            <Grid item xs={12} sm={12} md={12}>
              <Project
                title='Nuvi App'
                img='app.png'
                tech={
                    [
                      { nombre: 'Dart', icono: 'dart.png' },
                      { nombre: 'Flutter', icono: 'flutter.png' },
                      { nombre: 'Node JS', icono: 'node.webp' }
                    ]
                }
                darkTheme={darkTheme}
                descripcion='Aplicación móvil para la gestión de la información de los estudiantes de la Universidad Francisco de Paula Santander'
                imagenes={['app1.png', 'app11.png', 'app111.png', 'app1111.png', 'app11111.png', 'app111111.png', 'app1111111.png', 'app11111111.png']}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Projects
