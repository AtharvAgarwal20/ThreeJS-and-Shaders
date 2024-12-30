import {useFrame} from '@react-three/fiber'
import {AccumulativeShadows, OrbitControls, RandomizedLight} from '@react-three/drei'
import {useRef} from 'react'
import {Perf} from 'r3f-perf'

export default function Experience() {
    const directionalLight = useRef(null);
    const cube = useRef(null)

    // useHelper(directionalLight, THREE.DirectionalLightHelper)

    useFrame((state, delta) => {
        cube.current.rotation.y += delta * 0.2
        cube.current.position.x = 2 + Math.sin(state.clock.elapsedTime)
    })

    return <>
        {/*<BakeShadows/>*/}
        {/*<SoftShadows size={25} samples={10} focus={0}/>*/}

        <Perf position="top-left"/>

        <OrbitControls makeDefault/>

        <AccumulativeShadows
            position={[0, -0.99, 0]}
            scale={10}
            color="#316D39"
            opacity={0.8}
            frames={Infinity}
            temporal
            blend={100}
        >
            <RandomizedLight
                position={[1, 2, 3]}
                amount={8}
                radius={1}
                ambient={0.5}
                intensity={3}
                bias={0.001}
            />
        </AccumulativeShadows>

        <directionalLight
            ref={directionalLight}
            position={[1, 2, 3]}
            intensity={4.5}
            shadow-mapSize={[1024, 1024]}   // in threejs, this would've been shadow.mapSize
            shadow-camera-near={1}
            shadow-camera-far={10}
            shadow-camera-top={5}
            shadow-camera-right={5}
            shadow-camera-bottom={-5}
            shadow-camera-left={-5}
            castShadow={true}
        />
        <ambientLight intensity={1.5}/>

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