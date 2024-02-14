// importing Page
import Page from '../layout/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
// importing testimonial box
import TestimonailBox from '../layout/TestimonailBox'
function TestimonailSection() {
    return (
        <Page>
            <div className="flex items-start justify-center h-auto flex-col gap-5 text-center mb-20">
                <RevealWrapper delay={1000}>
                    <h3 className="text-[#000] leading-[4rem] lg:leading-[8rem] uppercase font-normal  ">Recenzii</h3>
                </RevealWrapper>

                <div className="flex flex-col lg:grid grid-cols-2 gap-5 w-full h-auto ">
                    <RevealWrapper delay={1300}>
                        <TestimonailBox
                            title="Dezvoltare Web"
                            client="Maria Popescu"
                            testimonial="Colaborarea cu Alex a fost minunată. Am apreciat profesionalismul său și modul în care a răspuns nevoilor noastre specifice. Rezultatele vorbesc de la sine, iar site-ul nostru arată acum exact așa cum ne-am dorit."
                        />
                    </RevealWrapper>
                    <RevealWrapper delay={1600}>
                        <TestimonailBox
                            title="Design"
                            client="Ionel Georgescu"
                            testimonial="Am fost impresionat de creativitatea lui Alex în procesul de design. A reușit să aducă o viziune fresh și modernă brandului nostru. Echipa noastră și clienții au reacționat foarte bine la noul aspect."
                        />
                    </RevealWrapper>
                    <RevealWrapper delay={1900}>
                        <TestimonailBox
                            title="Consultanță"
                            client="Ana Maria Vasilescu"
                            testimonial="Alex a fost un partener de încredere în deciziile strategice pentru afacerea noastră. Sfaturile sale au fost de neprețuit, contribuind la creșterea eficienței și la optimizarea costurilor. Recomand cu căldură serviciile lui de consultanță."
                        />
                    </RevealWrapper>
                    <RevealWrapper delay={2200}>
                        <TestimonailBox
                            title="Dezvoltare Web"
                            client="Mihai Radu"
                            testimonial="Colaborarea cu Alex a fost minunată. Am apreciat profesionalismul său și modul în care a răspuns nevoilor noastre specifice. Rezultatele vorbesc de la sine, iar site-ul nostru arată acum exact așa cum ne-am dorit."
                        />
                    </RevealWrapper>
                </div>
            </div>
        </Page>
    )
}

export default TestimonailSection