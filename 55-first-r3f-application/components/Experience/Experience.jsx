export default function Experience() {
    return (
        <>
            <mesh
                scale={1.5}
                position={[2, 0, 0]}
                rotation={[Math.PI / 4, 0, 0]}
            >
                {/*<sphereGeometry args={[1.5, 32, 32]} />*/}
                <boxGeometry />
                <meshBasicMaterial color="red" wireframe={true} />
            </mesh>
        </>
    );
}
