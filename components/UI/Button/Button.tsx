import Link from "next/link";

type Props = {
  href?: URL | string;
  title?: string;
  onClick?: () => void;
  [x: string]: any;
};

const Button = ({ href = "/", title, onClick, ...anchor }: Props) => {
  return (
    <Link href={href}>
      <a className="btn" onClick={onClick} {...anchor}>
        {title}
      </a>
    </Link>
  );
};

export default Button;
