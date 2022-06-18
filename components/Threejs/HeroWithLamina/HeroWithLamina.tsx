import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import Background from "./Background";
import MouseReaction from "../MouseReaction";
import Caption from "../Caption";
import Loading from "../../UI/Loading";

type Props = {
  title: string;
};

const HeroWithLamina = ({ title }: Props) => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
      <Background />
      <MouseReaction />
      <Suspense
        fallback={
          <Html center>
            <Loading variant="white" />
          </Html>
        }
      >
        <Caption>{title}</Caption>
      </Suspense>
    </Canvas>
  );
};

export default HeroWithLamina;
