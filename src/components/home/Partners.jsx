import React from 'react';
import H2 from "../global/H2.jsx";
import logoArtVenue from "../../assets/images/logos/logo-artVenue.png";
import logoShells from "../../assets/images/logos/logo-shells.png";
import logoSmartFinder from "../../assets/images/logos/logo-smartFinder.png";
import logoWaves from "../../assets/images/logos/logo-waves.png";
import logoZoomerr from "../../assets/images/logos/logo-zoomerr.png";

const Partners = () => {
    return (
        <section className={'h-[334px] lg:w-[1440px] '}>
            {/*Title*/}
            <H2>
                Ils nous font confiance
            </H2>
            {/* Logo partners */}
            <div className={'flex lg:flex-row sm:flex-col md:flex-row flex-col gap-6 items-center justify-center lg:justify-between mt-[80px] px-[80px] mb-[80px]'}>
                <img src={logoArtVenue} alt="logo Art Venu"/>
                <img src={logoShells} alt="logo Shells"/>
                <img src={logoSmartFinder} alt="logo Smart Finder"/>
                <img src={logoWaves} alt="logo Waves"/>
                <img src={logoZoomerr} alt="logo Zoomerr"/>
            </div>
        </section>
    );
};

export default Partners;