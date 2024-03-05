// importing Page
import Image from 'next/image';
import Page from '../layout/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
// 

import Sticker from '@/public/images/sticker_three.png';

function ServicesSection() {
    return (
        <Page>
            <div className='page_container'>

                <RevealWrapper origin="bottom">
                    <h3 style={{ textTransform: "uppercase", margin: '60px 0px 60px 0px' }}>Services</h3>
                </RevealWrapper>
                {/* <div style={{ position: 'absolute', top: '210%', zIndex: '1', }}>
                    <Image className="sticker" src={Sticker} />
                </div> */}
                <div className='projects_grid' >
                    <div className='service_card'>
                        <h3>WEB DEVELOPMENT</h3>
                        <div className='projects_grid'>
                            <h4>FRONT-END</h4>
                            <h4>BACK-END</h4>
                            <h4>UX-UI DESIGN</h4>
                            <h4>DEPLOYMENT</h4>
                            <h4>GRAPHIC DESIGN</h4>
                            <h4>API INTEGRATIONS</h4>
                            <h4>Multiple themes</h4>
                        </div>
                    </div>
                    <div className='service_card'>
                        <h3>
                            FRONT-END  <br /> DEVELOPMENT
                        </h3>
                        <div className='projects_grid'>
                            <h4>HTML</h4>
                            <h4>CSS</h4>
                            <h4>JavaScript</h4>
                            <h4>React JS</h4>
                            <h4>NextJS</h4>
                            <h4>TailwindCss</h4>
                            <h4>NODE.js</h4>
                        </div>
                    </div>
                    <div className='service_card'>
                        <h3>
                            BACK-END <br /> DEVELOPMENT
                        </h3>
                        <div className='projects_grid'>
                            <h4>API INTEGRATIONS</h4>
                            <h4>AI INTEGRATIONS</h4>
                            <h4>MongoDB</h4>
                            <h4>AmazonS3</h4>
                            <h4>Google Firebase</h4>
                        </div>
                    </div>
                    <div className='service_card'>
                        <h3>
                            WEB DESIGN
                        </h3>
                        <div className='projects_grid'>
                            <h4>FIGMA</h4>
                            <h4>ADOBE AI</h4>
                            <h4>ADOBE PS</h4>
                            <h4>ADOBE XD</h4>
                            <h4>PROTOTYPING</h4>
                            <h4>Ai Generation</h4>
                        </div>
                    </div>
                    <div className='service_card'>
                        <h3>
                            GRAPHIC DESIGN
                        </h3>
                        <div className='projects_grid'>
                            <h4>FIGMA</h4>
                            <h4>ADOBE AI</h4>
                            <h4>ADOBE PS</h4>
                            <h4>ADOBE XD</h4>
                            <h4>BLENDER</h4>
                            <h4>Ai Generation</h4>
                        </div>
                    </div>
                    <div className='service_card'>
                        <h3>
                            MARKETING
                        </h3>
                        <div className='projects_grid'>
                            <h4>INSTAGRAM</h4>
                            <h4>FACEBOOK</h4>
                            <h4>TIK-TOK</h4>
                            <h4>LINKEDIN</h4>
                            <h4>YOUTUBE</h4>
                            <h4>GOOGLE</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default ServicesSection;
