import {OrbitControls} from '@react-three/drei'
import {button, useControls} from "leva";

export default function Experience() {
    const {spherePosition, sphereColor, visible} = useControls({
        spherePosition: {
            value: {x: -2, y: 0, z: 0},
            // min: -5,
            // max: 5,
            step: 0.01
        },
        sphereColor: 'orange',
        visible: true,
        clickMe: button(() => {
            console.log("Leva btn clicked")
        }),
        choice: {options: ['a', 'b', 'c', 'd', 'e']}
    })

    return <>
        <OrbitControls makeDefault/>

        <directionalLight position={[1, 2, 3]} intensity={4.5}/>
        <ambientLight intensity={1.5}/>

        <mesh position={[spherePosition.x, spherePosition.y, spherePosition.z]} visible={visible}>
            <sphereGeometry/>
            <meshStandardMaterial color={sphereColor}/>
        </mesh>

        <mesh position-x={2} scale={1.5}>
            <boxGeometry/>
            <meshStandardMaterial color="mediumpurple"/>
        </mesh>

        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow"/>
        </mesh>
    </>
}