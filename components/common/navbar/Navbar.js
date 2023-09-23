import Link from "next/link";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Expo } from "gsap";
import Center from "../layout/Center";


export default function NavBar() {

    const [isToggled, setIsToggled] = useState()
    useEffect(() => {
        const navigationBarMenu = document.querySelector(".navigation_bar_menu");
        const naviagtionMenu = document.querySelector(".naviagtion_menu");

        if (isToggled) {
            gsap.to(navigationBarMenu, { left: "0rem", ease: Expo.easeInOut, duration: 1, delay: 2 });
            gsap.to(".navigation_bar", { height: "100vh", ease: Expo.easeInOut, duration: 1 });
            gsap.to(".navigation_bar", { background: "#000", ease: Expo.easeInOut, duration: 1 });
            gsap.to(".naviagtion_menu_line", { background: "#FF9B16", ease: Expo.easeInOut, duration: 1, delay: 2 });
        } else {
            gsap.to(navigationBarMenu, { left: "-10rem", ease: Expo.easeInOut, duration: 1, });
            gsap.to(".navigation_bar", { height: "100px", ease: Expo.easeInOut, duration: 1, delay: 2 });
            gsap.to(".navigation_bar", { background: "transparent", ease: Expo.easeInOut, duration: 1, delay: 2 });
            gsap.to(".naviagtion_menu_line", { background: "#fff", ease: Expo.easeInOut, duration: 1 });
        }
    }, [isToggled]);

    return (
        <nav className="navigation_bar">
            <Center>
                <div className="navigation_bar_container">
                    <div onClick={() => setIsToggled(!isToggled)} className='navigation_menu_container'>
                        <div className='naviagtion_menu'>
                            <span className='naviagtion_menu_line'></span>
                            <span className='naviagtion_menu_line'></span>
                            <span className='naviagtion_menu_line'></span>
                        </div>
                    </div>
                </div>
            </Center>
            <div className="navigation_bar_menu">
                <Center>
                    <li className="navigation_bar_list">
                        <Link className="navigation_bar_list_link" href={'/'}><h3>Test</h3></Link>
                        <Link className="navigation_bar_list_link" href={'/'}><h3>Test</h3></Link>
                        <Link className="navigation_bar_list_link" href={'/'}><h3>Test</h3></Link>
                        <Link className="navigation_bar_list_link" href={'/'}><h3>Test</h3></Link>
                        <Link className="navigation_bar_list_link" href={'/'}><h3>Test</h3></Link>
                        <Link className="navigation_bar_list_link" href={'/'}><h3>Test</h3></Link>
                    </li>

                </Center>
            </div>
        </nav>
    );
}