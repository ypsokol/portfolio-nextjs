import * as THREE from "three";
import { useRef, useMemo, useEffect } from "react";
import { LayerMaterial, Depth } from "lamina";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import {
  EffectComposer,
  SSAO,
  Bloom,
  Noise,
} from "@react-three/postprocessing";
import { Caption } from "./Lamina";

type Swarm = {
  count: number;
};

function Swarm({ count }: Swarm) {
  const mesh = useRef();
  const light = useRef();
  const { viewport, mouse } = useThree();

  const dummy = useMemo(() => new THREE.Object3D(), []);
  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);
  // The innards of this hook will run every frame
  useFrame((state) => {
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      // There is no sense or reason to any of this, just messing around with trigonometric functions
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      particle.mx += mouse.x * viewport.width * particle.mx * 0.01;
      particle.my += mouse.y * viewport.height * particle.my * 0.01;
      // Update the dummy object
      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });
  const circleRef = useRef();
  useFrame(() => (circleRef.current.rotation.y += 0.009));

  return (
    <>
      <group ref={circleRef}>
        {/* Sphere with rotation */}
        <Caption>{`THE\nSEVENTY-TWO\nNAMES\nOF GOD.`}</Caption>
        <mesh>
          <sphereBufferGeometry args={[2, 9, 9]} />
          <meshStandardMaterial wireframe />
        </mesh>
      </group>
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <sphereBufferGeometry args={[1, 1, 2]} />
        <meshStandardMaterial wireframe />
      </instancedMesh>
    </>
  );
}

// Cursor position checker and moving objects
function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
}

export default function Bg() {
  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 7] }}>
      <Rig />

      {/* Color of figure lighting */}
      <color attach="background" args={["hsl(219, 48%, 8%)"]} />

      {/* Color of general light */}
      <pointLight intensity={1} color="hsl(250, 66%, 75%)" />
      <spotLight
        intensity={0.2}
        position={[70, 70, 70]}
        penumbra={1}
        color="hsl(250, 66%, 75%)"
      />
      <Swarm count={200} />

      {/* Adding different postprocessing effects */}
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
    </Canvas>
  );
}
