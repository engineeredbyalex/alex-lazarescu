
import Page from '@/components/layout/page/Page';
import { RevealWrapper } from 'next-reveal';

import MaybeeScreen from "@/public/assets/maybee.ro.png";
import Navigation_Bar from '@/components/common/header/Navigation_Bar';

const projectsArray = [
    {
        title: 'MAYBEE',
        desc: 'Magazin online însoțit de panou pentru administrator.',
        link: '/',
        image: MaybeeScreen,
        tech: 'NextJS 13, MongoDB, Amzon S3',
    },
    {
        title: 'Open Weather',
        desc: 'Aplicație de vreme construită cu OpenWeather API',
        link: '/',
        image: '/open-weather-screen.png', // Make sure the path is correct
        tech: 'JavaScript OpenWeather Api',
    },
];

function Projects() {
    return (
        <div className='overflow-x-hidden relative'>
            <Navigation_Bar />
            <Page>

            </Page>
        </div>
    );
}

export default Projects;
