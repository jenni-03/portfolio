import { useTheme } from '../context/Context'

const Skills = () => {
  const { darkTheme } = useTheme()

  return (
    <section className={`${darkTheme ? 'bg-gray-800 text-white' : 'text-gray-900'} relative isolate overflow-hidden px-6 py-4 sm:py-8 lg:px-8`}>
      <div className='mx-auto max-w-2xl lg:max-w-4xl'>

        <h2 className='text-center text-3xl font-bold tracking-tight mb-8 sm:text-4xl '>Skills</h2>

        <div className='sm:text-center text-lg font-semibold sm:text-2xl'>
          <p className='mb-8'>
            I have an excellent ability to work in a team and communicate effectively. I am looking for a challenging opportunity that allows me to apply my skills
            and experience in a collaborative work environment.
          </p>
          <p>
            I'm passionate about taking advantage of all available online resources with the goal of becoming a competent developer, capable of finding sophisticated
            solutions to complex and demanding problems.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Skills
