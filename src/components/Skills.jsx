import { useTheme } from '../context/Context'

const Skills = () => {
  const { darkTheme } = useTheme()

  return (
    <section className={`${darkTheme ? 'bg-gray-800 text-white' : 'text-gray-900'} relative isolate overflow-hidden px-6 py-4 sm:py-8 lg:px-8`}>
      <div className='mx-auto max-w-2xl lg:max-w-4xl'>

        <h2 className='text-center text-3xl font-bold tracking-tight mb-8 sm:text-4xl '>Habilidades</h2>

        <div className='sm:text-center text-lg font-semibold sm:text-2xl'>
          <p className='mb-8'>
            Tengo una excelente capacidad para trabajar en equipo y comunicarme eficazmente. Busco una oportunidad estimulante que me permita aplicar mis aptitudes
            y experiencia en un entorno de trabajo colaborativo.
          </p>
          <p>
            Me apasiona aprovechar todos los recursos en línea disponibles con el objetivo de convertirme en una desarrolladora competente, capaz de encontrar soluciones
            sofisticadas a problemas complejos y exigentes.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Skills
