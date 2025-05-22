import React from 'react';
import Input from "../components/form/Input.jsx";
import H1 from "../components/global/H1.jsx";
import FormLogIn from "../components/auth/Form_LogIn.jsx";

const LogIn = () => {
    return (
        <div className={'mb-10'}>
            <H1>Se connecter</H1>
            <FormLogIn />
        </div>
);
};

export default LogIn;