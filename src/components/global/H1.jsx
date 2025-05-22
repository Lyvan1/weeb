import React from 'react';

const H1 = ({children}) => {
    return (
        <h1 className={'lg:text-[72px] font-bold leading-none md:text-[56px] sm:text-[50px] text-[30px]'}>
            { children }
        </h1>
    );
};

export default H1;