import { Depth, LayerMaterial, Noise } from "lamina";
import { BackSide, Vector3 } from "three";

const Background = () => {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial
        side={BackSide}
        attachArray={undefined}
        attachObject={undefined}
        attachFns={undefined}
      >
        <Depth
          colorB="red"
          colorA="skyblue"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={new Vector3(100, 100, -100)}
          attachArray={undefined}
          attachObject={undefined}
          attachFns={undefined}
        />
        <Noise
          mapping="local"
          type="white"
          scale={1000}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.2}
          attachArray={undefined}
          attachObject={undefined}
          attachFns={undefined}
        />
      </LayerMaterial>
    </mesh>
  );
};

export default Background;
