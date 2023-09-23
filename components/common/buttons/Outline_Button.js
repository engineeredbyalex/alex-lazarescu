import Link from 'next/link'
import React from 'react'

function Outline_Button(props) {
    return (
        <Link className='button button_outline' href={`${props.link}`}><p>
            {props.content}</p></Link>
    )
}

export default Outline_Button