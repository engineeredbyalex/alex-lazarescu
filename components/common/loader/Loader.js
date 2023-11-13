import React, { useEffect } from 'react';
import gsap from "gsap";
import { Expo } from 'gsap';

const LoadingScreen = () => {
    useEffect(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        const barcode = document.querySelector('.barcode');
        const barcodeText = document.querySelector('.barcode-text');
        const tl = gsap.timeline();

        tl.to(barcode, { scaleY: 0, duration: 2.5, delay: 2.5, ease: Expo.easeInOut })
            .to(barcodeText, { y: -100, duration: 1, ease: Expo.easeInOut }, "-=1")
            .to(loadingScreen, { y: '-100%', duration: 2.5, ease: Expo.easeInOut }, "-=1")
            .then(() => {
                loadingScreen.style.zIndex = -1;
            });
    }, []);

    return (
        <div className="loading-screen" style={{ zIndex: 3 }}>
            <div className="barcode">
                <div className="line short"></div>
                <div className="line long"></div>
                <div className="line medium"></div>
                <div className="line short"></div>
                <div className="line long"></div>
                <div className="line medium"></div>
                <div className="line short"></div>
                <div className="line long"></div>
                <div className="line medium"></div>
                <div className="line short"></div>
                <div className="line short"></div>
                <div className="line medium"></div>
                <div className="line long"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
