import Navigation_Bar from '@/components/common/header/Navigation_Bar'
import Page from '@/components/layout/page/Page'
import React from 'react'
import QRCode from "@/public/qr.png"
import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'

export default function contact() {
    return (
        <div>
            <Navigation_Bar />
            <Page>
                <div className='flex flex-col w-full overflow-x-hidden lg:flex-row'>
                    <div className='w-1/2 flex items-center justify-center flex-col text-center'>
                        <RevealWrapper>
                            <h4 className='text-[#F4E869] leading-[2rem] lg:leading-[2rem] uppercase font-light'>WEB DEVELOPER</h4>
                        </RevealWrapper>
                        <RevealWrapper>
                            <h2 className='text-[#F4E869] leading-[2rem] lg:leading-[4rem] uppercase font-light mb-5'>Alexandru Lăzărescu</h2>
                        </RevealWrapper>
                        <RevealWrapper>
                            <p className='text-[#F4E869] leading-[1.5rem] lg:leading-[2rem] mb-5'>Dacă doriți să luați legătura, vă rog să mă contactați folosind informațiile de mai jos:</p>
                        </RevealWrapper>
                        <RevealWrapper>
                            <p className='text-[#F4E869] leading-[1.5rem] lg:leading-[2rem] mb-5'>Email: dev.lazarescu.alexandru@gmail.com</p>
                        </RevealWrapper>
                        <RevealWrapper>
                            <p className='text-[#F4E869] leading-[1.5rem] lg:leading-[2rem] mb-5'>Număr de telefon: 0770-119-506</p>
                        </RevealWrapper>
                    </div>
                    <div className='w-1/2 flex items-center justify-center'>
                        <Image width={300} height={300} src={QRCode} />
                    </div>
                </div>
            </Page>
        </div>
    )
}
