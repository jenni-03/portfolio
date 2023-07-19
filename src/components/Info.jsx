const Info = ({ darkTheme }) => {
  return (
    <section className={`${darkTheme ? 'bg-gray-800 text-white' : 'text-gray-900'} relative isolate overflow-hidden px-6 py-4 sm:py-8 lg:px-8`}>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">

        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-8">Skills</h2>

        <blockquote className="text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
          <p className="mb-8">
            I'm a self-taught person, always willing to learn and adapt to new technologies and development environments. I consider myself a dedicated professional,
            with a great motivation to overcome obstacles and achieve goals.
          </p>
          <p>
            During my academic background, I have acquired knowledge in areas such as programming, system designs, applying skills such as project resolution, and database management.
          </p>
        </blockquote>

      </div>
    </section>
  )
}

export default Info;