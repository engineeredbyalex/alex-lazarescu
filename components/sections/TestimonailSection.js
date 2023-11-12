// importing Page
import Page from '../layout/page/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
// importing testimonial box
import TestimonailBox from '../layout/content/TestimonailBox'
function TestimonailSection() {
    return (
        <Page>
            <div className="flex items-start justify-center h-auto flex-col gap-5 text-center mb-20">
                    <RevealWrapper delay={1000}>
                        <h3 className="text-[#000] leading-[4rem] lg:leading-[8rem] uppercase font-normal  ">Recenzii</h3>
                    </RevealWrapper>

                <div className="flex flex-col  lg:grid grid-cols-2 gap-5 w-full  h-auto ">
                    <RevealWrapper delay={1300}>
                        <TestimonailBox title="Web Development" client="Alexandru Popescu" testimonial='Colaborarea cu Alex a fost excelentă. Serviciile lui de dezvoltare web au depășit cu mult așteptările noastre. Fiecare detaliu a fost luat în considerare, iar rezultatul final a fost un site perfect adaptat nevoilor noastre.' />
                    </RevealWrapper>
                    <RevealWrapper delay={1600}>
                        <TestimonailBox title="Design" client="Elena Ionescu" testimonial='Serviciile lui de design au adus un plus de valoare brandului nostru. Cu ajutorul lui, am reușit să ne conturăm o identitate vizuală puternică, iar materialele create au avut un impact semnificativ asupra publicului nostru țintă. Recomand cu încredere serviciile lui de design.' />
                    </RevealWrapper>
                    <RevealWrapper delay={1900}>
                        <TestimonailBox title="Consultanță" client="Andrei Stanescu" testimonial='Alex ne-a oferit sfaturi foarte valoaroase pentru a alege platforma perfectă pentru afacera noastră, rezultând reducerea de costuri în mod semnificativ. ' />
                    </RevealWrapper>
                    <RevealWrapper delay={2200}>
                        <TestimonailBox title="Consultanță" client="Andrei Stanescu" testimonial='Alex ne-a oferit sfaturi foarte valoaroase pentru a alege platforma perfectă pentru afacera noastră, rezultând reducerea de costuri în mod semnificativ. ' />
                    </RevealWrapper>
                </div>
            </div>
        </Page>
    )
}

export default TestimonailSection