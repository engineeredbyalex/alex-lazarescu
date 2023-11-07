import React from 'react'

import Center from '../../layout/content/Center'
import QRCode from "@/public/qr.png"
import Image from 'next/image'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

function Footer() {
    return (
        <div className='h-auto w-screen bg-[#F4E869] py-[5rem]'>
            <div className='lg:ml-[30px] lg:mr-[30px]'>
                <div className='flex items-center justify-evenly flex-col lg:flex-row text-center gap-5'>
                    <div className=' flex items-center justify-center flex-col text-center'>
                        <h4 className="text-[#000] text-[40px] leading-[2.5rem] lg:leading-[4rem] uppercase font-bold">Alexandru Lăzărescu</h4>
                    </div>
                    <div className=' flex flex-row gap-5'>
                        <SocialIcon bgColor='black' url='https://github.com/engineeredbyalex' />
                        <SocialIcon bgColor='black' url='https://www.linkedin.com/in/alexandru-lazarescu-784031252/' />
                        <SocialIcon bgColor='black' url='https://www.instagram.com/nusuntlaza/' />
                        <SocialIcon bgColor='black' url='dev.lazarescu.alexandru@gmail.com' />
                    </div>
                    <div className='w-full flex items-center justify-center flex-col gap-5'>
                        <Image src={QRCode} width={150} height={150} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer