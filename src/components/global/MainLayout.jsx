import React from 'react';
import Footer from "./Footer.jsx";
import Navbar from "./navbar.jsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <nav>
                <Navbar/>
            </nav>

            <main>
                <Outlet/> {/* routes content */}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default MainLayout;