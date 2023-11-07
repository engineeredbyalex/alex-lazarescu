import Button from '@/components/common/buttons/Button';
import Image from 'next/image';
import React from 'react';

function ProjectBox(props) {
    return (
        <div className='max-w-[40rem] h-auto bg-[#F4E869] flex flex-col items-center justify-center rounded-2xl py-5 px-5'>
            <div className="relative w-[29rem] md:w-[35rem] lg:w-[30rem] h-[25rem]">
                <Image src={props.image} alt={props.title} layout="fill" objectFit="cover" objectPosition='center' />
            </div>
            <div className='flex flex-col items-center justify-center mt-6'>
                <h3 className=' font-semibold text-center leading-8'>{props.title}</h3>
                <h4 className=' text-center mt-4'>{props.desc}</h4>
                <h5 className=' text-center mt-2'>Construit cu: {props.tech}</h5>
            </div>
            <div className='w-full max-w-xs mt-6'>
                <Button link={props.link} text="Vezi Proiect" type="outline" color="#000" />
            </div>
        </div>
    );
}

export default ProjectBox;
