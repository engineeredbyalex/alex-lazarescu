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
            <div className="video-background">
                <video autoPlay muted loop id="bg_video">
                    <source src={AnimatedBackground} type="video/mp4" />
                </video>
            </div>
            <div className="flex items-center justify-center w-full h-screen flex-col gap-5 text-center">
                <RevealWrapper delay={1000}>
                    <h1 className="text-[#000] leading-[4rem] lg:leading-[5rem] uppercase font-[800] italic ">
                        Lăzărescu <br /> Alexandru
                    </h1>
                </RevealWrapper>
                <div className="flex gap-5 flex-row" >
                    <RevealWrapper delay={1300}>
                        <p className="text-[#fff] text-[12px]  px-4 uppercase py-2 rounded-full lg:text-[20px]">Web Devloper</p>
                    </RevealWrapper>
                    <RevealWrapper delay={1600}>
                        <p className="text-[#fff] text-[12px]  px-4 uppercase py-2 rounded-full lg:text-[20px]">Designer</p>
                    </RevealWrapper>
                    <RevealWrapper delay={1900}>
                        <p className="text-[#fff] text-[12px]  px-4 uppercase py-2 rounded-full lg:text-[20px]">Freelancer</p>
                    </RevealWrapper>
                </div>
                <div className="flex gap-5  flex-col lg:flex-row">
                    <RevealWrapper delay={2200}>
                        <Button link={'/services'} type="solid" color="#000" text={'Lucrează cu mine'} />
                        {/* <Button link={'/services'} type="solid" color="#c426e8" text={'Lucrează cu mine'} /> */}
                    </RevealWrapper>
                    <RevealWrapper delay={2500}>
                        <Button link={'/projects'} color="#000" text={'Portofoliu'} />
                    </RevealWrapper>
                </div>
            </div>
        </Page>
    )
}

export default LandingPage