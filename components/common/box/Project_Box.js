
import { RevealWrapper } from 'next-reveal';
import Image from 'next/image';
import { FullBackgroundButton } from '../buttons/buttons';
import Link from 'next/link';

function ProjectBox({ imageSrc, projectName, projectDescription, techStack, projectLink }) {


    return (
        <div className="overflow-hidden text-left">
            <div className='max-w-[500px] max-h-[500px]'>
                <Image src={imageSrc}></Image>
            </div>
            <h3 className='text-[30px] leading-[40px]'>{projectName}</h3>
            <h4 className='text-[20px] leading-[20px]'>{projectDescription}</h4>
            <h5 className='text-[16px] leading-[30px]'>{techStack}</h5>
            <Link href={projectLink}>
                <h5 className='text-[16px] leading-[30px]'>
                    Vezi proiect
                </h5>
            </Link>
        </div>
    );
}

export default ProjectBox;