// importing Page
import Page from '../layout/Page'
// importing Reveal Wrapper
import { RevealWrapper } from 'next-reveal'
// inporting axios
import axios from "axios";
// importing useState
import { useEffect, useState } from "react";
// importing button
import { OutlineButton } from '../common/buttons/Button'
// 


function SelectedWork() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get('/api/project').then(response => {
            setProjects(response.data);
        });
    }, [])



    return (
        <Page>
            <div className="page_container">
                <RevealWrapper origin="bottom">
                    <h3 style={{ textTransform: "uppercase", margin: '60px 0px 60px 0px' }}>Featured Projects</h3>
                </RevealWrapper>

                <div className='projects_grid'>
                    {projects.slice(0, 4).map(project => (
                        <div key={project._id} className='project '>
                                <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center", width: '100%', margin: '50px 0px 0px 0px', }}>
                                    <h3 style={{ textTransform: "uppercase", fontWeight: "normal", lineHeight: 0, marginBlock: '30px' }}>{project.title}</h3>
                                    <p style={{ textTransform: "uppercase", fontWeight: "normal", lineHeight: 0, marginBottom: '50px' }} >{project.desc}</p>
                                </div>
                                <img style={{ width: '200px', height: '400px' }} src={project?.images[1]} alt={project._id} />
                                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0px 50px 0px' }}>
                                    <OutlineButton text='TAKE A LOOK' link={project.link} />
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </Page>
    );
}


export default SelectedWork;