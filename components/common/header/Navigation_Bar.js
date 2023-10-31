import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

import Wrapper from '@/components/layout/content/Wrapper';
import Menu_Icon from '@/components/common/icons/Menu_Icon';
import Link from 'next/link';


export default function Navigation_Bar() {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline();

        if (toggle === false) {
            tl.to(".navigation_bar_link", { left: '-1000px', duration: 3, ease: 'power3.inOut' })
                .to(".navigation_bar", { height: '15vh', backgroundColor: 'transparent', duration: 2, delay: -1, ease: 'power3.inOut' })
                .to(".logo", { color: '#F4E869', duration: 2, delay: -1, ease: 'power3.inOut' })
                .to(".menu_icon", { backgroundColor: '#F4E869', duration: 2, delay: -1, ease: 'power3.inOut' })
                .to(".menu_icon_line", { width: '30px', duration: 2, delay: -1, ease: 'power3.inOut' });
        } else if (toggle === true) {
            tl.to(".navigation_bar_link", { left: '0', duration: 2, ease: 'power3.inOut' })
                .to(".navigation_bar", { height: '100vh', backgroundColor: '#F4E869', duration: 2, delay: -1, ease: 'power3.inOut' })
                .to(".logo", { color: '#000', duration: 2, delay: -1, ease: 'power3.inOut' })
                .to(".menu_icon", { backgroundColor: '#000', duration: 2, delay: -1, ease: 'power3.inOut' })
                .to(".menu_icon_line", { width: '40px', duration: 2, delay: -1, ease: 'power3.inOut' });
        }
    }, [toggle]);

    return (
        <div className='navigation_bar'>
            <div className='h-[15vh] w-full flex items-center justify-center absolute'>
                <Wrapper>
                    <div className='w-full h-full flex items-center justify-between ml-[30px] mr-[30px]'>
                        <div className='z-[2]'>
                            {/* Logo */}
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
                            <p className='navigation_bar_link'>Acasă</p>
                        </Link>
                        <Link href={"/projects"}>
                            <p className='navigation_bar_link'>Proiecte</p>
                        </Link>
                        <Link href={"/about"}>
                            <p className='navigation_bar_link'>Despre mine</p>
                        </Link>
                        <Link href={"/contact"}>
                            <p className='navigation_bar_link'>Contact</p>
                        </Link>
                        <Link href={"/blog"}>
                            <p className='navigation_bar_link'>Blog</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
