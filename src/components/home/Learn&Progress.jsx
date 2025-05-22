import React from 'react';
import H1 from "../global/H1.jsx";
import PurpleSpan from "../global/PurpleSpan.jsx";
import arrowRight from "../../assets/icons/arrow-right.png";
import desktopImage from '../../assets/images/desktop.png';

const LearnProgress = () => {
    return (
        <section
            className={'h-[640px] sm:mt-[110px] mt-[110px]  md:mt-[0px] lg:mt-[0px] flex lg:flex-row flex-col items-center  lg:w-[1440px]'}>

            {/*Left side*/}
            <div className={'lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start'}>
                <p className={'font-bold'}> DES RESSOURCES POUR TOUS LES NIVEAUX </p>

                <H1>
                    {/* large screen title */}
                    <div className={'hidden lg:block'}>
                        <PurpleSpan>Apprenez</PurpleSpan> et <br/> <PurpleSpan>progressez</PurpleSpan>
                    </div>

                    {/* mobile title */}
                    <div className={'lg:hidden'}>
                        <PurpleSpan>Apprenez</PurpleSpan> et  <PurpleSpan>progressez</PurpleSpan>
                    </div>

                </H1>

                <p className={'mt-[32px] mb-[32px] w-[400px] sm:w-[648px] md:w-[648px]'}>
                    Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir
                    vos connaissances, nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre
                    efficacement.
                </p>

                <button className={'w-[260px] flex font-bold'}>
                    <span> Explorer les ressources </span>
                    <img  src={arrowRight} alt="arrowRight"/>
                </button>
            </div>

            {/*Rifght side */}
            <div className={'lg:w-1/2 flex justify-center'}>
                <img className={''} src={desktopImage} alt={'Desktom image'}/>
            </div>
        </section>
    );
};

export default LearnProgress;