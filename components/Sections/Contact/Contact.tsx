import { SectionContainer, SectionHeader } from "../../UI/Section";
import { Sections } from "../../../constants/sections";

import { contacts } from "./mock";

import Card from "./Card";
import Content from "./Content";
import Form from "./Form";

const Contact = () => {
  return (
    <SectionContainer id={Sections.contact}>
      <SectionHeader
        title="Contacts"
        subtitle="Great way to keep in touch with me"
      />
      <div className="contact__container container grid">
        <Content title="Talk to me">
          <div className="contact__info">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                title={contact.title}
                subtitle={contact.subtitle}
                link={contact.link}
                icon={contact.icon}
              />
            ))}
          </div>
        </Content>

        <Content title="Write me your project">
          <Form />
        </Content>
      </div>
    </SectionContainer>
  );
};

export default Contact;
