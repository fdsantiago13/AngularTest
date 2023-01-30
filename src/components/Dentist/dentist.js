import React from "react";
import "./dentist.css";
import {
  Wrapper,
  CardContainer,
  CCcolumn1,
  CCcolumn2,
  TextWrapper,
  ImgWrapper,
  CardIcon,
  Header,
  Paragraph,
  /*  ServicesH,*/
  CardWrapper,
  DentistName,
  Container,
  Span,
} from "./dentistelements";

/*const breakPoints = [
{ width: 1, itemsToShow: 1 },
{ width: 768, itemsToShow: 2 },
]; */

import img1 from "../../pictures/dentist1.png";
import img2 from "../../pictures/dentist2.png";

const Dentist = () => {
  return (
    <Container id="dentist">
      <Wrapper>
        <Header>
          Clinic <Span color="red">Dentist</Span>
        </Header>
        <CardWrapper>
          <CardContainer>
            <CCcolumn1>
              <ImgWrapper>
                <CardIcon src={img1} />
              </ImgWrapper>
            </CCcolumn1>
            <CCcolumn2>
              <TextWrapper>
                <DentistName>Editha S. Peña</DentistName>
                <Paragraph> Head Dentist</Paragraph>
              </TextWrapper>
            </CCcolumn2>
          </CardContainer>
          <CardContainer>
            <CCcolumn1>
              <ImgWrapper>
                <CardIcon src={img2} />
              </ImgWrapper>
            </CCcolumn1>
            <CCcolumn2>
              <TextWrapper>
                <DentistName>Ambrocia C. Bajar</DentistName>
                <Paragraph>Dental Aide</Paragraph>
              </TextWrapper>
            </CCcolumn2>
          </CardContainer>
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default Dentist;
