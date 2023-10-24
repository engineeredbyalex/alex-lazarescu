import Button from '@/components/common/buttons/Button'
import Image from 'next/image'
import React from 'react'

function ProjectBox(props) {
    return (
        <div className='w-[40rem] h-auto bg-[#F4E869] flex items-center justify-center flex-col rounded-2xl'>
            <Image src={'/'} width={500} height={300} />
            <div className='flex flex-col'>
                <p>{props.title}</p>
                <p>{props.desc}</p>
                <p>{props.tech}</p>
            </div>
            <div className='w-[50%] mb-10'>
                <Button link={props.link} text="Vezi Proiect" type="outline" color="#000" />
            </div>
        </div>
    )
}

export default ProjectBox