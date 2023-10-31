import React from 'react'

function Center({ children }) {
    return (
        <div className=' w-full h-full flex items-center justify-between  ml-[30px] mr-[30px]'>{children}</div>
    )
}

export default Center