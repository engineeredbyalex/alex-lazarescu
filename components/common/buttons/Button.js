// OutlineButton.js
import React from 'react';

export const OutlineButton = ({ link, text }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="button button_outline button_outline_slide_right">
                <h5>{text}</h5>
            </div>
        </a>
    );
};

export const SolidButton = ({ link, text }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="button button_solid button_solid_transform">
                <h5>{text}</h5>
            </div>
        </a>
    );
};
