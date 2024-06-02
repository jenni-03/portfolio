import { GitHub } from '@mui/icons-material'
import { Tooltip, styled } from '@mui/material'

const urlImg = 'https://raw.githubusercontent.com/jenni-03/portfolio/main/src/assets/'

const ImagenEstilo = styled('img')({
  maxWidth: '100%',
  height: '100%',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'scale(1.1)'
  },
  borderRadius: '5%'

})

const ImagenEstiloGrande = styled('img')({
  maxWidth: '100%',
  height: '100%',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'scale(1.5)'
  },
  borderRadius: '5%'

})

const handleShowPage = (arr) => {
  if (arr.length > 1) {
    window.open(arr[0], '_blank')
    window.open(arr[1], '_blank')
  } else {
    window.open(arr[0], '_blank')
  }
}

const Project = ({ title, img, tech, github, darkTheme, descripcion, imagenes }) => {
  return (

    <div className={`px-1 pt-14 mx-auto lg:px-8 ${darkTheme ? 'text-white' : ''}`}>

      {img
        ? <ImagenEstilo loading='lazy' src={urlImg + img} alt={title} />
        : null
      }

      <div className='flex justify-between items-center pt-8'>

        <h2 className='text-2xl font-bold tracking-tight'>
          {title}
        </h2>

        <div className='flex'>
          {
            tech.map(item => {
              return (
                <Tooltip key={item.nombre} title={item.nombre} arrow>
                  <img
                    src={urlImg + item.icono}
                    className='max-h-8 object-contain mx-0.5'
                    alt={item.nombre}
                  />
                </Tooltip>
              )
            })
          }
        </div>
      </div>

      <div className='gap-8 pt-4'>

        {github ?
          <button
            className={`swing px-6 py-2 border-2 rounded-lg ${darkTheme ? 'text-white border-violet-700 hover:bg-white hover:text-violet-800 hover:border-white' : 'text-violet-800 border-violet-700 hover:bg-violet-800 hover:border-violet-900 hover:text-white'}`}
            onClick={() => handleShowPage(github)}
          >

            <div className='flex items-center gap-2'>
              <GitHub />
              <h2 className='text-lg'>GitHub</h2>
            </div>
          </button>

          : null

        }


        <div className='mt-4'>
          {descripcion}
        </div>

        {
          title != "Nuvi App" ?
            <div className="mt-4 grid grid-cols-2 justify-center gap-4">
              {
                imagenes.map((item, index) => {
                  return (
                    <ImagenEstiloGrande key={index} className='m-2' loading='lazy' src={urlImg + item} alt={title} />
                  )
                })
              }
            </div>
          :
            <div className="mt-4 grid grid-cols-3 justify-center gap-8">
              {
                imagenes.map((item, index) => {
                  return (
                    <ImagenEstilo key={index} className='m-2' loading='lazy' src={urlImg + item} alt={title} />
                  )
                })
              }

            </div>

        }
      </div>
    </div>
  )
}

export default Project
