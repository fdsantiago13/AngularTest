import React from "react";
import {
  Container,
  Wrapper,
  Row,
  Column1,
  Column2,
  Column3,
  TextWrapper,
  Heading,
  Paragraph,
  ImgWrapper,
  Img,
} from "./howtoelements";


const HowTo = ({ id, headline, img1, img2, img3, img4 }) => {
  return (
    <Container id={id}>
      <Wrapper id="steps">
        <Row>
          <Column1>
            <TextWrapper>
              <Heading>{headline}</Heading>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={img1} />
              <Img src={img2} />
              <Img src={img3} />
              <Img src={img4} />
            </ImgWrapper>
          </Column2>
          <Column3>
            <TextWrapper>
              <Paragraph>
                Click or Press the Book Now button in the Home page.
              </Paragraph>
              <Paragraph>
                Fill up your basic student information to check your student
                credentials.
              </Paragraph>
              <Paragraph>Fill up your appointment details. </Paragraph>
              <Paragraph>
                Click the submit button to confirm your appointment details.
              </Paragraph>
            </TextWrapper>
          </Column3>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default HowTo;
