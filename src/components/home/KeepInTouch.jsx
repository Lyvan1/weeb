import React from 'react';
import shapes from '../../assets/images/Shapes.png';
import H1 from "../global/H1.jsx";
import PurpleSpan from "../global/PurpleSpan.jsx";
import arrowRight from "../../assets/icons/arrow-right.png";

const KeepInTouch = () => {
    return (
        <section className={'h-[572px] lg:w-[1440px] mt-[110px] lg:mt-[0px]  mb-[80px] lg:mb-[0px]'}>
            <div className={'flex flex-col lg:flex-row  gap-[110px] justify-between h-[392px]'}>
                {/* Left side */}
                <div className={'flex items-center w-[30%] h-full self-center'}>
                    <img src={shapes} alt="shape"/>
                </div>

                {/* right side */}
                <div className={'flex flex-col lg:justify-between justify-center items-center lg:items-start text-center lg:text-left lg:w-[70%]'}>

                    <p className={'font-bold '}> LE WEB, UN ECOSYSTÈME EN CONSTANTE ÉVOLUTION </p>
                    <H1> Restez informé des <br/> dernières <PurpleSpan>tendances</PurpleSpan></H1>


                    <p className={'px-[80px] lg:px-[0px] mt-[30px] lg:mt-[0px]'}>
                        Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques
                        SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !
                    </p>

                    <button className={'w-[260px] flex font-bold mt-[30px] lg:mt-[0px]'}>
                        <span> Explorer les ressources </span>
                        <img src={arrowRight} alt="arrowRight"/>
                    </button>
                </div>
            </div>


        </section>
    );
};

export default KeepInTouch;