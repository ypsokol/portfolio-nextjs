import Link from "next/link";

type Props = {
  link: string;
  title: string;
  onClose: () => void;
};

const Item = ({ title, link, onClose }: Props) => {
  return (
    <li className="nav__menu-item">
      <Link href={link}>
        <a onClick={onClose} className="nav__menu-link">
          {title}
        </a>
      </Link>
    </li>
  );
};

export default Item;
