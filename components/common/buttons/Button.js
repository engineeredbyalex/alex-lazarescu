// OutlineButton.js
import React from 'react';
import Link from 'next/link';

export const OutlineButton = ({ link, text }) => {

    return (
        <Link href={`/${link}`}>
            <div className="button button_outline button_outline_slide_right" target="_blank" rel="noopener noreferrer">
                <h5>{text}</h5>
            </div>
        </Link>
    );
};


export const SolidButton = ({ link, text }) => {

    return (
        <Link href={`/${link}`}>
            <div className="button button_solid  button_solid_transform" target="_blank" rel="noopener noreferrer">
                <h5>{text}</h5>
            </div>
        </Link>
    );
};
