import { PropsWithChildren } from "react";

import { useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const Caption = ({ children }: PropsWithChildren) => {
  const { width } = useThree((state) => state.viewport);
  const maxFont = width > 7.65 ? 7.65 : width;
  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={0.8}
      font="/fonts/WILDWORLD_FONT.otf"
      fontSize={maxFont / 8}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
  );
};

export default Caption;
