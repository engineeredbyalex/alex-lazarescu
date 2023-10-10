import React from 'react'

export default function Wrapper({ children }) {
    return (
        <div className='max-w-[1024px] flex items-center justify-center'>
            {children}
        </div>
    )
}
