import Menu_Icon from "../icons/Menu_Icon";
import Logo from '@/public/logo/logo.svg'
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useState, useEffect } from "react";

export default function Header() {
    const [toggle, setToggle] = useState(false)


    useEffect(() => {
        if (toggle == true) {
            gsap.to(".header", { height: '100vh', width: '100vw', background: '#000', position: 'absolute', top: 0 })
            gsap.to(".header_list", { display: 'none', })

        }
        else {
            gsap.to(".header", { height: '15vh', width: '100vw', background: 'transparent', position: 'absolute', top: 0 })
            gsap.to(".header_list", { display: 'flex', flexDirection: 'row' })
        }
    }, [toggle])
    return (
        <div className='header'>
            <div className="container">
                <div className="header_container">
                    <Image width="80" height={80} className="header_logo" src={Logo} alt="logo" />
                    {/* <div onClick={() => setToggle(!toggle)} className='header_menu_container'>
                        <div className='header_menu'></div>
                        <div className='header_menu'></div>
                        <div className='header_menu'></div>
                    </div> */}
                </div>
                <div className="header_list">
                    <Link href={'/'}><h5 className="header_link hvr-sweep-to-right">Portfolio</h5></Link>
                    <Link href={'/'}><h5 className="header_link hvr-sweep-to-right">About</h5></Link>
                    <Link href={'/'}><h5 className="header_link hvr-sweep-to-right">Contact</h5></Link>
                </div>
            </div>
        </div>
    );
}
