import Page from '../layout/page/Page'
import { RevealWrapper } from 'next-reveal'
import ServiceBox from '../layout/content/ServiceBox'

function ServicesSection() {
    return (
        <Page>
            <div className="flex items-start justify-center h-auto flex-col gap-5 text-center mb-20">
                <RevealWrapper delay={1000}>
                    <h3 className="text-[#000] leading-[4rem] lg:leading-[8rem] uppercase font-normal ">Servicii</h3>
                </RevealWrapper>
                <div className="flex flex-col lg:flex-row lg:grid grid-cols-2 gap-5 w-full h-auto ">
                    <RevealWrapper delay={1300}>
                        <ServiceBox
                            service="Dezvoltare Web"
                            desc="Servicii de dezvoltare web, adaptate nevoilor tale specifice. Fiecare proiect este realizat cu atenție la detalii și optimizat pentru performanță maximă."
                        />
                    </RevealWrapper>
                    <RevealWrapper delay={1600}>
                        <ServiceBox
                            service="Design"
                            desc="Ofer servicii de design grafic pentru interfețe, materiale promoționale cât și branding . De la afișe la randări de produse în 3D, pun accent pe creativitate și impact."
                        />
                    </RevealWrapper>
                    <RevealWrapper delay={1900}>
                        <ServiceBox
                            service="Consultanță"
                            desc="Înainte de a începe un proiect, discutăm împreună și ofer consultanță pentru a identifica cele mai bune soluții adaptate nevoilor tale."
                        />
                    </RevealWrapper>
                    <RevealWrapper delay={2200}>
                        <ServiceBox
                            service="Mentenanță"
                            desc="După finalizarea unui proiect, ofer servicii de mentenanță personalizate, pentru a mă asigura că totul funcționează în parametrii optimi."
                        />
                    </RevealWrapper>
                </div>
            </div>
        </Page>
    )
}

export default ServicesSection;
