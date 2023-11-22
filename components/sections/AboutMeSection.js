// 
import HtmlLogo from "@/public/assets/html.svg"
import CssLogo from "@/public/assets/css.svg"
import JavaLogo from "@/public/assets/js.svg"
import ReactLogo from "@/public/assets/react.svg"
import TailWindLogo from "@/public/assets/tailwind.svg"
import NextLogo from "@/public/assets/next-js.svg"
import MongoLogo from "@/public/assets/mongo.svg"
// 
import PhotoshopLogo from "@/public/assets/photoshop.svg"
import PremiereLogo from "@/public/assets/premiere.svg"
import IllustratorLogo from "@/public/assets/illustrator.svg"
import AfterEffects from "@/public/assets/aftereffects.svg"
// 
import Image from 'next/image'
// 
import Headshot from "@/public/images/headshot.jpeg"
// 
import { RevealWrapper } from "next-reveal"
import Page from "../layout/page/Page"


function AboutMeSection() {
    return (
        <Page>
            <div className="flex items-start justify-center h-auto flex-col gap-5 text-center mb-20">
                <RevealWrapper delay={1000}>
                    <h3 className="text-[#000] leading-[4rem] lg:leading-[8rem] uppercase font-normal ">Despre mine</h3>
                </RevealWrapper>
                <div className="flex flex-col lg:flex-row gap-10">
                    <RevealWrapper delay={1300}>
                        <div className='flex gap-5 flex-col items-start text-left w-full lg:w-3/4'>
                            <h4>
                                Salut, sunt Alexandru Mihai Lazarescu!
                            </h4>
                            <h5>
                                Sunt dezvoltator web full-stack și pasionat de design.
                            </h5>
                            <h5>
                                Mă dedic construirii de aplicații complete și eficiente, punând
                                accent pe aspectul estetic și performanța acestora. Am o atenție
                                deosebită la crearea unei experiențe de utilizare remarcabile pe
                                web și dispozitive mobile.
                            </h5>
                            <h5>
                                Pe lângă dezvoltare, îmi place să dau viață ideilor mele și să
                                creez design-uri atractive. Întotdeauna caut soluții inovatoare
                                pentru a oferi utilizatorilor o experiență digitală memorabilă.
                            </h5>
                        </div>
                    </RevealWrapper>
                    <RevealWrapper delay={1600}>
                        <Image src={Headshot} />
                    </RevealWrapper>
                </div>
                {/* <RevealWrapper delay={1900}>
                    <div className='flex gap-5 flex-wrap'>
                        <Image width={50} height={50} src={HtmlLogo} />
                        <Image width={50} height={50} src={CssLogo} />
                        <Image width={50} height={50} src={JavaLogo} />
                        <Image width={50} height={50} src={ReactLogo} />
                        <Image width={50} height={50} src={TailWindLogo} />
                        <Image width={50} height={50} src={NextLogo} />
                        <Image width={50} height={50} src={MongoLogo} />
                    </div>
                </RevealWrapper> */}
                {/* <RevealWrapper delay={2100}>
                    <div className='flex gap-5 flex-wrap'>
                        <Image width={50} height={50} src={PhotoshopLogo} />
                        <Image width={50} height={50} src={PremiereLogo} />
                        <Image width={50} height={50} src={IllustratorLogo} />
                        <Image width={50} height={50} src={AfterEffects} />

                    </div>
                </RevealWrapper> */}
            </div>
        </Page>
    )
}

export default AboutMeSection