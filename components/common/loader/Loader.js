import { gsap } from "gsap"
import { useEffect } from "react"
import { Expo } from "gsap"

export default function Loader() {


    useEffect(() => {
        gsap.to(".block-left", { left: "-50%", ease: Expo.easeInOut, delay: 1, duration: 3, })
        gsap.to(".block-right", { right: "-50%", ease: Expo.easeInOut, delay: 1, duration: 3, })
        gsap.to(".container", { zIndex: '-1', ease: Expo.easeInOut, delay: 2, duration: 3, })
    }, [])

    return (
        <div className="container">
            <div className="blocks">
                <div className="block block-left"></div>
                <div className="block block-right"></div>
            </div >

        </div>
    )
}