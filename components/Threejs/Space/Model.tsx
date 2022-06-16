import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model({ url, ...props }) {
  const scene = useLoader(GLTFLoader, url);
  return <primitive object={scene.scene} {...props} />;
}
