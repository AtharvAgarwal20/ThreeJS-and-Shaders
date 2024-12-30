import {useFrame} from '@react-three/fiber'
import {BakeShadows, OrbitControls, useHelper} from '@react-three/drei'
import {useRef} from 'react'
import {Perf} from 'r3f-perf'
import * as THREE from 'three'

export default function Experience() {
    const directionalLight = useRef(null);
    const cube = useRef(null)

    useHelper(directionalLight, THREE.DirectionalLightHelper)

    useFrame((state, delta) => {
        cube.current.rotation.y += delta * 0.2
    })

    return <>
        <BakeShadows/>

        <Perf position="top-left"/>

        <OrbitControls makeDefault/>

        <directionalLight ref={directionalLight} castShadow={true} position={[1, 2, 3]} intensity={4.5}/>
        <ambientLight intensity={1.5}/>

        <mesh castShadow={true} position-x={-2}>
            <sphereGeometry/>
            <meshStandardMaterial color="orange"/>
        </mesh>

        <mesh castShadow={true} ref={cube} position-x={2} scale={1.5}>
            <boxGeometry/>
            <meshStandardMaterial color="mediumpurple"/>
        </mesh>

        <mesh receiveShadow={true} position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow"/>
        </mesh>

    </>
}