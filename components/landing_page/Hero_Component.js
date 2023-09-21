import Center from '../common/layout/Center';
import Page from '../common/layout/Page';
import { useState, useEffect } from 'react';
import { RevealWrapper } from 'next-reveal';
import Link from 'next/link'; // Import Link from Next.js
import Main_Button from '../buttons/Buttons';

function HeroComponent() {
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

    const mouseMoveHandler = (event) => {
        setMouseCoordinates({
            x: event.clientX,
            y: event.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", mouseMoveHandler);
        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return (
        <Page background="#2c3340">
            <Center>
                <div className='hero_text'>
                    <RevealWrapper origin='top' delay={3000} duration={1000} distance='500px' reset={false}>
                        <h1 className='main_text'>
                            LĂZĂRESCU
                        </h1>
                    </RevealWrapper>
                    <RevealWrapper origin='top' delay={3500} duration={1000} distance='500px' reset={false}>
                        <h1 className='main_text'>
                            ALEXANDRU
                        </h1>
                    </RevealWrapper>
                </div>
                <div className='flex items-center gap-[30px] justify-end flex-col lg:flex-row'>
                    <RevealWrapper origin='top' delay={4000} duration={1000} distance='500px' reset={false}>
                        <Main_Button text="Lucrează cu mine" link="" />
                    </RevealWrapper>
                    <RevealWrapper origin='top' delay={4000} duration={1000} distance='500px' reset={false}>
                        <h3 className='sec_text'>
                            Developer Web
                        </h3>
                    </RevealWrapper>
                </div>
                <div className='scroll_container'>
                    <div className='scroll_bar' >
                        <RevealWrapper origin='left' duration={1000} delay={4500}>
                            <h5 className='scroll_text'>
                                Scroll
                            </h5>
                        </RevealWrapper>
                    </div>
                </div>
            </Center>
        </Page>
    );
}

export default HeroComponent;
