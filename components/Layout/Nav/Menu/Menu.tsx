import { sections } from "../mock";
import IconButton from "../../../UI/IconButton";
import { HiOutlineX } from "react-icons/hi";
import Item from "./Item";

type Props = { isOpen: boolean; onClose: () => void };

const Menu = ({ isOpen, onClose }: Props) => {
  return (
    <div className={`nav__menu ${isOpen && "nav__show-menu"}`}>
      <ul className="nav__menu-list">
        {sections.map((item, index) => (
          <Item
            key={index}
            link={item.link}
            title={item.title}
            onClose={onClose}
          />
        ))}
      </ul>
      <div className="nav__close">
        <IconButton onClick={onClose}>
          <HiOutlineX className="icon-button-icon" />
        </IconButton>
      </div>
    </div>
  );
};

export default Menu;
