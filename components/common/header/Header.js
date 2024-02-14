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
            gsap.to(".header", { height: '100vh' })

        }
        else {
            gsap.to(".header", { height: '15vh' })
        }
    }, [toggle])
    return (
        <div className='header'>
            <div className="container">
                <div className="header_container">
                    <Image width="80" height={80} className="header_logo" src={Logo} alt="logo" />
                    <div onClick={() => setToggle(!toggle)} className='header_menu_container'>
                        <div className='header_menu'></div>
                        <div className='header_menu'></div>
                        <div className='header_menu'></div>
                    </div>
                </div>
                <div className="header_list">
                    <Link href={'/'}><h4 className="header_link hvr-sweep-to-right">Portfolio</h4></Link>
                    <Link href={'/'}><h4 className="header_link hvr-sweep-to-right">About</h4></Link>
                    <Link href={'/'}><h4 className="header_link hvr-sweep-to-right">Contact</h4></Link>
                </div>
            </div>
        </div>
    );
}
