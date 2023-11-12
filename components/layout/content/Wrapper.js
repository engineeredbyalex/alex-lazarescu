import React from 'react'

function Wrapper({ children }) {
    return (
        <div className='w-[2048px] flex justify-center min-h-[100vh] overflow-hidden'>{children}</div>
    )
}

export default Wrapper