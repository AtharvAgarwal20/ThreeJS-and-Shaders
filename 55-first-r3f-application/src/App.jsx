import { Canvas } from '@react-three/fiber';
import Experience from '../components/Experience/Experience';
import * as THREE from 'three';

export default function App() {
    return (
        <Canvas
            // orthographic
            dpr={[1, 2]} // clamping pixel ratio between 1 and 2. Good for performance since phones have high pixel ratio but insufficient performance power
            gl={{
                antialias: false, // default is true
                toneMapping: THREE.ReinhardToneMapping, // default is ACESFilmic
                outputColorSpace: THREE.LinearSRGBColorSpace, // default is SRGB
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
