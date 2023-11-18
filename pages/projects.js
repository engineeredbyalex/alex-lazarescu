// importing Page
import Page from '@/components/layout/page/Page';
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
// 
import MaybeeScreen from "@/public/assets/maybee.ro.png";
import WeatherScreen from "@/public/assets/open-weather-screen.png";
import LuminéElysian from "@/public/assets/LuminéElysian.png";
import Zenboard from "@/public/assets/zenboard.png";
// 
import Image from 'next/image';
import { OutlineButton } from '@/components/common/buttons/Button';
import Navigation_Bar from '@/components/common/header/Navigation_Bar';

const projectsArray = [
    {
        title: 'MAYBEE',
        desc: 'Dezvoltare web - Design interfață',
        link: 'https://www.maybee.ro',
        image: MaybeeScreen,
        tech: 'NextJS 13, MongoDB, Amzon S3',
    },
    {
        title: 'Zenboard',
        desc: 'Dezvoltare web - Design interfață',
        link: '/',
        image: Zenboard,
        tech: '/',
    },

    {
        title: 'Luminé Elysian',
        desc: 'Design 3D - Branding',
        link: 'https://www.behance.net/gallery/184814471/Lumin-Elysian?',
        image: LuminéElysian,
        tech: '/',
    },
    {
        title: 'Open Weather',
        desc: 'Dezvoltare web - Design interfață',
        link: 'maybee.ro',
        image: WeatherScreen,
        tech: 'JavaScript OpenWeather Api',
    },
];

function Projects() {
    return (
        <div className='overflow-x-hidden relative'>
            <Navigation_Bar />
            <Page>
                <div className="flex h-auto items-start justify-center w-full  flex-col  text-center ">
                    <RevealWrapper delay={1000}>
                        <h3 className="text-[#000] leading-[4rem] lg:leading-[8rem] uppercase font-normal  ">Proiecte</h3>
                    </RevealWrapper>
                    <div className='flex justify-between w-full flex-row flex-wrap ' >
                        {projectsArray.map((project, index) => (
                            <RevealWrapper className="mb-10" key={index} delay={100 * index}>
                                <Image className='lg:w-[45vw]' src={project.image} />
                                <div className='w-full flex justify-between'>
                                    <h4>
                                        {project.title}
                                    </h4>
                                    <h5 className='text-right lg:text-center'>
                                        {project.desc}
                                    </h5>

                                </div>
                                <OutlineButton text='Vezi proiectul' link={project.link} />
                            </RevealWrapper>

                        ))}
                    </div>
                </div>

            </Page>
        </div>
    );
}

export default Projects;
