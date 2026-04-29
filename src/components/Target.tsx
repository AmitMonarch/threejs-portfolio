import { Float, useGLTF } from "@react-three/drei";

const Target = ({ scale = 1, ...props }: any) => {
  const { nodes, materials } = useGLTF("/models/dart_board.glb") as {
    nodes: Record<string, any>;
    materials: Record<string, any>;
  };

  return (
    <Float floatIntensity={1}>
      <group {...props} dispose={null} scale={scale}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_Material002_0.geometry}
            material={materials["Material.002"]}
            rotation={[-0.004, 0, 0]}
            scale={[150.437, 150.437, 3.675]}
          />
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/dart_board.glb");

export default Target;
