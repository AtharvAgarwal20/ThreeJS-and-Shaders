import { Canvas } from '@react-three/fiber';
import Experience from '../components/Experience/Experience';

export default function App() {
    return (
        <Canvas
            // orthographic
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
