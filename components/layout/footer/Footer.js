import React from 'react'

import Center from '../content/Center'
import QRCode from "@/public/qr.png"
import Image from 'next/image'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

function Footer() {
    return (
        <div className='h-auto lg:h-[50vh] w-screen bg-[#F4E869] py-[10rem]'>
            <div className='lg:ml-[30px] lg:mr-[30px]'>
                <div className='w-full flex items-center justify-center flex-col lg:flex-row text-center'>
                    <div className='w-full flex items-center justify-center flex-col text-center'>
                        <h4 className="text-[#000] text-[40px] leading-[2rem] lg:leading-[4rem] uppercase font-bold">Alexandru Lăzărescu</h4>
                        <p className="text-[#000] text-[30px] leading-[2rem] lg:leading-[4rem] uppercase font-light">Toate drepturile rezervate</p>
                    </div>
                    <div className='text-[#000]  uppercase text-center'>
                        <Link href={"/"}>
                            <p className='text-[28px]'>Acasă</p>
                        </Link>
                        <Link href={"/projects"}>
                            <p className='text-[28px]'>Proiecte</p>
                        </Link>
                        <Link href={"/about"}>
                            <p className='text-[28px]'>Despre mine</p>
                        </Link>
                        <Link href={"/contact"}>
                            <p className='text-[28px]'>Contact</p>
                        </Link>
                        <Link href={"/blog"}>
                            <p className='text-[28px]'>Blog</p>
                        </Link>
                    </div>
                    <div className='w-full flex items-center justify-center flex-col gap-5'>
                        <Image src={QRCode} width={200} height={200} />
                        <div className=' flex flex-row gap-5'>
                            <SocialIcon bgColor='black' url='https://github.com/engineeredbyalex' />
                            <SocialIcon bgColor='black' url='https://www.linkedin.com/in/alexandru-lazarescu-784031252/' />
                            <SocialIcon bgColor='black' url='https://www.instagram.com/nusuntlaza/' />
                            <SocialIcon bgColor='black' url='dev.lazarescu.alexandru@gmail.com' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer