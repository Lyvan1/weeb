import React from 'react';
import Navbar from "../components/global/navbar.jsx";
import HeroBanner from "../components/home/HeroBanner.jsx";
import Partners from "../components/home/Partners.jsx";
import LearnProgress from "../components/home/Learn&Progress.jsx";
import KeepInTouch from "../components/home/KeepInTouch.jsx";

const Home = () => {
    return (
        <section className={'flex flex-col items-center'}>
            <HeroBanner />
            <Partners />
            <LearnProgress />
            <KeepInTouch />
        </section>
    );
};

export default Home;