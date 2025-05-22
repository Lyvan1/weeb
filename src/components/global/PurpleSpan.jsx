import React from 'react';

const PurpleSpan = ({children}) => {
    return (
        <span className={'font-bold text-[var(--weebSecondaryColor)]'}>
            {children}
        </span>
    );
};

export default PurpleSpan;