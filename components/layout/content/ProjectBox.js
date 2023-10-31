import Button from '@/components/common/buttons/Button';
import Image from 'next/image';
import React from 'react';

function ProjectBox(props) {
    return (
        <div className='w-[40rem] h-auto bg-[#F4E869] flex items-center justify-center flex-col rounded-2xl'>
            <div className="relative w-full h-96">
                <Image src={props.Image} alt={props.title} layout="fill" objectFit="cover" />
            </div>
            <div className='flex flex-col items-center justify-center mb-5'>
                <p className='text-[40px] font-bold'>{props.title}</p>
                <p className='text-[24px] font-semibold'>{props.desc}</p>
                <p className='text-[20px] font-semibold'>{props.tech}</p>
            </div>
            <div className='w-[50%] mb-10'>
                <Button link={props.link} text="Vezi Proiect" type="outline" color="#000" />
            </div>
        </div>
    );
}

export default ProjectBox;
