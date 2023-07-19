import { useState } from "react"
import About from "../components/About"
import Footer from "../components/Footer"
import Info from "../components/Info"
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import Tecnologias from "../components/Tecnologias"

function Home() {

    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    let ds = 1

    let s = ds + 2;
    console.log(s)

    return (
        <>
            <Navbar className='navbar' darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <About darkTheme={darkTheme} />
            <Skills darkTheme={darkTheme} />
            <Info darkTheme={darkTheme} />
            <Tecnologias darkTheme={darkTheme} />
            <Footer />
        </>
    )
}

export default Home