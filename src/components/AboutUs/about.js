import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  Row,
  Column1,
  Column2,
  TextWrapper,
  Header,
  Paragraph,
  ImgWrapper,
  Img,
  Span,
  SpanP,
} from "./aboutelements";
import clinic from "../../pictures/clinic.jpg";

const AboutUs = () => {
  return (
    <AboutContainer id="aboutpage">
      <AboutWrapper>
        <Row>
          <Column1>
            <TextWrapper>
              <Header>
                Taking Care of every <Span>Haribon's smile</Span>
              </Header>
              <Paragraph>
                The PLM Clinic's dental staffs invite you to take advantage of
                your priviledge to have a <SpanP>free dental service</SpanP>{" "}
                every year.
              </Paragraph>
              <Paragraph>
                Find us at the right side of main entrance,{" "}
                <SpanP>Gusaling Antonio Villegas.</SpanP> We are open from Monday to Friday (8AM-1PM).
              </Paragraph>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={clinic} />
            </ImgWrapper>
          </Column2>
        </Row>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutUs;
