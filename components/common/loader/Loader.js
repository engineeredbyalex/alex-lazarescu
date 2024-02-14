import Page from '@/components/layout/Page';
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Expo } from 'gsap';

const LoadingScreen = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoaded(true);
        }, 1000);
        return () => clearTimeout(loadingTimeout);
    }, []);
    useEffect(() => {
        if (loaded) {
            gsap.to('.loading_screen_number', { duration: 2, innerHTML: '100%', ease: Expo.easeOut });
            gsap.to('.loading_screen_bar', { duration: 2, width: '100%', ease: Expo.easeOut, });
            gsap.to('.loading_screen', { delay: 4, ease: Expo.easeOut, opacity: 0, zIndex: -1 });
        } else {
            gsap.to('.loading_screen_number', { duration: 2, innerHTML: '0%', ease: Expo.easeOut });
        }
    }, [loaded]);

    return (
        <div className='loading_screen'>
            <Page>
                <div className='loading_screen_container'>
                    <div className='loading_screen_number'>0%</div>
                    <div className='loading_screen_bar'></div>
                </div>
            </Page>
        </div>
    );
}

export default LoadingScreen;
