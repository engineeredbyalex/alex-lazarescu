import React from 'react'
import Page from '../common/layout/Page'
import { RevealWrapper } from 'next-reveal'
import Center from '../common/layout/Center'

function Skills_Component() {
    return (
        <Page background="#fff">

            <Center>
                <div className='mt-[50px]'>
                    <RevealWrapper origin='bottom' delay={200} duration={1000} distance='300px' reset={true} >
                        <h4 className='sec_text_dark'>Servicii</h4>
                    </RevealWrapper>
                </div>
                <div className='mt-[20px]'>
                    <RevealWrapper origin='bottom' delay={400} duration={1000} distance='300px' reset={true} >
                        <h3 className='sec_text_dark'>Dezvoltare,Design,<br /> Consultanță,Conținut.</h3>
                    </RevealWrapper>
                </div>
            </Center>

        </Page>
    )
}

export default Skills_Component