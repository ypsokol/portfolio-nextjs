import { HiOutlineBadgeCheck } from "react-icons/hi";
import { Skill } from "./mock";

const Data = ({ name, level }: Skill) => {
  return (
    <div className="skills__data">
      <HiOutlineBadgeCheck className="skills__data-icon" />
      <div>
        <h3 className="skills__name">{name}</h3>
        <span className="skills__level">{level}</span>
      </div>
    </div>
  );
};

export default Data;
