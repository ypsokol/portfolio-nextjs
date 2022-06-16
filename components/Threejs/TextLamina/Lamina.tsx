import { FC } from "react";

type Props = {};

import * as THREE from "three";
import { Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Text, Plane } from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";
import Back from "./Background";

export default function Lamina() {
  return (
    <>
      <Back />

      {/*<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>*/}
      {/*  <Bg />*/}
      {/*  <Suspense fallback={null}>*/}
      {/*    <mesh>*/}
      {/*      <sphereBufferGeometry args={[2, 9, 9]} />*/}
      {/*      <meshStandardMaterial wireframe wireframeLinewidth={0.5} />*/}
      {/*    </mesh>*/}
      {/*    <Caption>{`THE\nSEVENTY-TWO\nNAMES\nOF GOD.`}</Caption>*/}
      {/*  </Suspense>*/}
      {/*</Canvas>*/}
    </>
  );
}

export function Caption({ children }) {
  const { width } = useThree((state) => state.viewport);
  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={0.8}
      font="/Ki-Medium.ttf"
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
  );
}

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB="red"
          colorA="skyblue"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={1000}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.2}
        />
      </LayerMaterial>
    </mesh>
  );
}
