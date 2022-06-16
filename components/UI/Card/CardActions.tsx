import Link from "next/link";

import { HiOutlineArrowCircleRight } from "react-icons/hi";

type Props = {
  href?: string;
  title: string;
  iconClass?: string;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

const CardActions = ({
  href = "/",
  title,
  iconClass = "",
  className = "",
  onClick,
  ...props
}: Props) => {
  return (
    <Link href={href} scroll={false} passHref>
      <a className={`card-actions ${className}`} onClick={onClick} {...props}>
        {title}{" "}
        <HiOutlineArrowCircleRight
          className={`card-actions-icon ${iconClass}`}
        />
      </a>
    </Link>
  );
};

export default CardActions;
