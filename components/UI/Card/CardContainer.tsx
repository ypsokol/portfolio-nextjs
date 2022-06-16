import { PropsWithChildren } from "react";

type Props = {
	className?: string;
};

const CardContainer = ({
	className = "",
	children,
}: PropsWithChildren<Props>) => {
	return <div className={`card ${className}`}>{children}</div>;
};

export default CardContainer;
