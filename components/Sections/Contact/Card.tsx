import { ReactNode } from "react";
import { CardContainer, CardContent, CardActions } from "../../UI/Card";

type Props = {
	title: string;
	subtitle: string;
	link: string;
	icon?: ReactNode;
};

const Card = ({ title, subtitle, link, icon }: Props) => {
	return (
		<CardContainer>
			<CardContent className="contact__card">
				{icon}
				<h3 className="contact__card-title">{title}</h3>
				<span className="contact__card-data">{subtitle}</span>

				<CardActions href={link} title="Write Me" />
			</CardContent>
		</CardContainer>
	);
};

export default Card;
