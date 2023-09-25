import React from 'react'
import Page from '../common/layout/Page'
import { RevealWrapper } from 'next-reveal'
import Center from '../common/layout/Center'
import Service_Box from '../common/box/Service_Box'

function Skills_Component() {
    return (
        <Page background="#fff">
            <Center>
                <div className='mt-[50px]'>
                    <RevealWrapper origin='bottom' delay={200} duration={1000} distance='300px' reset={false} >
                        <h4 className='sec_text_dark'>Servicii</h4>
                    </RevealWrapper>
                </div>
                <div className='mt-[20px]'>
                    <RevealWrapper origin='bottom' delay={400} duration={1000} distance='300px' reset={false} >
                        <h3 className='sec_text_dark'>Dezvoltare,Design,<br /> Consultanță.</h3>
                    </RevealWrapper>
                </div>
                <div className='mt-[50px]'>
                    <RevealWrapper origin='bottom' delay={600} duration={1000} distance='300px' reset={false} >
                        <Service_Box title="Dezvoltare Web" content="Ofer servicii de dezvoltare web pentru maganize online personalizate pentru afacerile de toate dimensiunile. Vă pot ajuta să creați un magazin online profesional și eficient, care să vă ajute să vă creșteți vânzările și să vă atrageți mai mulți clienți." />
                    </RevealWrapper>
                    <RevealWrapper origin='bottom' delay={800} duration={1000} distance='300px' reset={false} >
                        <Service_Box title="Desing UI/UX" content="Ofer servicii de proiectare UI/UX  pentru a vă ajuta să creați un magazin online care să fie atât atractiv, cât și ușor de utilizat pentru clienții dvs. Mă concentrez pe crearea de interfețe intuitive și vizual plăcute care să faciliteze cumpărăturile online și să vă ajute să vă creșteți vânzările." />
                    </RevealWrapper>
                    <RevealWrapper origin='bottom' delay={1000} duration={1000} distance='300px' reset={false} >
                        <Service_Box title="Consultanță" content="Ofer servicii de consultanță pentru pentru a vă ajuta să vă dezvoltați și să vă optimizați afacerea online. Vă pot ajuta cu o gamă largă de aspecte." />
                    </RevealWrapper>
                </div>
            </Center>

        </Page>
    )
}

export default Skills_Component