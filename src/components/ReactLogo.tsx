import { Float, useGLTF } from "@react-three/drei";

interface ReactLogoProps {
  position: [number, number, number];
  scale?: number;
}

const ReactLogo = ({ scale = 0.4, ...props }: ReactLogoProps) => {
  const { nodes, materials } = useGLTF("/models/react.glb") as {
    nodes: Record<string, any>;
    materials: Record<string, any>;
  };

  return (
    <Float floatIntensity={1}>
      <group scale={scale} dispose={null} {...props}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react.glb");

export default ReactLogo;
