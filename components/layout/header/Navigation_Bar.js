import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

import Wrapper from '../content/Wrapper';
import Center from '../content/Center';
import Menu_Icon from '@/components/common/icons/Menu_Icon';
import Link from 'next/link';

export default function Navigation_Bar() {
    const [toggle, setToggle] = useState(false);

    const animateNavigation = (height, backgroundColor, color, width) => {
        gsap.to(".navigation_bar", { height, backgroundColor, duration: 1, delay: 0.5 });
        gsap.to(".logo", { color, duration: 0.5, delay: 0.2 });
        gsap.to(".menu_icon", { backgroundColor: color, duration: 0.5, delay: 0.2 });
        gsap.to(".menu_icon_line", { width, duration: 0.5, delay: 0.2 });
    };

    useEffect(() => {
        if (toggle === false) {
            animateNavigation('15vh', '#000', '#F4E869', '30px');
        } else if (toggle === true) {
            animateNavigation('100vh', '#F4E869', '#000', '40px');
        }
    }, [toggle]);

    return (
        <div className='navigation_bar z-[2]'>
            <div className='h-[15vh] w-full flex items-center justify-center absolute'>
                <Wrapper>
                    <Center>
                        <div className='z-[2]'>
                            <p className='logo font-bold italic uppercase leading-[2rem] lg:leading-[3rem] text-[#000]'>Alexandru <br /> Lăzărescu</p>
                        </div>
                        <div className='cursor-pointer z-[2]' onClick={() => setToggle(!toggle)}>
                            <Menu_Icon />
                        </div>
                    </Center>
                </Wrapper>
            </div>
            {toggle ? (
                <div className='absolute w-full h-full flex items-center justify-center top-0 left-0 right-0 bottom-0'>
                    <div className=' flex items-center justify-between'>
                        <div className='text-[#000] font-light uppercase text-center'>
                            <Link href={"/"}>
                                <p className='hover:bg-[#f5eb86] hover:py-7 w-[100vw] py-5 transition-all ease-in-out duration-500'>Acasă</p>
                            </Link>
                            <Link href={"/"}>
                                <p className='hover:bg-[#f5eb86] hover:py-7 w-[100vw] py-5 transition-all ease-in-out duration-500'>Proiecte</p>
                            </Link>
                            <Link href={"/"}>
                                <p className='hover:bg-[#f5eb86] hover:py-7 w-[100vw] py-5 transition-all ease-in-out duration-500'>Despre mine</p>
                            </Link>
                            <Link href={"/"}>
                                <p className='hover:bg-[#f5eb86] hover:py-7 w-[100vw] py-5 transition-all ease-in-out duration-500'>Contact</p>
                            </Link>
                            <Link href={"/"}>
                                <p className='hover:bg-[#f5eb86] hover:py-7 w-[100vw] py-5 transition-all ease-in-out duration-500'>Blog</p>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
