import React from "react";

type Props = {
	subtitle: string;
	className?: string;
};

const SectionSubtitle = ({ subtitle, className = "" }: Props) => {
	return <span className={`section__subtitle ${className}`}>{subtitle}</span>;
};

export default SectionSubtitle;
