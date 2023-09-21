import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Expo } from "gsap";
import Center from "../layout/Center";

export default function NavBar() {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const navBar = document.querySelector(".navigation_bar");
        const navLinks = document.querySelectorAll(".navigation_bar_link");

        const toggleAnimation = () => {
            const easeType = toggle ? Expo.easeInOut : Expo.easeInOut;
            const height = toggle ? "100vh" : "13vh";
            const backgroundColor = toggle ? "#2c3340" : "#2c3340";
            const left = toggle ? "50px" : "-100%";
            const duration_nav = toggle ? "1" : "1";
            const delay = toggle ? "0" : "2"
            const duration_links = toggle ? "2" : "1";

            gsap.to(navBar, { height, backgroundColor, ease: easeType, duration: duration_nav, delay });
            gsap.to(navLinks, { left, ease: easeType, duration: duration_links, stagger: 0.1 });
        };

        toggleAnimation();
    }, [toggle]);

    return (
        <div className={`navigation_bar ${toggle ? "expanded" : ""}`}>
            <Center>
                <div className="navigation_bar_container">
                    <button onClick={() => setToggle(!toggle)} className="navigation_menu_button">
                        <span className="navigation_menu_line" />
                        <span className="navigation_menu_line" />
                        <span className="navigation_menu_line" />
                    </button>
                </div>
                <div className="navigation_bar_links">
                    <Link href={"/"} className="navigation_bar_link link link_1">
                        <h4>Acasă</h4>
                    </Link>
                    <Link href={"/"} className="navigation_bar_link link link_2">
                        <h4>Despre Mine</h4>
                    </Link>
                    <Link href={"/"} className="navigation_bar_link link link_3">
                        <h4>Portofoliu</h4>
                    </Link>
                    <Link href={"/"} className="navigation_bar_link link link_4">
                        <h4>Magazin</h4>
                    </Link>
                    <Link href={"/"} className="navigation_bar_link link link_5">
                        <h4>Servicii</h4>
                    </Link>
                    <Link href={"/"} className="navigation_bar_link link link_6">
                        <h4>Blog</h4>
                    </Link>
                </div>
            </Center>
        </div>
    );
}