import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ModelComponent = lazy(() => import("./Model"));

export default function Space() {
  return (
    <Canvas
      camera={{ position: [-2, 2, 4], zoom: 1.1, near: 0.1, far: 500, fov: 30 }}
    >
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Suspense fallback="Loading>>>>">
        <ModelComponent
          position-y={-0.5}
          scale={[0.2, 0.2, 0.2]}
          url="/dog.glb"
        />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  );
}
