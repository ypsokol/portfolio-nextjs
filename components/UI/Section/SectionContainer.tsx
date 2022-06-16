import { PropsWithChildren } from "react";

type Props = {
	className?: string;
	id?: string;
};

const SectionContainer = ({
	className = "",
	id,
	children,
}: PropsWithChildren<Props>) => {
	return (
		<section className={`section ${className}`} id={id}>
			{children}
		</section>
	);
};

export default SectionContainer;
