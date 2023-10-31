import ProjectBox from '@/components/layout/content/ProjectBox';
import Wrapper from '@/components/layout/content/Wrapper';
import Navigation_Bar from '@/components/layout/header/Navigation_Bar';
import Page from '@/components/layout/page/Page';
import { Center } from '@react-three/drei';
import { RevealWrapper } from 'next-reveal';
import React from 'react';

const projectsArray = [
    {
        title: 'MAYBEE',
        desc: 'Online Store',
        link: 'maybee.ro',
        image: 'maybee-screen.png',
        tech: 'NextJS 13 MongoDB Axios ',
    },
    {
        title: 'Open Weather',
        desc: 'Weather App',
        link: 'https://open-weather-henna.vercel.app/',
        image: 'open-weather-screen.png',
        tech: 'JavaScript OpenWeather Api',
    },
    {
        title: 'test',
        desc: 'test',
        link: 'test',
        image: 'test',
        tech: 'test',
    },
    {
        title: 'test',
        desc: 'test',
        link: 'test',
        image: 'test',
        tech: 'test',
    },
];

function Projects() {
    return (
        <div className='overflow-x-hidden relative'>
            <Navigation_Bar />
            <Page>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-full min-h-screen  gap-[20px] flex-col flex items-center justify-between mt-[5rem]'>
                        {projectsArray.map((project, index) => (
                            <RevealWrapper key={index}>
                                <div className='mt-[5rem]'>
                                    <ProjectBox title={project.title} desc={project.desc} link={project.link} image={`/` + project.image} tech={project.tech} />
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </div>
            </Page>
        </div>
    );
}

export default Projects;