import { Send } from '@mui/icons-material'
import { useTheme } from '../context/Context'

const Contact = () => {
  const { darkTheme } = useTheme()

  const email = 'jenniferdayanasr@gmail.com'

  const sendEmail = () => {
    const mailtoUrl = `mailto:${email}`
    window.open(mailtoUrl)
  }

  return (
    <section id='contact' className={`${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} relative isolate overflow-hidden px-6 pb-12 sm:pb-32 lg:px-8`}>
      <div className='mx-auto max-w-2xl lg:max-w-4xl'>
        <h2 className='text-center text-3xl font-bold tracking-tight sm:text-4xl mb-7'>Send an email</h2>

        <blockquote className='sm:text-center text-xl font-semibold leading-8  sm:text-2xl sm:leading-9'>

          <div className='flex gap-2'>
            <label htmlFor='email' className='flex w-full'>
              <input type='text' id='email' readOnly className={`${darkTheme ? 'bg-slate-600 text-white border-white' : 'text-slate-600'} bg-black/5 w-full py-1.5 px-3 rounded-lg grid place-items-center  `} value={email} />

              <button aria-label='Send email' className={`flex rounded-xl border-2 py-2 px-4 mx-2 ${darkTheme ? 'text-white bg-violet-900 hover:bg-violet-700 hover:text-white border-violet-900' : 'text-violet-700 hover:bg-violet-700 hover:text-white border-violet-700'}`} onClick={() => sendEmail()}>
                <Send sx={{ fontSize: '2rem' }} />
              </button>
            </label>

          </div>
        </blockquote>
      </div>
    </section>
  )
}

export default Contact
