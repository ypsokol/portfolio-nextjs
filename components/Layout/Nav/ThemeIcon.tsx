import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import IconButton from "../../UI/IconButton";
import { useEffect, useState } from "react";

const ThemeIcon = () => {
  const [isLight, setIsLight] = useState<boolean>(false);

  useEffect(() => {
    document
      .querySelector("body")
      ?.setAttribute("theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <IconButton onClick={() => setIsLight(!isLight)}>
      {isLight ? (
        <HiOutlineMoon className="icon-button-icon" />
      ) : (
        <HiOutlineSun className="icon-button-icon" />
      )}
    </IconButton>
  );
};

export default ThemeIcon;
