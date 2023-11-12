import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

import Wrapper from '@/components/layout/content/Wrapper';
import Center from '@/components/layout/content/Center';
import Menu_Icon from '@/components/common/icons/Menu_Icon';
import Link from 'next/link';
import Logo from "@/public/logo/small_Logo_alt.png"
import Image from 'next/image';

export default function Navigation_Bar() {
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        const navItems = document.querySelectorAll('.navigation_bar_list a');
        if (toggle) {
            // gsap.to(".navigation_bar", { height: '100vh', duration: 1.5, delay: 1 })
            // gsap.to(".navigation_bar", { backgroundColor: '#000', delay: 1 })
            // gsap.to(".navigation_bar_list", { top: '30%', duration: 2, duration: 2 })
            // gsap.to(".navigation_bar_list", { left: '0%', delay: 1.5, duration: 0, })
            gsap.to(".menu_icon", { background: '#fff' })
        }
        else {
            // gsap.to(".navigation_bar", { height: '15vh', duration: 1.5, delay: 1 })
            // gsap.to(".navigation_bar", { backgroundColor: 'transparent', delay: 1 })
            // gsap.to(".navigation_bar_list", { top: '-1000px', duration: 1.5, duration: 2 })
            // gsap.to(".navigation_bar_list", { left: '-1000px', delay: 2, duration: 2, })
            gsap.to(".menu_icon", { background: '#000' })

        }
    }, [toggle]);

    return (
        <div className='navigation_bar'>
            <div className='navigation_bar_container'>
                <Center>
                    <Image src={Logo} width={150} height={150}></Image>
                    <div onClick={() => setToggle(!toggle)}>
                        <Menu_Icon />
                    </div>
                </Center>
            </div>
            <div className={!toggle ? ('hidden') : ('absolute flex items-center justify-center flex-col h-screen w-screen bg-black text-white')}>
                <Link className='uppercase font-light' href={'/'}>
                    <h3>Acasă</h3>
                </Link>
                <Link className='uppercase font-light' href={'/'}>
                    <h3>Despre mine</h3>
                </Link>
                <Link className='uppercase font-light' href={'/'}>
                    <h3>Proiecte</h3>
                </Link>
                <Link className='uppercase font-light' href={'/'}>
                    <h3>Contact</h3>
                </Link>
            </div>
        </div>
    );
}