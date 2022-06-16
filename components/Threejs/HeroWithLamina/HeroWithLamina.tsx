import { FC, Suspense } from "react";
import MouseReaction from "../MouseReaction";
import Caption from "../Caption";
import { Canvas } from "@react-three/fiber";
import Background from "./Background";

type Props = {
	title: string;
};

const HeroWithLamina = ({ title }: Props) => {
	return (
		<Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
			<Background />
			<MouseReaction />
			<Suspense fallback={null}>
				<Caption>{title}</Caption>
			</Suspense>
		</Canvas>
	);
};

export default HeroWithLamina;
