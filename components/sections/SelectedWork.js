// importing Page
import Page from '../layout/page/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
// 
import MaybeeScreen from "@/public/assets/maybee.ro.png";
import WeatherScreen from "@/public/assets/open-weather-screen.png";
// 
import Image from 'next/image';
import { OutlineButton } from '../common/buttons/Button'

const projectsArray = [
    {
        title: 'MAYBEE',
        desc: 'Dezvoltare web - design interfață',
        link: '/',
        image: MaybeeScreen,
        tech: 'NextJS 13, MongoDB, Amzon S3',
    },
    {
        title: 'Open Weather',
        desc: 'Dezvoltare web - design interfață',
        link: 'maybee.ro',
        image: WeatherScreen,
        tech: 'JavaScript OpenWeather Api',
    },
];

function SelectedWork() {
    return (
        <Page>

            <div className="flex items-start justify-center h-auto flex-col gap-5 text-center mb-20">
                <RevealWrapper delay={1000}>
                    <h3 className="text-[#000] leading-[4rem] lg:leading-[8rem] uppercase font-normal  ">Proiecte alese</h3>
                </RevealWrapper>
                <div className='z-[2] flex flex-col lg:grid grid-cols-2 gap-10 lg:gap-5 '>
                    {projectsArray.map((project, index) => (
                        <RevealWrapper key={index} delay={1300 * index}>
                            <div className=''>
                                <div className='w-[90vw] h-[35vh] lg:w-[30rem] lg:h-[15rem] bg-black relative z-[2] \'>
                                    <Image
                                        layout="fill"
                                        objectFit="cover"
                                        src={project.image}
                                        alt={project.title}
                                    />

                                </div>
                                <div className=" flex flex-col justify-center text-left items-start mb-5 ml-5 ">
                                    <h4 className='text-[#000] font-[300] '>{project.title}</h4>
                                    <h5 className='text-[#000] font-[300] leading-4 mb-5'>{project.desc}</h5>

                                    <OutlineButton text='Vezi proiectul' />
                                </div>
                            </div>
                        </RevealWrapper>

                    ))}
                </div>
            </div>

        </Page>
    )
}


export default SelectedWork;
