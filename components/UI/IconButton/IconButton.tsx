import { PropsWithChildren } from "react";
import Link from "next/link";

import { Languages } from "../../../utils/hooks/useLang";

type Props = {
  href?: string | URL;
  onClick?: () => void;
  locale?: Languages;
  className?: string;
};

const IconButton = ({
  href = "",
  onClick,
  children,
  locale,
  className = "",
}: PropsWithChildren<Props>) => {
  return (
    <Link href={href} locale={locale} scroll={false}>
      <a className={`icon-button ${className}`} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
};

export default IconButton;
