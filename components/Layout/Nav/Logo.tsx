import { Sections } from "../../../constants/sections";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={Sections.home}>
      <a className="nav__logo">YPSOKOL</a>
    </Link>
  );
};

export default Logo;
