import { Canvas } from '@react-three/fiber';
import Experience from '../components/Experience/Experience';
import * as THREE from 'three';

export default function App() {
    return (
        <Canvas
            // orthographic
            gl={{
                antialias: false,
                toneMapping: THREE.ReinhardToneMapping,
            }}
            camera={{
                fov: 45,
                // zoom: 100,
                near: 0.1,
                far: 200,
                position: [3, 2, 6],
            }}
        >
            <Experience />
        </Canvas>
    );
}
