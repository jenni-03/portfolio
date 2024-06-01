import About from '../components/About'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Technologies from '../components/Technologies'
import { ArrowUpward } from '@mui/icons-material'
import Projects from '../components/Projects'

function Home () {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Technologies />
      <Contact />
      <Footer />

      <button aria-label='Arrow Up' id='arrowUp' className='scroll-to-top' onClick={scrollToTop}>
        <ArrowUpward className='scroll-to-top-icon' />
      </button>
    </>
  )
}

export default Home
