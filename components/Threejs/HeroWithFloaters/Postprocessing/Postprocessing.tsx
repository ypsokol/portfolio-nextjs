import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing";
import Color from "./Color";

const Postprocessing = () => {
  return (
    <>
      <Color />

      <EffectComposer multisampling={0}>
        <Noise opacity={0.1} />
        <Bloom
          intensity={1.5}
          kernelSize={2}
          luminanceThreshold={0}
          luminanceSmoothing={0.3}
        />
        <Bloom
          intensity={1.5}
          kernelSize={4}
          luminanceThreshold={0}
          luminanceSmoothing={0.0}
        />
      </EffectComposer>
    </>
  );
};

export default Postprocessing;
