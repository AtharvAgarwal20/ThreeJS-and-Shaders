export default function Experience() {
    return (
        <>
            <mesh position={[-2, 0, 0]}>
                <sphereGeometry />
                <meshBasicMaterial color={'orange'} />
            </mesh>
            <mesh
                scale={1.5}
                position={[2, 0, 0]}
                rotation={[Math.PI / 4, 0, 0]}
            >
                {/*<sphereGeometry args={[1.5, 32, 32]} />*/}
                <boxGeometry />
                <meshBasicMaterial color="mediumpurple" />
            </mesh>
            <mesh
                position={[0, -1, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={10}
            >
                <planeGeometry />
                <meshBasicMaterial color="greenyellow" />
            </mesh>
        </>
    );
}
