import Navigation_Bar from "@/components/common/header/Navigation_Bar";
import Page from "@/components/layout/page/Page";
import { RevealWrapper } from "next-reveal";
import Button from "@/components/common/buttons/Button";
import ServiceBox from "@/components/layout/content/ServiceBox";
import TestimonailBox from "@/components/layout/content/TestimonailBox";
import Image from "next/image";
import Footer from "@/components/common/footer/Footer";
import LoadingScreen from "@/components/common/loader/Loader";
import Render from "@/public/render.png"
import AnimatedBackground from "@/public/comp.mp4"

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      <LoadingScreen />
      <Navigation_Bar />
      <div className="video-background">
        <video autoPlay muted loop id="myVideo">
          <source src={AnimatedBackground} type="video/mp4" />
        </video>
      </div>
      <Page>

        <div className="flex items-center justify-center w-full h-screen flex-col gap-5 text-center">
          <RevealWrapper delay={1000}>
            <h2 className="text-[#F4E869] leading-[4rem] lg:leading-[8rem] uppercase font-bold ">Alexandru Lăzărescu</h2>
          </RevealWrapper>
          <div className="flex gap-5 flex-row" >
            <RevealWrapper delay={1300}>
              <p className="text-[#000] text-[12px] bg-[#F4E869] px-4 uppercase py-2 rounded-full lg:text-[20px]">Web Devloper</p>

            </RevealWrapper>
            <RevealWrapper delay={1600}>
              <p className="text-[#000] text-[12px] bg-[#F4E869] px-4 uppercase py-2 rounded-full lg:text-[20px]">Designer</p>

            </RevealWrapper>
            <RevealWrapper delay={1900}>
              <p className="text-[#000] text-[12px] bg-[#F4E869] px-4 uppercase py-2 rounded-full lg:text-[20px]">Freelancer</p>
            </RevealWrapper>
          </div>
          <div className="flex gap-5  flex-col lg:flex-row">
            <RevealWrapper delay={2200}>
              <Button link={'/services'} type="solid" color="#F4E869" text={'Lucrează cu mine'} />
            </RevealWrapper>
            <RevealWrapper delay={2500}>
              <Button link={'/projects'} color="#F4E869" text={'Portofoliu'} />
            </RevealWrapper>
          </div>
          <div className="absolute left-[20%] top-[5%] rotate-[30deg] z-[1]">
            <Image width={500} src={Render}></Image>
          </div>

        </div>
      </Page>
      <Page>
        <div className="flex items-start justify-center h-screen flex-col gap-5 text-center">
          <RevealWrapper delay={1000}>
            <h3 className="text-[#F4E869] leading-[4rem] lg:leading-[8rem] uppercase font-light ">Servicii</h3>
          </RevealWrapper>
          <div className="flex flex-col lg:flex-row gap-5 ">
            <RevealWrapper delay={1300}>

              <ServiceBox service="Web Developent" desc='Servicii de dezvoltare web, axat pe nevoile clientului. Fiecare proiect este optimizat la cele mai mari standarde. ' />
            </RevealWrapper>
            <RevealWrapper delay={1600}>

              <ServiceBox service="Design" desc='Servicii de design , axat pe nevoile clientului. Atât design grafic pentru interfețe cât și design pentru : afișe, postări pe social media, etc.' />
            </RevealWrapper>
            <RevealWrapper delay={1900}>

              <ServiceBox service="Consultanță" desc='Servicii de consultanță , înainte de a începe un proiect este necesar să discuți cu un specialist.' />
            </RevealWrapper>
          </div>

        </div>
      </Page>
      <Page>
        <div className="flex items-start justify-center h-screen flex-col gap-5 text-center mb-20">
          <div className="mt-[5rem]">
            <RevealWrapper delay={1000}>
              <h3 className="text-[#F4E869] leading-[4rem] lg:leading-[8rem] uppercase font-light  ">Recenzii</h3>
            </RevealWrapper>
          </div>
          <div className="flex flex-col gap-5 ">
            <RevealWrapper delay={1300}>
              <TestimonailBox title="Web Development" client="Alexandru Popescu" testimonial='Colaborarea cu Alex a fost excelentă. Serviciile lui de dezvoltare web au depășit cu mult așteptările noastre. Fiecare detaliu a fost luat în considerare, iar rezultatul final a fost un site perfect adaptat nevoilor noastre.' />
            </RevealWrapper>
            <RevealWrapper delay={1600}>

              <TestimonailBox title="Design" client="Elena Ionescu" testimonial='Serviciile lui de design au adus un plus de valoare brandului nostru. Cu ajutorul lui, am reușit să ne conturăm o identitate vizuală puternică, iar materialele create au avut un impact semnificativ asupra publicului nostru țintă. Recomand cu încredere serviciile lui de design.' />
            </RevealWrapper>
            <RevealWrapper delay={1900}>
              <TestimonailBox title="Consultanță" client="Andrei Stanescu" testimonial='Alex ne-a oferit sfaturi foarte valoaroase pentru a alege platforma perfectă pentru afacera noastră, rezultând reducerea de costuri în mod semnificativ. ' />
            </RevealWrapper>
          </div>
        </div>
      </Page>
      <Footer />
    </div>
  );
}
