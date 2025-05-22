import React from 'react';
import Input from "../form/Input.jsx";

const FormLogIn = () => {
    return (
        <div className={'mt-10 px-[30px]'}>
            <form
                className='border border-[var(--weebPrimaryColor)] max-w-2xl mx-auto p-8 bg-[var(--weebFormBackground)] rounded-2xl shadow-md'>
                <div className='flex flex-col gap-10'>
                    <Input name={'email'} placeholder={'Votre email'} type={'email'}/>
                    <Input name={'password'} placeholder={'Votre mot de passe'} type={'password'}/>
                </div>
            </form>
        </div>
);
};

export default FormLogIn;