import React from 'react';
import desktopImage from '../../assets/images/desktop.png';
import H1 from "../global/H1.jsx";

const HeroBanner = () => {
    return (
        <section className={'flex flex-col items-center justify-center mt-10 lg:w-[1440px] '}>

            {/* title */}
            <H1>
                Explorer le <span className={'font-normal text-[#C084FC]'}> Web </span> sous toutes <br/> ses facettes
            </H1>

            {/* paragraphe */}
            <p className={'text-[18px] lg:w-[834px] lg:px-[0px]  px-[80px] mt-8'}>
                Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances,
                technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital,
                notre blog vous offre du contenu de qualité pour rester à la pointe.
            </p>

            {/*button div */}
            <div className={'w-[519px] mt-8 flex lg:flex-row flex-col items-center sm:flex-row md:flex-row gap-[16px]'}>
                <button className={'bg-[var(--weebPrimaryColor)] font-bold h-[56px] w-[237px] rounded-sm'}>
                    Découvrir les articles
                </button>
                <button className={'bg-none border border-2 border-white  font-bold h-[56px] w-[237px] rounded-sm'}>
                    S'abonner à la newsletter
                </button>
            </div>

            {/* desktop image */}
            <div className={'mt-8 flex justify-center'}>
                <img className={'px-[60px]'} src={desktopImage} alt={'Desktom image'}/>
            </div>


        </section>
    );
};

export default HeroBanner;