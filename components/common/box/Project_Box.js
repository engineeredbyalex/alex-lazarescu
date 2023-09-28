import React from 'react'
import Image from 'next/image'
import Outline_Button from '../buttons/Outline_Button'

function Project_Box(props) {
    const { title, description, imageUrl, buttonText } = props;

    return (
        <div className='project_box'>
            <Image height={1000} width={1000} src={imageUrl} />
            <div className='project_box_content'>
                <h5 className='main_text'>{title}</h5>
                <p className='main_text'>{description}</p>
                <Outline_Button content={buttonText} />
            </div>
        </div>
    )
}

export default Project_Box