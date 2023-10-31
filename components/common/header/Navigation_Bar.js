import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

import Wrapper from '../../layout/content/Wrapper';
import Menu_Icon from '@/components/common/icons/Menu_Icon';
import Link from 'next/link';


export default function Navigation_Bar() {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const animateNavigation = (height, backgroundColor, color, width) => {
            const tl = gsap.timeline({});

            tl.to(".navigation_bar", { height, backgroundColor, duration: 1, delay: 0.5 })
                .to(".logo", { color, duration: 1 }, "-=0.5")
                .to(".menu_icon", { backgroundColor: color, duration: 1 }, "-=0.5")
                .from(".navigation_links", { opacity: 0, duration: 0.5 }, "-=0.5");
        };

        if (toggle === false) {
            animateNavigation('15vh', 'transparent', '#F4E869', '30px');
        } else if (toggle === true) {
            animateNavigation('100vh', '#F4E869', '#000', '40px');
        }
    }, [toggle]);

    return (
        <div className='navigation_bar'>
            <div className='h-[15vh] w-full flex items-center justify-center absolute'>
                <Wrapper>
                    <div className='w-full h-full flex items-center justify-between ml-[30px] mr-[30px]'>
                        <div className='z-[2]'>
                            {/* <p className='logo font-light italic uppercase leading-[1.5rem] md:leading-[2rem] lg:leading-[3rem] text-[#000] text-[40px]'>AL</p> */}
                        </div>
                        <div className='cursor-pointer z-[2]' onClick={() => setToggle(!toggle)}>
                            <Menu_Icon />

                        </div>
                    </div>
                </Wrapper>
            </div>
            {toggle ? (
                <div className='absolute w-full h-full flex items-center justify-center top-0 left-0 right-0 bottom-0'>
                    <div className=' flex items-center justify-between'>
                        <div className='text-[#000] font-light uppercase text-center'>
                            <Link href={"/"}>
                                <p className='hover:bg-[#f5eb86] hover:py-7 w-[100vw] py-5 transition-all ease-in-out duration-500'>Acasă</p>
                            </Link>
                            <Link href={"/projects"}>
                                <p className='hover:bg-[#f5eb86] hover:py-7 w-[100vw] py-5 transition-all ease-in-out duration-500'>Proiecte</p>
                            </Link>
                            <Link href={"/about"}>
                                <p className='hover:bg-[#f5eb86] hover:py-7 w-[100vw] py-5 transition-all ease-in-out duration-500'>Despre mine</p>
                            </Link>
                            <Link href={"/contact"}>
                                <p className='hover:bg-[#f5eb86] hover:py-7 w-[100vw] py-5 transition-all ease-in-out duration-500'>Contact</p>
                            </Link>
                            <Link href={"/blog"}>
                                <p className='hover:bg-[#f5eb86] hover:py-7 w-[100vw] py-5 transition-all ease-in-out duration-500'>Blog</p>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
