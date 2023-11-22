import Navigation_Bar from '@/components/common/header/Navigation_Bar';
import Page from '@/components/layout/page/Page';
import React from 'react';
import QRCode from '@/public/assets/qr.png';
import Image from 'next/image';
import { RevealWrapper } from 'next-reveal';
import Footer from '@/components/common/footer/Footer';
import { FaRegClipboard } from "react-icons/fa";

export default function Contact() {
    const email = 'dev.lazarescu.alexandru@gmail.com';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {

        });
    };
    return (
        <div className="overflow-x-hidden relative ">
            <Navigation_Bar />
            <div className="flex flex-col lg:flex-row h-screen mt-[15vh]">
                <div className="w-full lg:w-1/2 flex items-center justify-center flex-col text-center mb-10 h-[50vh]">
                    <RevealWrapper delay={1200}>
                        <h3 className="uppercase text-[#000] leading-[2rem] lg:leading-[5rem] font-[300]">Dezvoltator Web</h3>
                    </RevealWrapper>
                    <RevealWrapper>
                        <h1 className="uppercase text-[#000] leading-[3rem] lg:leading-[6rem] font-[600]">Alexandru Lăzărescu</h1>
                    </RevealWrapper>
                    <RevealWrapper delay={1000}>
                        <p className="text-[#000] leading-[1.5rem] lg:leading-[2rem] mb-5">
                            Dacă doriți să luați legătura cu mine, vă rog să mă contactați folosind informațiile de mai jos:
                        </p>
                    </RevealWrapper>
                    <RevealWrapper delay={1400}>
                        <div className="flex flex-col items-center justify-center mb-5 lg:gap-5  lg:ml-[30px]">
                            <p className="text-[#000] leading-[1.5rem] lg:leading-[1rem] border px-3 py-3 border-black mb-5 lg:mb-0">
                                Email: <a href={`mailto:${email}`}>{email}</a>
                            </p>
                            <button onClick={copyToClipboard} className="px-3 py-3 bg-[#9b9b9b] text-white rounded-lg flex items-center justify-center gap-5 ">
                                <h6 >
                                    Apasă pe adresa de email pentru a-mi trimite un mesaj sau aici pentru a copia adresa de email.</h6>
                                <FaRegClipboard size={30} />
                            </button>
                        </div>
                    </RevealWrapper>

                </div>
                <div className="w-full lg:w-1/2 flex items-center lg:items-start justify-center ">

                    <RevealWrapper delay={1800}>
                        <Image width={250} height={250} src={QRCode} />
                    </RevealWrapper>
                </div>
            </div>
            <Footer />
        </div>
    );
}
