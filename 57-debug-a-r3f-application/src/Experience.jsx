import {OrbitControls} from '@react-three/drei'
import {button, useControls} from "leva";
import {Perf} from 'r3f-perf'

export default function Experience() {
    const {perfVisibility, perfPosition} = useControls({
        perfVisibility: false,
        perfPosition: {
            options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        }
    })

    const {position, color, visible} = useControls('sphere', {
        position: {
            value: {x: -2, y: 0, z: 0},
            // min: -5,
            // max: 5,
            step: 0.01
        },
        color: 'orange',
        visible: true,
        clickMe: button(() => {
            console.log("Leva btn clicked")
        }),
        choice: {options: ['a', 'b', 'c', 'd', 'e']}
    })

    const {scale} = useControls('cube', {
        scale: {
            value: 1.5,
            step: 0.01,
            min: 0,
            max: 10,
        }
    })

    return <>
        {perfVisibility ? <Perf position={perfPosition}/> : null}
        {/*Most important is the reading under the GPU,
           below 1ms is good,
           2-2.5ms is edge of performance on normal pc,
           3ms is absolute maximum you should have*/}

        <OrbitControls makeDefault/>

        <directionalLight position={[1, 2, 3]} intensity={4.5}/>
        <ambientLight intensity={1.5}/>

        <mesh position={[position.x, position.y, position.z]} visible={visible}>
            <sphereGeometry/>
            <meshStandardMaterial color={color}/>
        </mesh>

        <mesh position-x={2} scale={scale}>
            <boxGeometry/>
            <meshStandardMaterial color="mediumpurple"/>
        </mesh>

        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry/>
            <meshStandardMaterial color="greenyellow"/>
        </mesh>
    </>
}