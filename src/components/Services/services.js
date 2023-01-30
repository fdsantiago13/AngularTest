import React from "react";
import img1 from "../../pictures/pasta.png";
import img2 from "../../pictures/denture.png";
import img3 from "../../pictures/sore.png";
import img4 from "../../pictures/braces.png";
import img5 from "../../pictures/cleaning.png";
import img6 from "../../pictures/extraction.png";

import Carousel from "react-elastic-carousel";
import "./services.css";
import {
  ServicesWrapper,
  ServicesCardContainer,
  ServicesCardIcon,
  Header,
  Paragraph,
  ServicesH,
  ServicesP,
  Span
} from "./serviceelements";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 480, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
];

const Service = () => {
  return (
    <ServicesWrapper id="services">
      <ServicesH>
        Clinic <Span>Services</Span>
      </ServicesH>
      <ServicesP>
        The Official PLM's dental clinic offers the following services
      </ServicesP>
      <Carousel breakPoints={breakPoints}>
        <ServicesCardContainer>
          <ServicesCardIcon src={img1} />
          <Header>Pasta Fillings</Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </Paragraph>
        </ServicesCardContainer>
        <ServicesCardContainer>
          <ServicesCardIcon src={img2} />
          <Header>Denture Repairs</Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </Paragraph>
        </ServicesCardContainer>
        <ServicesCardContainer>
          <ServicesCardIcon src={img3} />
          <Header>Canker Sore Treatment</Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </Paragraph>
        </ServicesCardContainer>
        <ServicesCardContainer>
          <ServicesCardIcon src={img4} />
          <Header>Braces Adjustment</Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </Paragraph>
        </ServicesCardContainer>
        <ServicesCardContainer>
          <ServicesCardIcon src={img5} />
          <Header>Cleaning</Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </Paragraph>
        </ServicesCardContainer>
        <ServicesCardContainer>
          <ServicesCardIcon src={img6} />
          <Header>Extraction</Header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </Paragraph>
        </ServicesCardContainer>
      </Carousel>
    </ServicesWrapper>
  );
};

export default Service;
