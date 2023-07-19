import { Tooltip } from "@mui/material"

const Tecnologias = ({ darkTheme }) => {

  const tecnologias = [
    { url: `${darkTheme ? 'react-dark.webp' : 'react.png'}`, alt: 'React.js' },
    { url: 'js.png', alt: 'Javascript' },
    { url: 'css.svg', alt: 'CSS' },
    { url: 'html.png', alt: 'HTML' },
    { url: `${darkTheme ? 'java-dark.png' : 'java.png'}`, alt: 'Java' },
    { url: `${darkTheme ? 'github-dark.webp' : 'github.png'}`, alt: 'Github' },
    { url: 'mui.png', alt: 'Material UI' },
    { url: 'bootstrap.png', alt: 'Bootstrap' },
    { url: 'spring-boot.png', alt: 'Springboot' },
    { url: 'angular.png', alt: 'Angular' },
  ]

  return (
    <div className={`${darkTheme ? 'bg-gray-800 text-white' : 'text-gray-900'} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Technologies</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {
            tecnologias.map((tecnologia) => {
              return (
                <Tooltip key={tecnologia.alt} title={tecnologia.alt} arrow>

                  <img loading="lazy" key={tecnologia.alt}
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={`https://raw.githubusercontent.com/jenni-03/portfolio/main/src/assets/${tecnologia.url}`}
                    alt={tecnologia.alt}
                    width={158}
                    height={48}
                  />
                </Tooltip>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Tecnologias;