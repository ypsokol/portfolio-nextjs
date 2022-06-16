import { CardContainer, CardContent } from "../../UI/Card";
import Data from "./Data";
import { Skill } from "./mock";

type Props = {
  title: string;
  skills: Skill[];
};

const Card = ({ title, skills }: Props) => {
  return (
    <CardContainer>
      <CardContent>
        <h3 className="skills__title">{title}</h3>

        <div className="skills__box">
          <div className="skills__group">
            {skills.map((skill, index) => (
              <Data key={index} {...skill} />
            ))}
          </div>
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
