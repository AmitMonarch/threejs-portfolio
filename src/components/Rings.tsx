import { useGSAP } from "@gsap/react";
import { Center, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";

interface RingsProps {
  position?: [number, number, number];
  scale?: number;
}

const Rings = (props: RingsProps) => {
  const refList = useRef<any>([]);
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
  const ringScale = props.scale || 0.5;

  const getRef = useCallback((mesh: any) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  useEffect(() => {
    if (props.position) {
      setPosition(props.position);
    }
  }, [props.position]);

  const texture = useTexture("textures/rings.png");

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      refList.current.forEach((r: any) => {
        r.position.set(position[0], position[1], position[2]);
      });

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r: any) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          },
        );
    },
    {
      dependencies: position,
    },
  );

  return (
    <Center>
      <group scale={ringScale}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
