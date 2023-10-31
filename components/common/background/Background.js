import React, { useRef, useEffect } from 'react';


export default function Background() {
    const circleContainerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const circleContainer = circleContainerRef.current;
            const circles = circleContainer.children;

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            for (let i = 0; i < circles.length; i++) {
                const circle = circles[i];
                const offsetX = circle.offsetLeft + circle.clientWidth / 2;
                const offsetY = circle.offsetTop + circle.clientHeight / 2;

                const deltaX = mouseX - offsetX;
                const deltaY = mouseY - offsetY;

                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                const maxDistance = 200;
                const move = (maxDistance - distance) / maxDistance * 10;

                circle.style.transform = `translate(${move}px, ${move}px)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='background-container' ref={circleContainerRef}>
            <div className='circle-container'>
                <div className='circle circle1'></div>
                <div className='circle circle2'></div>
                <div className='circle circle3'></div>
                <div className='circle circle4'></div>
                <div className='circle circle5'></div>
            </div>
        </div>
    );
}
