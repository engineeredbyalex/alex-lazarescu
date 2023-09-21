import Link from 'next/link'
import React from 'react'

function Main_Button(props) {
    return (
        <Link className='main_button' href={props.link}>
            {props.text}
        </Link>
    )
}

export default Main_Button