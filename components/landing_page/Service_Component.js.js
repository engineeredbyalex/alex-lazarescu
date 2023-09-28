import React from 'react'
import Page from '../common/layout/Page'
import { RevealWrapper } from 'next-reveal'
import Center from '../common/layout/Center'
import Service_Box from '../common/box/Service_Box'

function Skills_Component() {
    return (
        <Page background="#fff">
            <div className='flex flex-col lg:flex-row items-center justify-center w-[100vw] h-screen ml-[30px] mr-[30px]'>
                <div className='w-full h-auto lg:w-1/2 lg:h-1/2 flex flex-col items-start justify-center'>
                    <RevealWrapper origin='bottom' delay={200} duration={1000} distance='300px' reset={false} >
                        <h6 className='gray_text_light mt-[50px]'>
                            Servicii
                        </h6>
                    </RevealWrapper>
                    <RevealWrapper origin='bottom' delay={400} duration={1000} distance='300px' reset={false} >
                        <h4 className='sec_text_dark '>
                            Dezvoltare Web, Design, Consultanță
                        </h4>

                    </RevealWrapper>
                    <RevealWrapper origin='bottom' delay={600} duration={1000} distance='300px' reset={false} >

                        <p className='gray_text_light '>
                            Take your online presence to the next level <br /> with my expert web design and content creation services.
                        </p>
                    </RevealWrapper>
                </div>
                <div className='w-full h-full lg:w-1/2 lg:h-1/2 flex flex-col items-center justify-center '>
                    <RevealWrapper origin='bottom' delay={600} duration={1000} distance='300px' reset={false} >
                        <Service_Box icon="BiDevices" title="Dezvoltare Web" content="Ofer servicii de dezvoltare web pentru maganize online personalizate pentru afacerile de toate dimensiunile. Vă pot ajuta să creați un magazin online profesional și eficient, care să vă ajute să vă creșteți vânzările și să vă atrageți mai mulți clienți." />
                    </RevealWrapper>
                    <RevealWrapper origin='bottom' delay={800} duration={1000} distance='300px' reset={false} >
                        <Service_Box icon="BiDevices" title="Desing UI/UX" content="Ofer servicii de proiectare UI/UX  pentru a vă ajuta să creați un magazin online care să fie atât atractiv, cât și ușor de utilizat pentru clienții dvs. Mă concentrez pe crearea de interfețe intuitive și vizual plăcute care să faciliteze cumpărăturile online și să vă ajute să vă creșteți vânzările." />
                    </RevealWrapper>
                    <RevealWrapper origin='bottom' delay={1000} duration={1000} distance='300px' reset={false} >
                        <Service_Box icon="BiDevices" title="Consultanță" content="Ofer servicii de consultanță pentru pentru a vă ajuta să vă dezvoltați și să vă optimizați afacerea online. Vă pot ajuta cu o gamă largă de aspecte." />
                    </RevealWrapper>
                </div>
            </div>
        </Page >
    )
}

export default Skills_Component