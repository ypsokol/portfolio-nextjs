import { HiOutlineArrowCircleRight } from "react-icons/hi";
import Link from "next/link";

type Props = {
  href?: string;
  title: string;
  iconClass?: string;
  className?: string;
  onClick?: () => void;
};

const CardActions = ({
  href = "/",
  title,
  iconClass = "",
  className = "",
  onClick,
}: Props) => {
  return (
    <Link href={href} scroll={false}>
      <a className={`card-actions ${className}`} onClick={onClick}>
        {title}{" "}
        <HiOutlineArrowCircleRight
          className={`card-actions-icon ${iconClass}`}
        />
      </a>
    </Link>
  );
};

export default CardActions;
