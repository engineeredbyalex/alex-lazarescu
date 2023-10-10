// importing useEffect
import React, { useEffect } from 'react';
// importing image
import Image from 'next/image';
import Hero_Image from '@/assets/headshot.jpeg';
// importing gsap
import { gsap } from 'gsap';
import { Expo } from 'gsap';
// 
import { RevealWrapper } from 'next-reveal';
import { FullBackgroundButton } from '../common/buttons/buttons';
import { OutlineToFillButton } from '../common/buttons/buttons';
import Wrapper from '../common/layout/Wrapper';
// 
import ConnecTM from "@/assets/projects/connectm.png"
import Openweather from "@/assets/projects/openweather.png"
import WikiSearch from "@/assets/projects/wikiSearch.png"
import ProjectBox from '@/components/common/box/Project_Box';




function Hero_Component() {
    const projectsData = [
        {
            imageSrc: ConnecTM,
            projectName: 'MAYBEE',
            projectDescription: 'Magazin online',
            techStack: 'Next.JS 13, MongoDB',
            projectLink: 'Next.JS 13, MongoDB',
        },
        {
            imageSrc: Openweather,
            projectName: 'Numele Proiectului 2',
            projectDescription: 'Descrierea scurtă a proiectului 2.',
            techStack: 'Tech Stack 2',
            projectLink: 'Tech Stack 2',
        },
        {
            imageSrc: WikiSearch,
            projectName: 'Wiki Search',
            projectDescription: 'Descrierea scurtă a proiectului 3.',
            techStack: 'Tech Stack 3',
            projectLink: 'Tech Stack 3',
        },
    ];


    return (
        <div className='min-h-screen w-screen bg-[#DBDBDB] overflow-hidden flex items-center justify-center flex-col'>
            <div className='max-w-[1024px] flex flex-col ml-[30px] mr-[30px] lg:ml-[0px] lg:mr-[0px]'>
                <div className='  flex flex-col items-center justify-center gap-[30px] lg:items-end lg:justify-start lg:flex-row mt-[10rem] lg:mt-[5rem]'>
                    <Image width={200} height={200} src={Hero_Image}></Image>
                    <div className='flex gap-[5px] flex-col'>
                        <h4 className='text-[#3f3f3f] font-bold uppercase'>Lăzărescu Alexandru</h4>
                        <p className='text-[#3f3f3f] font-bold uppercase'>Web Developer și Designer UI/UX</p>
                    </div>
                </div>
                <div className="h-full w-full flex items-center justify-center lg:items-start lg:justify-start flex-col mt-[10rem] ">
                    <RevealWrapper origin="bottom" duration={500} delay={500} reset={false}>
                        <h4 className=" text-[30px]  uppercase text-[#3F3F3F] mb-8">
                            Proiectele mele
                        </h4>
                    </RevealWrapper>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2">
                        {projectsData.map((project, index) => (
                            <RevealWrapper key={index} origin="bottom" duration={500} delay={1000 + index * 500} reset={false}>
                                <ProjectBox {...project} />
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Hero_Component;