import { HiBadgeCheck, HiOutlineX } from "react-icons/hi";
import { useModal } from "../../../context/modal/context";
import { ModalContainer } from "../../UI/Modal";
import IconButton from "../../UI/IconButton";

type Props = {
  title: string;
  description: string;
  list: string[];
};

const Modal = ({ title, description, list }: Props) => {
  const { close } = useModal();

  return (
    <ModalContainer>
      <IconButton className="services__modal-close">
        <HiOutlineX className="icon-button-icon" onClick={close} />
      </IconButton>

      <h3 className="services__modal-title">{title}</h3>
      <p className="services__modal-description">{description}</p>

      <ul className="services__modal-list">
        {list.map((item, index) => (
          <Item key={index} title={item} />
        ))}
      </ul>
    </ModalContainer>
  );
};

type Item = {
  title: string;
};

const Item = ({ title }: Item) => {
  return (
    <li className="services__modal-item">
      <div>
        <HiBadgeCheck className="services__modal-icon" />
      </div>

      <p className="services__modal-info">{title}</p>
    </li>
  );
};

export default Modal;
