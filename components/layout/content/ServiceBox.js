import Button from '@/components/common/buttons/Button';
import Image from 'next/image';
import React from 'react';

function ServiceBox(props) {
    return (
        <div className='w-[20rem] h-auto bg-[#F4E869] flex items-center justify-center flex-col rounded-2xl'>
            <div className='flex flex-col items-center justify-center mb-5 px-3 py-3'>
                <p className=' font-bold uppercase text-[30px]'>{props.service}</p>
                <p className='text-[24px] font-semibold uppercase'>{props.desc}</p>
            </div>
        </div>
    );
}


export default ServiceBox;
