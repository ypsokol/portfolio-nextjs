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
};

const Card = ({ image, name }: Props) => {
  return (
    <CardContainer className="work__card">
      <CardMedia src={image} className="work__media" />
      <CardContent>
        <h3 className="work__title">{name}</h3>
        <div className="work__actions">
          <CardActions title="Demo" />
          <CardActions title="Github" />
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
