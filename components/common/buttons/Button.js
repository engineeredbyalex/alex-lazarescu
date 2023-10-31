import React from 'react';
import Link from 'next/link';

const Button = ({ link, text, type, color }) => {
    const getButtonStyle = () => {
        switch (type) {
            case 'outline':
                return {
                    border: `2px solid ${color}`,
                    color: color,
                    background: 'none',
                };
            case 'transparent':
                return {
                    border: 'none',
                    color: color,
                    background: 'transparent',
                };
            case 'solid':
                return {
                    border: `2px solid ${color}`,
                    color: '#cc66ff',
                    background: color,
                };
            default:
                return {
                    border: `2px solid ${color}`,
                    color: color,
                    background: 'none',
                };
        }
    };

    return (
        <Link href={link}>
            <p style={getButtonStyle()} className="button px-3 py-3 rounded-2xl text-[16px] md:text-[25px] lg:text-[30px] flex items-center justify-center text-center uppercase font-bold">
                {text}
            </p>
        </Link>
    );
};

export default Button;