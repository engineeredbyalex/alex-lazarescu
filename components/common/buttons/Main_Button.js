import Link from 'next/link'
import React from 'react'

function Main_Button(props) {
    return (
        <Link className='button button_main' href={`${props.link}`}>{props.content}</Link>
    )
}

export default Main_Button