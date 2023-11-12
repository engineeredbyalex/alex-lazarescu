// importing Page
import Page from '../layout/page/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
// importing Button
import Button from '../common/buttons/Button'
// importing Animated Button
import AnimatedBackground from "@/public/video/comp2.mp4"

function LandingPage() {
    return (
        <Page>

            <div className="flex items-start justify-center w-full h-screen flex-col  text-center">
                <RevealWrapper delay={4000}>
                    <h1 className='z-[2] uppercase  text-[#000] leading-[2.3rem] lg:leading-[2.6rem] font-[600]  px-5 py-5 rounded-2xl text-left'>
                        Dezvoltator Web
                    </h1>
                </RevealWrapper>
                <RevealWrapper delay={4300}>
                    <h1 className='z-[2] uppercase  text-[#000] leading-[2.3rem] lg:leading-[2.6rem] font-[600]   px-5 py-5 rounded-2xl text-left'>
                        Desigenr grafic
                    </h1>
                </RevealWrapper>
                <RevealWrapper delay={4600}>
                    <h5 className='z-[2] uppercase  text-[#000]  lg:leading-[1.3rem] font-light   px-5 py-5 rounded-2xl text-left w-[70%]'>
                        Salut, eu sunt Alex , un dezvoltator web și designer grafic.
                        Colaborez cu branduri la nivel global pentru a proiecta  site-uri web cu impact,  concentrate pe nevoile lor, care generează rezultate și îndeplinesc obiectivele de afaceri.
                    </h5>
                </RevealWrapper>
                <div className='z-[2] flex w-full gap-[10rem] items-center justify-start ml-5'>
                    <RevealWrapper delay={4600}>

                        <Button className link="/your-link" text="Contact" type="outline" color="#000" />
                    </RevealWrapper>
                    <RevealWrapper delay={4900}>
                        <Button className link="/your-link" text="Proiecte" type="solid" color="#000" />

                    </RevealWrapper>
                </div>

            </div>
        </Page>
    )
}

export default LandingPage