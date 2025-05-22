import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./scenes/Home.jsx";
import Navbar from "./components/global/navbar.jsx";
import Footer from "./components/global/Footer.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            {/* Navbar component */}
            <nav>
                <Navbar />
            </nav>
            <main>
                <Home/>
            </main>
            <footer>
                <Footer/>
            </footer>

        </>
    )
}

export default App
