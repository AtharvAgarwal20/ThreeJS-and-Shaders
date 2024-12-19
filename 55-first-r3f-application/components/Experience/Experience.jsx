import { useFrame, extend, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import CustomObject from '../CustomObject/CustomObject.jsx';

extend({ OrbitControls });

export default function Experience() {
    const { camera, gl } = useThree();

    const cubeRef = useRef(null);
    const cubeAndSphereRef = useRef(null);

    useFrame((state, delta) => {
        cubeRef.current.rotation.y -= delta;
        // cubeAndSphereRef.current.rotation.y += delta;

        // state.camera.position.x = Math.sin(state.clock.elapsedTime) * 8;
        // state.camera.position.z = Math.cos(state.clock.elapsedTime) * 8;
        // state.camera.lookAt(0, 0, 0);
    });
    return (
        <>
            <orbitControls args={[camera, gl.domElement]} />

            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />

            <group ref={cubeAndSphereRef}>
                <mesh position={[-2, 0, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial color={'orange'} />
                </mesh>
                <mesh
                    scale={1.5}
                    position={[2, 0, 0]}
                    rotation={[0, Math.PI / 4, 0]}
                    ref={cubeRef}
                >
                    {/*<sphereGeometry args={[1.5, 32, 32]} />*/}
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </group>
            <mesh
                position={[0, -1, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={10}
            >
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>
            <CustomObject />
        </>
    );
}
