import { Sections } from "../../../constants/sections";

import { CardContainer, CardContent } from "../../UI/Card";
import { about, description } from "./mock";
import {
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
} from "../../UI/Section";
import Button from "../../UI/Button";
import Image from "next/image";

import aboutImg from "/public/images/about.jpg";

const About = () => {
  return (
    <SectionContainer className="about section" id={Sections.about}>
      <SectionSubtitle subtitle="My Intro" />
      <SectionTitle title="About Me" />

      <div className="card__outline container">
        <div className="card__outline-media">
          <Image
            src={aboutImg}
            alt=""
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
          />
        </div>

        <div className="card__outline-content">
          <div className="about__info">
            {about.map((item, index) => (
              <CardContainer key={index}>
                <CardContent className="about__card">
                  {item.icon}
                  <div className="about__card-text">
                    <h3>{item.title}</h3>
                    <span>{item.subtitle}</span>
                  </div>
                </CardContent>
              </CardContainer>
            ))}
          </div>
          <p className="about__description">{description}</p>

          <Button href={`#${Sections.contact}`} title="Contact Me" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
