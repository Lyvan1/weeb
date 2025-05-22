import React from 'react';
import Input from '../form/Input.jsx';

const FormContact = () => {
    return (
        <div className={'mt-10 px-[30px]'}>
            <form className='border border-[var(--weebPrimaryColor)] max-w-4xl mx-auto p-8 bg-[var(--weebFormBackground)] rounded-2xl shadow-md'>
                {/* Ligne Nom / Prénom */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <Input name={'lastname'} placeholder={'Votre nom'} type={'text'}/>
                    <Input name={'firstname'} placeholder={'Votre prénom'} type={'text'} />
                </div>

                {/* Ligne Email */}
                <div className='mb-6'>
                    <Input name={'email'} placeholder={'exemple@email.com'} type={'email'}/>
                </div>

                {/* Ligne Message */}
                <div className='mb-8'>
                    <Input name={'message'} placeholder={'Votre message'} type={'textarea'}/>
                </div>

                {/* Bouton */}
                <div className='text-center'>
                    <button
                        type='submit'
                        className='bg-purple-600 text-white font-semibold py-3 px-10 rounded-lg hover:bg-purple-700 transition duration-300'
                    >
                        Contact
                    </button>
                </div>
            </form>

        </div>
    );
};

export default FormContact;