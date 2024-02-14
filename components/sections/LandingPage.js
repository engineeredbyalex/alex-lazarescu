// importing Page
import Page from '../layout/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
// importing Button
import { OutlineButton } from '../common/buttons/Button'
import { SolidButton } from '../common/buttons/Button'
import Info from '../common/info/Info'

// 
import { useState, useEffect } from 'react';


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
                <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center', }}>
                    <RevealWrapper delay={1000}>
                        <Info />
                    </RevealWrapper>
                    <div>
                        <RevealWrapper delay={1300} >
                            <h1>
                                I BUILD
                            </h1>
                        </RevealWrapper>
                        <RevealWrapper delay={1600} >
                            <h1>
                                MODERN
                            </h1>
                        </RevealWrapper>
                        <RevealWrapper delay={1900} >
                            <h1>
                                WEB
                            </h1>
                        </RevealWrapper>
                        <RevealWrapper delay={2200} >
                            <h1>
                                EXPERIENCES
                            </h1>
                        </RevealWrapper>
                        <RevealWrapper delay={2500} >
                            <h1>
                                FOR BRANDS
                            </h1>
                        </RevealWrapper>
                    </div>
                </div>
                <div style={{ width: '100%', display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
                    <RevealWrapper delay={2800} >

                        <OutlineButton text="SEE MY WORK" />
                    </RevealWrapper>
                    <RevealWrapper delay={3100} >
                        <SolidButton text="CONTACT ME" />
                    </RevealWrapper>
                </div>
            </div>
        </Page>
    )
}

export default LandingPage