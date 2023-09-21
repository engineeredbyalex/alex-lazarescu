import React from 'react';

function Page({ children, background }) {
    return (
        <div style={{ backgroundColor: background }} className='page'>
            {children}
        </div>
    );
}

export default Page;