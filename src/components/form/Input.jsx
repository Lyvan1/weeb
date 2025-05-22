import React from 'react';

const Input = ({name, type, placeholder}) => {
        const capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        return (
            <>
                {
                    type !== 'textarea' ? (
                        <div>
                            <label htmlFor={name} className='block text-2xl font-medium text-[var(--weebSecondaryColor)] mb-2'>
                                {capitalizeFirstLetter(name)}
                            </label>
                            <input
                                type={type}
                                id={name}
                                className='w-full border text-[var(--weebSecondaryColor)]  p-3 focus:outline-none border-[var(--weebPrimaryColor)] border-l-0 border-r-0 border-t-0 focus:ring-2 focus:ring-white'
                                placeholder={placeholder}
                            />
                        </div>
                    ) : (
                        <div className='mb-8'>
                            <label htmlFor={name} className='block text-2xl font-medium text-[var(--weebSecondaryColor)] mb-2'>
                                {name}
                            </label>
                            <textarea
                                id={name}
                                rows='5'
                                className=' text-[var(--weebSecondaryColor)] border-[var(--weebPrimaryColor)] w-full border border-l-0 border-t-0 border-r-0  rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                placeholder={placeholder}
                            ></textarea>
                        </div>
                    )
                }
            </>


        )
            ;
    }
;

export default Input;