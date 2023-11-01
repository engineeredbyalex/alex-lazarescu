import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const AnimatedBackground = () => {
    const group = useRef();

    useFrame(() => {
        group.current.rotation.x += 0.01;
        group.current.rotation.y += 0.01;
    });

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <group ref={group}>
                <Sphere args={[1, 16, 16]}>
                    <meshStandardMaterial color="hotpink" />
                </Sphere>
                <Sphere args={[0.5, 16, 16]} position={[2, 0, 0]}>
                    <meshStandardMaterial color="orange" />
                </Sphere>
                <Sphere args={[0.3, 16, 16]} position={[-2, 0, 0]}>
                    <meshStandardMaterial color="lightblue" />
                </Sphere>
            </group>
        </Canvas>
    );
};

export default AnimatedBackground;
