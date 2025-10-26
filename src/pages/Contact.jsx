import React from 'react';
import H1 from "../components/global/H1.jsx";
import FormContact from "../components/Contact/Form_Contact.jsx";

const Contact = () => {
    return (
        <section className={'mb-[30px]'}>
            <div className={'flex flex-col gap-10 items-center '}>
                <H1> Votre avis compte !</H1>
                <p className={'text-[18px] lg:w-[850px] md:w-[750px] sm:w-[600px] md:px-[0px] lg:px-[0px] px-[30px]'}>
                    Votre retour est essentiel pour nous améliorer ! Partagez votre expérience, dites-nous ce que vous aimez
                    et ce que nous pourrions améliorer. Vos suggestions nous aident à faire de ce blog une ressource
                    toujours plus utile et enrichissante.
                </p>
            </div>
            <FormContact />
        </section>
    );
};

export default Contact;