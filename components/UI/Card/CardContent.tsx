import { PropsWithChildren } from "react";

type Props = {
	className?: string;
};

const CardContent = ({
	className = "",
	children,
}: PropsWithChildren<Props>) => {
	return <div className={`card-content ${className}`}>{children}</div>;
};

export default CardContent;
