import {useFrame, useThree} from '@react-three/fiber'
import {ContactShadows, Environment, OrbitControls, useHelper} from '@react-three/drei'
import {useEffect, useRef} from 'react'
import {Perf} from 'r3f-perf'
import * as THREE from "three";
import {useControls} from "leva";

export default function Experience() {
    const directionalLight = useRef(null);
    const cube = useRef(null)

    useHelper(directionalLight, THREE.DirectionalLightHelper)

    useFrame((state, delta) => {
        cube.current.rotation.y += delta * 0.2
        // cube.current.position.x = 2 + Math.sin(state.clock.elapsedTime)
    })

    const {color, opacity, blur} = useControls('contact shadows', {
        color: "#1d8f75",
        opacity: {value: 0.4, max: 1, min: 0},
        blur: {value: 2.8, max: 10, min: 0},
    })

    const {sunPosition} = useControls('sky', {
        sunPosition: [1, 2, 3]
    })

    const {envMapIntensity} = useControls('environment', {
        envMapIntensity: {value: 1.5, min: 0, max: 12}
    })

    const {scene} = useThree()

    useEffect(() => {
        scene.environmentIntensity = envMapIntensity
    }, [envMapIntensity]);

    return <>
        {/*<BakeShadows/>*/}
        {/*<SoftShadows size={25} samples={10} focus={0}/>*/}

        <Environment
            background
            preset='night'
            // files='./environmentMaps/the_sky_is_on_fire_2k.hdr'
            // files={
            //     [
            //         './environmentMaps/2/px.jpg',
            //         './environmentMaps/2/nx.jpg',
            //         './environmentMaps/2/py.jpg',
            //         './environmentMaps/2/ny.jpg',
            //         './environmentMaps/2/pz.jpg',
            //         './environmentMaps/2/nz.jpg',
            //     ]
            // }
        />

        <Perf position="top-left"/>

        <OrbitControls makeDefault/>

        {/*<AccumulativeShadows*/}
        {/*    position={[0, -0.99, 0]}*/}
        {/*    scale={10}*/}
        {/*    color="#316D39"*/}
        {/*    opacity={0.8}*/}
        {/*    frames={Infinity}*/}
        {/*    temporal*/}
        {/*    blend={100}*/}
        {/*>*/}
        {/*    <RandomizedLight*/}
        {/*        position={[1, 2, 3]}*/}
        {/*        amount={8}*/}
        {/*        radius={1}*/}
        {/*        ambient={0.5}*/}
        {/*        intensity={3}*/}
        {/*        bias={0.001}*/}
        {/*    />*/}
        {/*</AccumulativeShadows>*/}

        <ContactShadows
            position={[0, -0.99, 0]}
            scale={10}
            resolution={512}
            far={5}
            color={color}
            opacity={opacity}
            blur={blur}
            frames={1}
        />

        {/*<directionalLight*/}
        {/*    ref={directionalLight}*/}
        {/*    position={sunPosition}*/}
        {/*    intensity={4.5}*/}
        {/*    shadow-mapSize={[1024, 1024]}   // in threejs, this would've been shadow.mapSize*/}
        {/*    shadow-camera-near={1}*/}
        {/*    shadow-camera-far={10}*/}
        {/*    shadow-camera-top={5}*/}
        {/*    shadow-camera-right={5}*/}
        {/*    shadow-camera-bottom={-5}*/}
        {/*    shadow-camera-left={-5}*/}
        {/*    castShadow={true}*/}
        {/*/>*/}
        {/*<ambientLight intensity={1.5}/>*/}

        {/*<Sky sunPosition={sunPosition}/>*/}

        <mesh castShadow={true} position-x={-2}>
            <sphereGeometry/>
            <meshStandardMaterial color="orange"/>
        </mesh>

        <mesh castShadow={true} ref={cube} position-x={2} scale={1.5}>
            <boxGeometry/>
            <meshStandardMaterial color="mediumpurple"/>
        </mesh>

        <mesh receiveShadow={false} position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow"/>
        </mesh>

    </>
}