import React from 'react';
import Link from 'next/link';

const Button = ({ link, text, type, color }) => {
    const getButtonStyle = () => {
        switch (type) {
            case 'outline':
                return {
                    border: `2px solid ${color}`,
                    color: '#000',
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
                    color: '#fff',
                    background: color,
                };
            default:
                return {
                    border: `2px solid #fff`,
                    color: '#fff',
                    background: 'none',
                };
        }
    };

    return (
        <Link href={link}>
            <p style={getButtonStyle()} className="button w-[15rem] h-[3rem]   rounded-2xl text-[16px] md:text-[18px] lg:text-[20px] flex items-center justify-center text-center uppercase font-normal hover:scale-105 transition-all ease-in-out">
                {text}
            </p>
        </Link>
    );
};

export default Button;