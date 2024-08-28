import { Tooltip } from '@mui/material'
import { useTheme } from '../context/Context'

const urlImg = 'https://raw.githubusercontent.com/jenni-03/portfolio/main/src/assets/'

const Technologies = () => {
  const { darkTheme } = useTheme()

  const technologies = [
    { url: 'flutter.png', alt: 'Flutter' },
    { url: 'kotlin.png', alt: 'Kotlin' },
    { url: `${darkTheme ? 'java-dark.webp' : 'java.webp'}`, alt: 'Java' },
    { url: 'js.webp', alt: 'Javascript' },
    { url: 'dart.png', alt: 'Dart' },
    { url: 'spring-boot.webp', alt: 'Springboot' },
    { url: 'node.webp', alt: 'Node JS' },
    { url: 'angular.webp', alt: 'Angular' },
    { url: 'html.webp', alt: 'HTML' },
    { url: 'css.svg', alt: 'CSS' },
    { url: 'mongo.webp', alt: 'Mongo DB' },
    { url: `${darkTheme ? 'github-dark.webp' : 'github.webp'}`, alt: 'Github' },
    { url: 'bootstrap.webp', alt: 'Bootstrap' },
    { url: 'jira.svg', alt: 'Jira' }
  ]

  return (
    <div
      className={`${
        darkTheme ? 'bg-gray-800 text-white' : 'text-gray-900'
      } py-20 sm:py-28`}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-3xl font-bold tracking-tight sm:text-4xl'>
          Tecnologías
        </h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {technologies.map((technology) => {
            return (
              <Tooltip key={technology.alt} title={technology.alt} arrow>
                <img
                  loading='lazy'
                  key={technology.alt}
                  className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                  src={urlImg + technology.url}
                  alt={technology.alt}
                />
              </Tooltip>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Technologies
