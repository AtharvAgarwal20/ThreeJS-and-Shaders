import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Experience() {
    const cubeRef = useRef(null);
    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta;
    });
    return (
        <>
            <mesh position={[-2, 0, 0]}>
                <sphereGeometry />
                <meshBasicMaterial color={'orange'} />
            </mesh>
            <mesh
                scale={1.5}
                position={[2, 0, 0]}
                rotation={[0, Math.PI / 4, 0]}
                ref={cubeRef}
            >
                {/*<sphereGeometry args={[1.5, 32, 32]} />*/}
                <boxGeometry />
                <meshBasicMaterial color="mediumpurple" />
            </mesh>
            <mesh
                position={[0, -1, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={10}
            >
                <planeGeometry />
                <meshBasicMaterial color="greenyellow" />
            </mesh>
        </>
    );
}
