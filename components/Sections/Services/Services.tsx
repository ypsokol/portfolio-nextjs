import { SectionContainer, SectionHeader } from "../../UI/Section";
import Modal from "./Modal";
import Card from "./Card";
import { services } from "./mock";
import { Sections } from "../../../constants/sections";
import { ModalProvider } from "../../../context/modal/provider";

const Services = () => {
  return (
    <SectionContainer id={Sections.services}>
      <SectionHeader title="Offers" subtitle="Which I will gladly respond" />

      <div className="services__container container grid">
        {services.map((service, index) => (
          <ModalProvider key={index}>
            <Card title={service.title}>
              <Modal {...service} />
            </Card>
          </ModalProvider>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Services;
