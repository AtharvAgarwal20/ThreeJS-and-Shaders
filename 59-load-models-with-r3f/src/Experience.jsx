import {OrbitControls} from '@react-three/drei'
import {Perf} from 'r3f-perf'
import {Suspense} from "react";
import Hamburger from "./Hamburger.jsx";

function Placeholder({position, scale, boxArgs, color}) {
    return (
        <mesh position={position} scale={scale}>
            <boxGeometry args={boxArgs}/>
            <meshBasicMaterial wireframe={true} color={color}/>
        </mesh>
    );
}

export default function Experience() {

    return <>
        <Perf position="top-left"/>

        <OrbitControls makeDefault/>

        <directionalLight castShadow={true} position={[1, 2, 3]} intensity={4.5}/>
        <ambientLight intensity={1.5}/>

        <mesh receiveShadow={true} position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow"/>
        </mesh>

        <Suspense
            fallback={(
                <Placeholder
                    position={[0, 0.5, 0]}
                    scale={[2, 3, 2]}
                    boxArgs={[1, 1, 1, 2, 2, 2]}
                    color="red"
                />
            )}>
            {/*<Model/>*/}
            <Hamburger/>
        </Suspense>
    </>
}