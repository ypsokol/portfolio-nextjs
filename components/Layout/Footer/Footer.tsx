import { SiMaterialdesign } from "react-icons/si";
import { CardActions } from "../../UI/Card";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__wrapper">
          <SiMaterialdesign className="footer__logo" />
          <h2 className="footer__title">Yura Sokolov</h2>
          <h3 className="footer__subtitle">
            Project was made for fun with the interest
          </h3>

          <ul className="footer__social">
            <CardActions title="Facebook" />
            <CardActions title="Telegram" />
            <CardActions title="Github" />
          </ul>
        </div>
        <div className="footer__divider" />
        <div className="footer__wrapper">
          <span className="footer__copy">
            &#169; YPSOKOL. All rigths reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
