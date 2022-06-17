import {
  CardContainer,
  CardMedia,
  CardContent,
  CardActions,
} from "../../UI/Card";
import { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  name: string;
  demo?: string;
  github?: string;
};

const Card = ({ image, name, demo = "", github = "" }: Props) => {
  return (
    <CardContainer>
      <CardMedia src={image} className="work__media" />
      <CardContent>
        <h3 className="work__title">{name}</h3>
        <div className="work__actions">
          <CardActions title="Demo" href={demo} target="_blank" />
          <CardActions title="Github" href={github} target="_blank" />
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
