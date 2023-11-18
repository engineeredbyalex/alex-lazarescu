import Navigation_Bar from '@/components/common/header/Navigation_Bar'
import Page from '@/components/layout/page/Page'
import React from 'react'
import QRCode from "@/public/assets/qr.png"
import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'
import Footer from '@/components/common/footer/Footer'

export default function contact() {
    return (
        <div className="overflow-x-hidden relative scroll-smooth">
            <Navigation_Bar />
            <Page>
                <div className='w-full lg:w-1/2 flex items-center justify-center flex-col text-center mb-10 h-[50vh]'>
                    <RevealWrapper delay={1000}>
                        <h3 className=' uppercase  text-[#000] leading-[2.3rem] lg:leading-[5rem] font-[300]  px-5 py-5 rounded-2xl '>
                            Dezvoltator Web
                        </h3>
                        </RevealWrapper>
                        <RevealWrapper>
                        <h1 className='uppercase  text-[#000] leading-[2.3rem] lg:leading-[6rem] font-[600]  px-5 py-5 rounded-2xl'>Alexandru Lăzărescu</h1>
                        </RevealWrapper>
                    <RevealWrapper delay={1200}>
                        <p className='text-[#000] leading-[1.5rem] lg:leading-[2rem] mb-5'>Dacă doriți să luați legătura, vă rog să mă contactați folosind informațiile de mai jos:</p>
                        </RevealWrapper>
                    <RevealWrapper delay={1400}>
                        <p className='text-[#000] leading-[1.5rem] lg:leading-[1rem] '>Email: dev.lazarescu.alexandru@gmail.com</p>
                        </RevealWrapper>
                    <RevealWrapper delay={1600}>
                        <p className='text-[#000] leading-[1.5rem] lg:leading-[1rem] '>Număr de telefon: 0770-119-506</p>
                        </RevealWrapper>
                    </div>
                <div className='w-full lg:w-1/2 flex items-center justify-center'>
                    <RevealWrapper delay={1800}>
                        <Image width={250} height={250} src={QRCode} />
                    </RevealWrapper>
                </div>
            </Page>
            <Footer />
        </div>
    )
}
