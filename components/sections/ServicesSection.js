// importing Page
import Page from '../layout/page/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
// importing service box
import ServiceBox from '../layout/content/ServiceBox'

function ServicesSection() {
    return (
        <Page >
            <div className="flex items-start justify-center h-screen flex-col gap-5 text-center mb-20">
                <RevealWrapper delay={1000}>
                    <h3 className="text-[#000] leading-[4rem] lg:leading-[8rem] uppercase font-normal ">Servicii</h3>
                </RevealWrapper>
                <div className="flex flex-col lg:flex-row lg:grid grid-cols-2 gap-5 w-full ">
                    <RevealWrapper delay={1300}>
                        <ServiceBox service="Web Developent" desc='Servicii de dezvoltare web, axat pe nevoile clientului. Fiecare proiect este optimizat la cele mai mari standarde. ' />
                    </RevealWrapper>
                    <RevealWrapper delay={1600}>
                        <ServiceBox service="Design" desc='Servicii de design , axat pe nevoile clientului. Atât design grafic pentru interfețe cât și design pentru : afișe, postări pe social media, etc.' />
                    </RevealWrapper>
                    <RevealWrapper delay={1900}>
                        <ServiceBox service="Consultanță" desc='Servicii de consultanță , înainte de a începe un proiect este necesar să discuți cu un specialist.' />
                    </RevealWrapper>
                    <RevealWrapper delay={2200}>
                        <ServiceBox service="Mentenanță" desc='Servicii de mentenanță , după realizarea unui proiect ofer mentenanță acestui proiect, în funcție de nevoile clientului.' />
                    </RevealWrapper>
                </div>

            </div>
        </Page >
    )
}

export default ServicesSection