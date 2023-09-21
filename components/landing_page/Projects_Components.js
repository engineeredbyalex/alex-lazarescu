import React from 'react';
import Page from '../common/layout/Page';
import Center from '../common/layout/Center';
import { RevealWrapper } from 'next-reveal';
import connectm from "@/assets/projects/connectm.png"
import openweather from "@/assets/projects/openweather.png"
import wikiSearch from "@/assets/projects/wikiSearch.png"
import Image from 'next/image';

const projectsData = [
    {
        title: 'ConnecTM',
        description: 'Description of Project 1 goes here.',
        image: connectm, // Replace with the actual image URL
        projectUrl: 'https://example.com/project1', // Replace with the actual project URL
    },
    {
        title: 'OpenWeather App',
        description: 'Description of Project 2 goes here.',
        image: openweather, // Replace with the actual image URL
        projectUrl: 'https://example.com/project2', // Replace with the actual project URL
    },
    {
        title: 'Wiki Search',
        description: 'Description of Project 2 goes here.',
        image: wikiSearch, // Replace with the actual image URL
        projectUrl: 'https://example.com/project2', // Replace with the actual project URL
    },
    {
        title: 'Maybee.ro',
        description: 'Description of Project 2 goes here.',
        image: wikiSearch, // Replace with the actual image URL
        projectUrl: 'https://example.com/project2', // Replace with the actual project URL
    },
    // Add more project objects as needed
];

function Projects_Component() {
    return (
        <Page background="#2C3340">

            <div className="w-screen flex justify-center flex-col items-center gap-[50px]">
                <Center>
                    <div className='h-[20vh]'>
                        <RevealWrapper origin='bottom' delay={1000} duration={1000} distance='500px' reset={false}>
                            <h2 className='main_text'>Proiecte</h2>
                        </RevealWrapper>
                    </div>
                </Center>
                <Center>
                    <div className="flex flex-col gap-[30px]">
                        {projectsData.map((project, index) => (
                            <RevealWrapper origin='bottom' delay={1500} duration={1000} distance='500px' reset={false}>
                                <div className="flex flex-col items-center justify-center gap-10" key={index}>
                                    <Image width={400} height={400} src={project.image} alt={project.title} />
                                    <div className="flex flex-col gap-[30px]">
                                        <h3 className='sec_text'>{project.title}</h3>
                                        <p className='sec_text'>{project.description}</p>
                                        <a className='sec_text accent_container' href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                            <p>
                                                Vezi proiectul
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </Center>
            </div>
        </Page>
    );
}

export default Projects_Component;