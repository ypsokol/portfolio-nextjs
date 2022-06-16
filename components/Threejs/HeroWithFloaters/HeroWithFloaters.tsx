import { Canvas } from "@react-three/fiber";

import Sphere from "./Sphere";
import Floaters from "../Floaters";
import MouseReaction from "../MouseReaction";
import Postprocessing from "./Postprocessing";

const HeroWithFloaters = () => {
  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 7] }}>
      <MouseReaction />
      <Sphere />
      <Floaters count={200} />
      <Postprocessing />
    </Canvas>
  );
};

export default HeroWithFloaters;
