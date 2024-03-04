// OutlineButton.js
import React from 'react';

export const OutlineButton = ({ link, text }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="button button_outline">
                <h4 style={{ fontWeight: 400 }}>{text}</h4>
            </div>
        </a>
    );
};

export const SolidButton = ({ link, text }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="button button_solid">
                <h4 style={{ fontWeight: 400 }}>{text}</h4>
            </div>
        </a>
    );
};
