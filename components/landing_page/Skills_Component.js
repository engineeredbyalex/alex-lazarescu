import React from 'react'
import Page from '../common/layout/Page'
import { RevealWrapper } from 'next-reveal'

function Skills_Component() {
    return (
        <Page background="#fff">
            <RevealWrapper origin='bottom' delay={200} duration={1000} distance='100px' reset={true} >
                <h5 className='sec_text_dark uppercase absolute left-[30px] top-[50px]  '>Servicii</h5>
            </RevealWrapper>
            <RevealWrapper origin='bottom' delay={200} duration={1000} distance='100px' reset={true} >
                <h3 className='sec_text_dark uppercase absolute left-[30px] top-[50px]  '>Dezvoltare,design,consultanță și conținut</h3>
            </RevealWrapper>

        </Page>
    )
}

export default Skills_Component