import Navigation_Bar from '@/components/common/header/Navigation_Bar'
import Page from '@/components/layout/page/Page'
import Image from 'next/image'
import HeadShot from "@/public/assets/headshot.jpeg"
import { RevealWrapper } from 'next-reveal'

export default function about() {
    return (
        <div className='overflow-x-hidden'>
            <Navigation_Bar />
            <Page>
                <div className='flex flex-col lg:flex-row w-full overflow-x-hidden'>
                    <div className='w-1/2 flex items-center justify-center flex-col text-center'>
                        <RevealWrapper>
                            <h4 className='text-[#F4E869] leading-[2rem] lg:leading-[2rem] uppercase font-light'>Salut,</h4>
                        </RevealWrapper>
                        <RevealWrapper>

                            <h2 className='text-[#F4E869] leading-[2rem] lg:leading-[4rem] uppercase font-light mb-5'>Eu sunt Alexandru Lăzărescu</h2>
                        </RevealWrapper>
                        <RevealWrapper>

                            <h3 className='text-[#F4E869] leading-[2rem] lg:leading-[3rem] uppercase font-light mb-5'>O mică introducere despre mine :</h3>
                        </RevealWrapper>
                        <RevealWrapper>

                            <h5 className='text-[#F4E869] leading-[2rem] uppercase font-light'>Sunt student și sunt pasionat de dezvoltare web. <br /> Îmi place să lucrez la proiecte provocatoare și să contribui la crearea de soluții care fac diferența. <br />
                                Cu o experiență de 3 ani în dezvoltare web, am ajuns să înțeleg nevoile utilizatorilor și a clienților în așa fel în cât le pot îndeplini dorințele în materie aplicații web.
                                !</h5>
                        </RevealWrapper>
                        <RevealWrapper>
                            <p className='text-[#F4E869] leading-[2rem] uppercase font-light mt-5'>
                                Îți mulțumesc că ai trecut pe aici !
                            </p>
                        </RevealWrapper>
                    </div>
                    <div className='w-1/2 flex items-center justify-center'>
                        <Image width={300} height={300} src={HeadShot} />
                    </div>
                </div>
            </Page>
        </div>
    )
}
