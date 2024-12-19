import {
  Html,
  OrbitControls,
  PivotControls,
  Text,
  TransformControls,
} from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
  const cubeRef = useRef(null);
  const sphereRef = useRef(null);

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <PivotControls
        anchor={[0, 0, 0]} // relative to mesh
        depthTest={false} // shows on top of everything
        lineWidth={4}
        axisColors={[0x93811ff, 0xff4d6d, 0x7ae582]}
        scale={100}
        fixed={true}
      >
        <mesh position-x={-2} ref={sphereRef}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={6}
            occlude={[sphereRef, cubeRef]}
          >
            That's a Sphere 👍
          </Html>
        </mesh>
      </PivotControls>

      <mesh position-x={2} scale={1.5} ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} mode="rotate" />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <Text
        font="./bangers-v20-latin-regular.woff"
        fontSize={0.6}
        color="salmon"
        position={[0, 2, -1]}
        maxWidth={2}
        textAlign="center"
      >
        I LOVE R3F
      </Text>
    </>
  );
}
