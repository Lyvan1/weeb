import React from 'react';

const H2 = ({children}) => {
    return (
        <h2 className={'lg:text-[56px] md:text-[50px] sm:text-[50px] text-[40px]'}>
            {children}
        </h2>
    );
};

export default H2;