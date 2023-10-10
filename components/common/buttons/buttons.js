import Link from 'next/link';
import React from 'react';
import { MdEmail } from "react-icons/md"

function FullBackgroundButton({ text, link, bgColor }) {
    return (
        <Link
            href={link}
            className="bg-[#737373] w-[12rem]  h-[3rem] flex items-center justify-center px-3 rounded-3xl uppercase">
            <p className='text-[#DBDBDB]'>
                {text}
            </p>
        </Link>
    );
}

function OutlineToFillButton({ text, link, bgColor }) {
    return (
        <Link
            href={link}
            className="border-[#737373] border-[0.1rem] w-[12rem] h-[3rem] px-3 rounded-3xl uppercase flex items-center justify-center">
            <p className='text-[#737373]'>
                {text}
            </p>
        </Link>
    );
}

function FullWithIconButton({ text, link, bgColor, icon }) {
    return (
        <Link
            href={link}
            className="border-[#737373] border-[0.1rem] w-[12rem] h-[3rem] px-3 rounded-3xl uppercase flex items-center justify-center gap-[10px]"
        >
            <p className='text-[#737373]'>
                {text}
            </p>

            <MdEmail color='#737373' size={30} />

        </Link>
    );
}

export { FullBackgroundButton, OutlineToFillButton, FullWithIconButton };
