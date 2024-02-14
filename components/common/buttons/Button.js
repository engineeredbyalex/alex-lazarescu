// OutlineButton.js
import React from 'react';

export const OutlineButton = ({ link, text }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="button button_outline">
                <h3 style={{ fontWeight: 300 }}>{text}</h3>
            </div>
        </a>
    );
};

export const SolidButton = ({ link, text }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="button button_solid">
                <h3 style={{ fontWeight: 300 }}>{text}</h3>
            </div>
        </a>
    );
};
