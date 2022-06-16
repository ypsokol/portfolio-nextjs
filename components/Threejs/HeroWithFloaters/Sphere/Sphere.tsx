import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import SpotLight from "./SpotLight";

type Props = {};

const Sphere = ({}: Props) => {
  const circleRef = useRef();
  useFrame(() => (circleRef.current.rotation.y += 0.009));

  return (
    <>
      <SpotLight />

      <group ref={circleRef}>
        <mesh>
          <sphereBufferGeometry args={[2, 9, 9]} />
          <meshStandardMaterial wireframe />
        </mesh>
      </group>
    </>
  );
};

export default Sphere;
