import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

type Props = {
  v?: Vector3;
};

const MouseReaction = ({ v = new Vector3() }: Props) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
};

export default MouseReaction;
