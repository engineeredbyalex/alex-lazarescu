import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

import Wrapper from '@/components/layout/content/Wrapper';
import Center from '@/components/layout/content/Center';
import Menu_Icon from '@/components/common/icons/Menu_Icon';
import Link from 'next/link';
import Logo from "@/public/logo/small_Logo_alt.png"
import Image from 'next/image';
import { RevealWrapper } from 'next-reveal';
import { easeInOut } from 'framer-motion';

export default function Navigation_Bar() {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (toggle) {
            gsap.to(".navigation_bar", { backgroundColor: '#000' })
            gsap.to(".navigation_bar", { height: '100vh', delay: 1, zIndex: 3 })
            gsap.to(".menu_icon", { background: '#fff' })
            gsap.to(".menu_icon_line", { width: '40px' })
            gsap.to(".nav_link", { opacity: '1', })
            gsap.to(".nav_link_1", { transform: 'translateX(0px)', delay: 1.5, duration: 1.5, ease: easeInOut })
            gsap.to(".nav_link_2", { transform: 'translateX(0px)', delay: 1.5, duration: 1.5, ease: easeInOut })
            gsap.to(".nav_link_3", { transform: 'translateX(0px)', delay: 1.5, duration: 1.5, ease: easeInOut })
            gsap.to(".nav_link_4", { transform: 'translateX(0px)', delay: 1.5, duration: 1.5, ease: easeInOut })
        } else {
            gsap.to(".navigation_bar", { height: '15vh', delay: 1.5, zIndex: 0 })
            gsap.to(".navigation_bar", { backgroundColor: 'transparent', delay: 2 })
            gsap.to(".menu_icon", { background: '#000' })
            gsap.to(".menu_icon_line", { width: '30px' })
            gsap.to(".nav_link", { opacity: '0', delay: 1.5 })
            gsap.to(".nav_link_1", { transform: 'translateX(-1000px)', delay: 1, duration: 1.5, ease: easeInOut })
            gsap.to(".nav_link_2", { transform: 'translateX(1000px)', delay: 1, duration: 1.5, ease: easeInOut })
            gsap.to(".nav_link_3", { transform: 'translateX(-1000px)', delay: 1, duration: 1.5, ease: easeInOut })
            gsap.to(".nav_link_4", { transform: 'translateX(1000px)', delay: 1, duration: 1.5, ease: easeInOut })
        }
    }, [toggle]);


    const menuOptions = ['Acasă', 'Despre mine', 'Proiecte', 'Contact']
    return (
        <div className='navigation_bar'>
            <div className='navigation_bar_container'>
                <Center>
                    <Image src={Logo} width={200} height={200}></Image>
                    <div onClick={() => setToggle(!toggle)}>
                        <Menu_Icon />
                    </div>
                </Center>
            </div>
            <div className='absolute top-0 left-0 right-0 bottom-0 w-screen h-screen flex items-center justify-center flex-col text-center'>
                <Link className='' href={'/'}>
                    <h3 className='nav_link nav_link_1'>Acasă</h3>
                </Link>
                <Link className='' href={'/'}>
                    <h3 className='nav_link nav_link_2'>Despre mine</h3>
                </Link>
                <Link className='' href={'/'}>
                    <h3 className='nav_link nav_link_3'>Proiecte</h3>
                </Link>
                <Link className='' href={'/'}>
                    <h3 className='nav_link nav_link_4'>Contact</h3>
                </Link>
                {/* <div className='nav_link'>
                    {menuOptions.map((option, index) => (
                        <div key={index} className='flex'>
                            {option.split('').map((letter, letterIndex) => (
                                <h3 key={letterIndex} className='text-[#fff]'>
                                    <RevealWrapper origin='bottom' delay={500}>
                                        {letter}
                                    </RevealWrapper>
                                </h3>
                            ))}
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}
