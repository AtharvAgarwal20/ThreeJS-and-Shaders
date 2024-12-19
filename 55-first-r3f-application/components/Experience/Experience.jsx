import { useFrame, extend, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

extend({ OrbitControls });

export default function Experience() {
    const { camera, gl } = useThree();

    const cubeRef = useRef(null);
    const cubeAndSphereRef = useRef(null);

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta;
        // cubeAndSphereRef.current.rotation.y += delta;
    });
    return (
        <>
            <orbitControls args={[camera, gl.domElement]} />
            <group ref={cubeAndSphereRef}>
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
            </group>
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
