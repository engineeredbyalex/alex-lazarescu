import React from 'react'
import Page from '../common/layout/Page'
import Center from '../common/layout/Center'
import { RevealWrapper } from 'next-reveal'
import Project_Box from '../common/box/Project_Box'


function Projects_Component() {
    return (
        <Page background="#1A1A1A">
            <Center>
                <div className='mt-[50px]'>
                    <RevealWrapper origin='bottom' delay={200} duration={1000} distance='300px' reset={false} >
                        <h4 className='sec_text'>Proiecte</h4>
                    </RevealWrapper>
                </div>
                <div className='mt-[50px] lg:flex lg:flex-row grid grid-cols-2 flex-col gap-[50px]'>
                    <RevealWrapper origin='bottom' delay={600} duration={1000} distance='300px' reset={false} >
                        <Project_Box
                            title="ConnecTM"
                            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            imageUrl={require("@/assets/projects/connectm.png")}
                            buttonText="Vezi proiectul"
                        />
                    </RevealWrapper>
                    <RevealWrapper origin='bottom' delay={600} duration={1000} distance='300px' reset={false} >
                        <Project_Box
                            title="ConnecTM"
                            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            imageUrl={require("@/assets/projects/connectm.png")}
                            buttonText="Vezi proiectul"
                        />
                    </RevealWrapper>
                    <RevealWrapper origin='bottom' delay={600} duration={1000} distance='300px' reset={false} >
                        <Project_Box
                            title="ConnecTM"
                            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            imageUrl={require("@/assets/projects/connectm.png")}
                            buttonText="Vezi proiectul"
                        />
                    </RevealWrapper>
                    <RevealWrapper origin='bottom' delay={600} duration={1000} distance='300px' reset={false} >
                        <Project_Box
                            title="ConnecTM"
                            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            imageUrl={require("@/assets/projects/connectm.png")}
                            buttonText="Vezi proiectul"
                        />
                    </RevealWrapper>
                </div>
            </Center>
        </Page>
    )
}

export default Projects_Component