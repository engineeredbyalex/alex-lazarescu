import Center from '../common/layout/Center'
import Page from '../common/layout/Page'
import { RevealWrapper } from 'next-reveal'
import Main_Button from '../buttons/Buttons'
import Image from 'next/image'
import Headshot from "@/assets/headshot.jpeg"

function About_Me_Component() {
    return (
        <Page background="#2C3340">
            <Center>
                <div className='w-screen flex justify-center flex-col items-center gap-[50px]'>
                    <Center>
                        <RevealWrapper origin='bottom' delay={1000} duration={1000} distance='500px' reset={false}>
                            <h4 className='sec_text'>Salut,</h4>
                        </RevealWrapper>
                        <RevealWrapper origin='bottom' delay={1500} duration={1000} distance='500px' reset={false}>

                            <h5 className='content_text'>Eu sunt Lăzărescu Alexandru, un dezvoltator web cu o pasiune pentru crearea unor experiențe de digitale captivante.</h5>
                        </RevealWrapper>
                        <RevealWrapper origin='bottom' delay={2000} duration={1000} distance='500px' reset={false}>
                            <h5 className='content_text'>Bine ai venit pe portofoliul meu.</h5>
                        </RevealWrapper>
                    </Center>
                    <Center>
                        <RevealWrapper origin='bottom' delay={2500} duration={1000} distance='500px' reset={false}>
                            <Image className='rounded-full drop-shadow-xl' src={Headshot} width={400} height={400} ></Image>
                        </RevealWrapper>
                    </Center>
                    <Center>
                        <div className='flex text-center w-1/2 items-center justify-center gap-[30px]'>
                            <RevealWrapper origin='bottom' delay={3000} duration={1000} distance='500px' reset={false}>
                                <p className='content_text'>
                                    Cu 4 ani de experiență și o bază solidă în dezvoltarea web, sunt un dezvoltator dedicat. Sunt priceput în limbaje precum JavaScript, TypeScript și CSS, și sunt entuziasmat să rămân la curent cu cele mai recente tendințe, adoptând cu interes noi tehnologii și cadre de lucru.
                                    Am lucrat cu agenții de start-up-uri, iar contribuțiile mele au avut un impact pozitiv asupra afacerilor lor. În plus, am lucrat și ca dezvoltator freelance, colaborând cu designeri UX/UI, ceea ce m-a învățat importanța unui design coerent.
                                </p>
                            </RevealWrapper>
                        </div>

                    </Center>

                </div>
            </Center>
        </Page>
    )
}

export default About_Me_Component
