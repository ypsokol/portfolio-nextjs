import { useEffect, useState } from "react";
import { Sections } from "../../../../constants/sections";

type State = keyof typeof Sections;

const useActiveNavBar = () => {
  const [active, setActive] = useState(Sections.home);

  useEffect(() => {}, []);

  const isActive = (state: State) => {
    return active === state;
  };

  const activeStyle = (state: State) => {
    return isActive(state) && "active";
  };

  const handleActiveChange = (state: State) => () => {
    setActive(state);
  };

  return {
    activeStyle,
    handleActiveChange,
  };
};

export default useActiveNavBar;
