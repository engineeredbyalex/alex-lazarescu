// 
import Button from '@/components/common/buttons/Button';
// 
import React from 'react';

function ServiceBox(props) {
    return (
        <div className=' lg:w-full lg:h-[15rem]  bg-[#000] flex items-center justify-center flex-col rounded-2xl text-[#fff] '>
            <div className='flex flex-col items-center justify-center mb-5 px-3 py-3'>
                <p className=' font-bold uppercase text-[20px] lg:text-[28px]'>{props.service}</p>
                <p className='text-[16px] font-semibold uppercase'>{props.desc}</p>
            </div>
        </div>
    );
}


export default ServiceBox;
