// importing Page
import Page from '../layout/page/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
// importing Button
import { OutlineButton } from '../common/buttons/Button'
import { SolidButton } from '../common/buttons/Button'


function LandingPage() {
    return (
        <Page>
            <div className="flex items-start justify-evenly lg:justify-center w-full h-full flex-col  text-center">
                <div className='h-1/2 flex items-start justify-start lg:justify-center flex-col'>
                    <RevealWrapper delay={1000}>
                        <h1 className=' uppercase  text-[#000] leading-[2.3rem] lg:leading-[2.6rem] font-[600] mb-5 lg:mb-10   text-left'>
                            Dezvoltator Web
                        </h1>
                    </RevealWrapper>
                    <RevealWrapper delay={1300}>
                        <h1 className=' uppercase  text-[#000] leading-[2.3rem] lg:leading-[2.6rem] font-[600] mb-5 lg:mb-10    text-left'>
                            Designer grafic
                        </h1>
                    </RevealWrapper>
                    <RevealWrapper delay={1600}>
                        <h5 className=' uppercase  text-[#000] leading-5  lg:leading-[1.3rem] font-light mb-5   text-left w-[100%]'>
                            Salut ! <br /> Eu sunt Alex Lăzărescu. <br /> Bine ai venit pe portofoilul meu.
                        </h5>
                    </RevealWrapper>
                </div>
                <div className='flex w-full h-1/2 gap-[1rem] items-start  justify-start  flex-col lg:flex-row lg:items-center lg:gap-[5rem] z-[2]'>
                    <RevealWrapper delay={1900}>
                        <OutlineButton link="/projects" text='Proiecte' />
                    </RevealWrapper>
                    <RevealWrapper delay={2200}>
                        <SolidButton link="/contact" text='Contact' />
                    </RevealWrapper>
                </div>

            </div>
        </Page>
    )
}

export default LandingPage