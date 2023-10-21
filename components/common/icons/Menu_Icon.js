import React from 'react'

function Menu_Icon() {
    return (
        <div className='w-[40px] h-[40px] flex justify-center items-start flex-col gap-2'>
            <div className='w-[40px] h-[5px] rounded-xl bg-[#000] menu_icon'></div>
            <div className='w-[30px] h-[5px] rounded-xl bg-[#000] menu_icon menu_icon_line'></div>
            <div className='w-[40px] h-[5px] rounded-xl bg-[#000] menu_icon'></div>
        </div>
    )
}

export default Menu_Icon