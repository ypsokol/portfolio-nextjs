import React from "react";

type Props = {
	title: string;
	className?: string;
};

const SectionTitle = ({ title, className = "" }: Props) => {
	return <h2 className={`section__title ${className}`}>{title}</h2>;
};

export default SectionTitle;
