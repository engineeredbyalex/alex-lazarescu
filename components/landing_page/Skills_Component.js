import Center from '../common/layout/Center';
import Page from '../common/layout/Page';
import { RevealWrapper } from 'next-reveal';

const newSkillsData = [
    {
        category: 'Frontend ',
        skills: ['HTML', 'CSS', 'JavaScript', 'React',],
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Next.js',],
    },
    {
        category: 'Baze de date',
        skills: ['MongoDB', 'Firebase'],
    },
    {
        category: 'UI/UX Design',
        skills: ['Figma', 'Adobe XD', 'Sketch'],
    },
];

function NewSkills_Component() {
    return (
        <Page background="#2C3340">
            <Center>
                <div className='w-screen flex justify-center flex-col items-center'>
                    <Center>
                        <RevealWrapper origin='bottom' delay={1000} duration={1000} distance='500px' reset={false}>
                            <h2 className='sec_text'>Cunoștințe</h2>
                        </RevealWrapper>
                    </Center>
                </div>
                <Center>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        {newSkillsData.map((categoryData, index) => (
                            <RevealWrapper origin='bottom' delay={1500} duration={1000} distance='500px' reset={false}>
                                <div className='flex flex-col items-center justify-center' key={index}>
                                    <h4 className='sec_text'>{categoryData.category}</h4>
                                    <div className='flex flex-wrap gap-2'>
                                        {categoryData.skills.map((skill, skillIndex) => (
                                            <h4 className='sec_text accent_container' key={skillIndex}>
                                                {skill}
                                            </h4>
                                        ))}
                                    </div>
                                </div>
                            </RevealWrapper>
                        ))}
                    </div>
                </Center>
            </Center>
        </Page>
    );
}

export default NewSkills_Component;