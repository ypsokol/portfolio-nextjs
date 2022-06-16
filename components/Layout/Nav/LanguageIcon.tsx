import { FC, useState } from "react";
import IconButton from "../../UI/IconButton";
import { useRouter } from "next/router";
import { Languages } from "../../../utils/hooks/useLang";

type Props = {};

const languages = ["en", "ru", "uk"];

const LanguageIcon: FC<Props> = (props) => {
  const { asPath, locale } = useRouter();
  const [language, setLanguage] = useState<Languages>("en");

  return (
    <IconButton href={asPath} locale={"en"}>
      {language}
    </IconButton>
  );
};

export default LanguageIcon;
