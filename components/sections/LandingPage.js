// importing Page
import Page from '../layout/page/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
// importing Button
import { OutlineButton } from '../common/buttons/Button'
import { SolidButton } from '../common/buttons/Button'
// importing Animated Button
import AnimatedBackground from "@/public/video/comp2.mp4"

function LandingPage() {
    return (
        <Page>

            <div className="flex items-start justify-center w-full h-screen flex-col  text-center">
                <RevealWrapper delay={5500}>
                    <h1 className=' uppercase  text-[#000] leading-[2.3rem] lg:leading-[2.6rem] font-[600]  px-5 py-5 rounded-2xl text-left'>
                        Dezvoltator Web
                    </h1>
                </RevealWrapper>
                <RevealWrapper delay={5700}>
                    <h1 className=' uppercase  text-[#000] leading-[2.3rem] lg:leading-[2.6rem] font-[600]   px-5 py-5 rounded-2xl text-left'>
                        Desigenr grafic
                    </h1>
                </RevealWrapper>
                <RevealWrapper delay={5900}>
                    <h5 className=' uppercase  text-[#000]  lg:leading-[1.3rem] font-light   px-5 py-5 rounded-2xl text-left w-[70%]'>
                        Salut, eu sunt Alex , un dezvoltator web și designer grafic.
                        Colaborez cu branduri la nivel global pentru a proiecta  site-uri web cu impact,  concentrate pe nevoile lor, care generează rezultate și îndeplinesc obiectivele de afaceri.
                    </h5>
                </RevealWrapper>
                <div className=' flex w-full gap-[1rem] items-start justify-start ml-5 flex-col lg:flex-row lg:items-center lg:gap-[10rem] z-[2]'>
                    <RevealWrapper delay={6100}>
                        <OutlineButton text='Proiecte' />
                    </RevealWrapper>
                    <RevealWrapper delay={6300}>
                        <SolidButton text='Contact' />
                    </RevealWrapper>
                </div>

            </div>
        </Page>
    )
}

export default LandingPage