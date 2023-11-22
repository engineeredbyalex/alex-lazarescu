// importing Page
import Page from '../layout/page/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
//

import { useEffect, useState } from "react";
import axios from "axios";
// 
import { OutlineButton } from '../common/buttons/Button'
import Link from 'next/link';



function SelectedWork() {
    const [projects, setProjects] = useState([]);


    useEffect(() => {

        axios.get('/api/products').then(response => {
            setProjects(response.data);

        });
    }, [])
    return (
        <Page>
            <div className="flex h-auto items-start justify-center w-full  flex-col  text-center ">
                <RevealWrapper delay={5000}>
                    <div className=' flex gap-5  items-center'>
                        <h3 className="text-[#000] leading-[4rem] lg:leading-[8rem] uppercase font-normal  ">Proiecte alese</h3>
                        <Link className='button_outline button button_outline_slide_right' href={'/projects'}><h5>Vezi mai multe proiecte</h5> </Link>
                    </div>
                </RevealWrapper>
                <div className='flex justify-between w-full flex-row flex-wrap  '>
                    {projects.slice(0, 4).map(project => (
                        <RevealWrapper className="mb-10" key={project._id} delay={1000 * project._id}>
                            <img className='lg:w-[45vw]' src={project.images[0]} />
                            <div className='w-full  flex justify-between items-start flex-col lg:flex-row lg:items-center '>
                                <h4 className='text-left'>{project.title}</h4>
                                <h5 className='text-right lg:text-center'>{project.desc}</h5>
                            </div>
                            <OutlineButton text='Vezi proiectul' link={project.link} />
                        </RevealWrapper>
                    ))}

                </div>
            </div>
        </Page>
    );
}


export default SelectedWork;