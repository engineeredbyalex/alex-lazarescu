import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

import Wrapper from '@/components/layout/content/Wrapper';
import Menu_Icon from '@/components/common/icons/Menu_Icon';
import Link from 'next/link';
import Logo from "@/public/logo.png"
import Image from 'next/image';
export default function Navigation_Bar() {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline();

        if (toggle === false) {
            tl.to(".navigation_bar_link", { left: '-1000px', duration: 1, ease: 'power3.easeInOut' })
                .to(".navigation_bar", { height: '15vh', backgroundColor: 'transparent', duration: 1, delay: 2, ease: 'power3.easeInOut' }, '-=1')
                .to(".logo", { color: '#F4E869', duration: 1, ease: 'power3.easeInOut' }, '-=1')
                .to(".menu_icon", { backgroundColor: '#000', duration: 5, ease: 'power3.easeInOut' }, '-=1')
                .to(".menu_icon", { backgroundColor: '#F4E869', duration: 1, ease: 'power3.easeInOut' }, '-=1')
                .to(".menu_icon_line", { width: '30px', duration: 1, ease: 'power3.easeInOut' }, '-=1');
        } else if (toggle === true) {
            tl.to(".navigation_bar", { height: '100vh', backgroundColor: '#F4E869', duration: 1, ease: 'power3.easeInOut' })
                .to(".navigation_bar_link", { left: '0', duration: 1, delay: 2, ease: 'power3.easeInOut' }, '-=0.5')
                .to(".logo", { color: '#000', duration: 1, ease: 'power3.easeInOut' }, '-=0.5')
                .to(".menu_icon", { backgroundColor: '#000', duration: 1, ease: 'power3.easeInOut' }, '-=0.5')
                .to(".menu_icon_line", { width: '40px', duration: 1, ease: 'power3.easeInOut' }, '-=0.5');
        }
    }, [toggle]);

    return (
        <div className='navigation_bar'>
            <div className='h-[15vh] w-full flex items-center justify-center absolute'>
                <Wrapper>
                    <div className='w-full h-full flex items-center justify-between ml-[30px] mr-[30px]'>
                        <div className='z-[2]'>
                            <Image width={150} height={150} src={Logo} alt="Logo" /> {/* Use the Image component correctly */}
                        </div>
                        <div className='cursor-pointer z-[2]' onClick={() => setToggle(!toggle)}>
                            <Menu_Icon />
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div className='absolute w-full h-full flex items-center justify-center top-0 left-0 right-0 bottom-0'>
                <div className='flex items-center justify-between'>
                    <div className='text-[#000] font-light uppercase text-center'>
                        <Link href={"/"}>
                            <h3 className='navigation_bar_link font-medium'>Acasă</h3>
                        </Link>
                        <Link href={"/projects"}>
                            <h3 className='navigation_bar_link font-medium' >Proiecte</h3>
                        </Link>
                        <Link href={"/about"}>
                            <h3 className='navigation_bar_link font-medium'>Despre mine</h3>
                        </Link>
                        <Link href={"/contact"}>
                            <h3 className='navigation_bar_link font-medium'>Contact</h3>
                        </Link>
                        {/* <Link href={"/blog"}>
                            <h3 className='navigation_bar_link font-medium'>Blog</h3>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
