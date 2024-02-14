// importing Page
import Page from '../layout/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'

function ServicesSection() {
    return (
        <Page>
            <div className='page_container'>
                <h3 style={{ textTransform: "uppercase", margin: '60px 0px 60px 0px' }}>Services</h3>
                <div className='projects_grid' >
                    <div className='service_card'>
                        <h3>WEB DEVELOPMENT</h3>
                        <h4>Web Development Services Tailored to Your Specific Needs.
                            Each Project is Crafted with Attention to Detail and Optimized for Maximum Performance.
                        </h4>
                    </div>
                    <div className='service_card'>
                        <h3>
                            DESIGN
                        </h3>
                        <h4>
                            I offer graphic design services for interfaces, promotional materials, and branding. From posters to 3D product renders, I focus on creativity and impact.
                        </h4>
                    </div>
                    <div className='service_card'>
                        <h3>
                            CONSULTING
                        </h3>
                        <h4>
                            Before starting a project, we discuss together and offer consulting to identify the best solutions adapted to your needs.
                        </h4>
                    </div>
                    <div className='service_card'>
                        <h3>
                            MAINTENANCE
                        </h3>
                        <h4>
                            After completing a project, I offer personalized maintenance services to ensure that everything is working at its best.
                        </h4>
                    </div>

                </div>
            </div>
        </Page>
    )
}

export default ServicesSection;
