import { RevealWrapper } from 'next-reveal'
import React from 'react'


function Service_Box(props) {
    return (

        <div className='service_box'>
            <h3 className='uppercase sec_text_dark'>{props.title}</h3>
            <h5 className='sec_text_dark'>{props.content}</h5>
        </div>

    )
}

export default Service_Box