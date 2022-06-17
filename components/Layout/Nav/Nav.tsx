import { HiOutlineMenu } from "react-icons/hi";
import IconButton from "../../UI/IconButton";

import { useState } from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import ThemeIcon from "./ThemeIcon";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav__container container">
        <Logo />

        <div className="nav__icon-container">
          <Menu isOpen={isOpen} onClose={handleOnChange} />
          <div className="nav__toggle" onClick={handleOnChange}>
            <IconButton>
              <HiOutlineMenu className="icon-button-icon" />
            </IconButton>
          </div>

          <ThemeIcon />
          {/* TODO: Add functionality theme/language switcher*/}

          {/*<LanguageIcon />*/}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
