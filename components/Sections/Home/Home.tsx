import Link from "next/link";
import Image from "next/image";

import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs";
import { BiMouse } from "react-icons/bi";

import { Sections } from "../../../constants/sections";
import { SectionContainer } from "../../UI/Section";

import homeImg from "../../../public/images/perfil.png";
import Header from "./Header";

const Home = () => {
  return (
    <SectionContainer id={Sections.home}>
      <div className="home__container container grid">
        <Header />

        <div className="shape shape--big" />
        <div className="shape shape--small" />

        <div className="home__handle">
          <div className="home__img">
            <Image src={homeImg} alt="" />
          </div>
        </div>

        <div className="home__social">
          <Link href="" target="_blank">
            <a className="home__social-link">
              <BsLinkedin className="home__social-icon" />
            </a>
          </Link>

          <Link href="" target="_blank">
            <a className="home__social-link">
              <BsGithub className="home__social-icon" />
            </a>
          </Link>

          <Link href="" target="_blank">
            <a className="home__social-link">
              <BsDribbble className="home__social-icon" />
            </a>
          </Link>
        </div>

        <Link href={`#${Sections.about}`}>
          <a className="home__scroll">
            <BiMouse className="home__scroll-icon" />
            <span className="home__scroll-name">Scroll Down</span>
          </a>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default Home;
