import { css } from "@emotion/css";
import { Canvas } from "@react-three/fiber";

const Planet = () => {
  return (
    <Canvas>
      <mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <sphereGeometry args={[2.6, 32, 32]} />
          <meshBasicMaterial color="0xffff00" />
        </mesh>
      </mesh>
    </Canvas>
  );
};

export default Planet;
