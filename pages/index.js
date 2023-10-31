import Navigation_Bar from "@/components/layout/header/Navigation_Bar";
import Page from "@/components/layout/page/Page";
import { RevealWrapper } from "next-reveal";
import Button from "@/components/common/buttons/Button";
import Link from "next/link";
import ServiceBox from "@/components/layout/content/ServiceBox";
import TestimonailBox from "@/components/layout/content/TestimonailBox";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative">
      <Navigation_Bar />
      <Page>
        <div className="flex items-center justify-center h-screen flex-col gap-5 text-center">
          <RevealWrapper delay={1000}>

            <h3 className="text-[#F4E869] leading-[4rem] lg:leading-[8rem] uppercase font-bold">Alexandru Lăzărescu</h3>
          </RevealWrapper>
          <div className="flex gap-5" >
            <RevealWrapper delay={1300}>
              <p className="text-[#000] text-[20px] bg-[#F4E869] px-3 uppercase py-1 rounded-full">Web Devloper</p>

            </RevealWrapper>
            <RevealWrapper delay={1600}>
              <p className="text-[#000] text-[20px] bg-[#F4E869] px-3 uppercase py-1 rounded-full">Designer</p>

            </RevealWrapper>
            <RevealWrapper delay={1900}>

              <p className="text-[#000] text-[20px] bg-[#F4E869] px-3 uppercase py-1 rounded-full">Freelancer</p>
            </RevealWrapper>
          </div>
          <div className="flex gap-5">
            <RevealWrapper delay={2200}>
              <Button link={'/services'} color="#F4E869" text={'Lucrează cu mine'} />

            </RevealWrapper>
            <RevealWrapper delay={2500}>
              <Button link={'/projects'} color="#F4E869" text={'Portofoliu'} />

            </RevealWrapper>
          </div>
        </div>
      </Page>
      <Page>
        <div className="flex items-start justify-start h-screen flex-col gap-5 text-center">
          <RevealWrapper delay={1000}>

            <h5 className="text-[#F4E869] leading-[4rem] lg:leading-[8rem] uppercase font-light ">Servicii</h5>
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
        <div className="flex items-start justify-start h-screen flex-col gap-5 text-center">
          <RevealWrapper delay={1000}>
            <h5 className="text-[#F4E869] leading-[4rem] lg:leading-[8rem] uppercase font-light ">Recenzii</h5>
          </RevealWrapper>
          <div className="flex flex-col gap-5 ">
            <RevealWrapper delay={1300}>
              <TestimonailBox title="Web Development" client="Alexandru Popescu" testimonial='Colaborarea cu echipa a fost excelentă. Serviciile lor de dezvoltare web au depășit cu mult așteptările noastre. Fiecare detaliu a fost luat în considerare, iar rezultatul final a fost un site perfect adaptat nevoilor noastre.' />
            </RevealWrapper>
            <RevealWrapper delay={1600}>

              <TestimonailBox title="Design" client="Elena Ionescu" testimonial='Serviciile lor de design au adus un plus de valoare brandului nostru. Cu ajutorul lor, am reușit să ne conturăm o identitate vizuală puternică, iar materialele create au avut un impact semnificativ asupra publicului nostru țintă. Recomand cu încredere serviciile lor de design.' />
            </RevealWrapper>
            <RevealWrapper delay={1900}>

              <TestimonailBox title="Consultanță" client="Andrei Stanescu" testimonial='Am apelat la serviciile lor de consultanță pentru un proiect complex, iar sfaturile primite au fost extrem de relevante și utile. Comunicarea deschisă și expertiza lor ne-au ghidat în luarea celor mai bune decizii, ceea ce a condus la succesul proiectului nostru. Recomand cu căldură echipa lor de consultanță.' />
            </RevealWrapper>

          </div>
        </div>
      </Page>
    </div>
  );
}
