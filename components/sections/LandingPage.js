// importing Page
import Page from '../layout/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
// importing Button
import { OutlineButton } from '../common/buttons/Button'
import { SolidButton } from '../common/buttons/Button'
import Info from '../common/info/Info'
// 
import Sticker from "@/public/images/sticker_one.png"
import StickerTwo from "@/public/images/sticker_two.png"

// 
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'
import Image from 'next/image'


function LandingPage() {
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        const string = 'MODERM WEB EXPERIENCES FOR BRANDS';
        const letterArray = string.split('').map((letter, index) => ({
            letter,
            id: index
        }));

        setLetters(letterArray);
    }, []);

    return (
        <Page>
            <div className='page_container'>
                <div style={{ height: '70vh', width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center', gap: '2rem' }}>
                    <RevealWrapper origin='bottom' delay={2800}>
                        <Info />
                    </RevealWrapper>
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center', gap: '0.5rem' }}>
                        <RevealWrapper delay={1000} origin='bottom'>
                            <h1 style={{ fontWeight: '600', fontStyle: 'italic', fontFamily: "Playfair Display" }}>
                                Alexandru<br /> Lazarescu
                            </h1>
                        </RevealWrapper>
                        <RevealWrapper delay={1600} origin='bottom'>
                            <h2 style={{ fontWeight: '400', fontFamily: "Playfair Display", }}>
                                Web Developer<br /> Designer
                            </h2>
                        </RevealWrapper>
                        <div style={{ position: "absolute", left: 0, bottom: 0, right: 0, zIndex: '-1' }}>
                            <Image src={Sticker}></Image>
                        </div>
                        <div style={{ position: "absolute", left: '20%', top: "40%", zIndex: '-1', transform: "sca" }}>
                            <Image src={StickerTwo}></Image>
                        </div>
                </div>
                    <RevealWrapper delay={2200} origin='bottom'>
                        <Link className='animated_button' href='/contact'>
                            <h4 style={{ lineHeight: '35px', fontWeight: '300', fontFamily: "Kanit", textTransform: "uppercase" }}>
                                Let's Work Togheter
                            </h4>
                        </Link>
                    </RevealWrapper>
                </div>
            </div>
        </Page>
    )
}

export default LandingPage