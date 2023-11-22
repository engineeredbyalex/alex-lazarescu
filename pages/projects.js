// importing Page
import Page from '@/components/layout/page/Page';
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'

import { OutlineButton } from '@/components/common/buttons/Button';
import Navigation_Bar from '@/components/common/header/Navigation_Bar';
import Footer from '@/components/common/footer/Footer';

import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/products').then(response => {
            setProjects(response.data);

        });
    }, []);
    return (
        <div className='overflow-x-hidden relative'>
            <Navigation_Bar />
            <Page>
                <div className="flex h-auto items-start justify-center w-full  flex-col  text-center ">
                    <RevealWrapper delay={500}>
                        <h3 className="text-[#000] leading-[4rem] lg:leading-[8rem] uppercase font-normal  ">Proiecte</h3>
                    </RevealWrapper>
                    <div className='flex justify-between w-full flex-row flex-wrap ' >
                        {projects.map(project => (
                            <RevealWrapper className="mb-10" key={project._id} delay={500 * project._id}>
                                <img className='lg:w-[45vw]' src={project.images[0]} />
                                <div className='w-full flex justify-between'>
                                    <h4>
                                        {project.title}

                                    </h4>
                                    <h5>
                                        {project.desc}
                                    </h5>
                                </div>
                                <OutlineButton text='Vezi proiectul' link={project.link} />
                            </RevealWrapper>

                        ))}
                    </div>
                </div>

            </Page>
            <Footer />
        </div>
    );
}

export default Projects;
