import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";

const PlanetMesh = () => {
  const meshRef = useRef<any>();
  const texture = useTexture("/img/planet.png");

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    meshRef.current.rotation.y = a/3;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.6, 32, 32]} />
      <meshBasicMaterial color="0xffff00" map={texture} />
    </mesh>
  );
};

const Planet = () => {
  return (
    <Canvas>
      <mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <PlanetMesh />
      </mesh>
    </Canvas>
  );
};

export default Planet;
