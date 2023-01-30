import React from "react";
import { useState } from "react";
import {
  AppointmentContainer,
  AppointmentWrapper,
  AppointmentBtn,
  AppointmentBtnWrapper,
  Column1,
  Column2,
  Row,
  TextWrapper,
  Header,
  Paragraph,
  ImgWrapper,
  Img,
  Header2
} from "./appointmentelement";
import dental from "../../pictures/book.png";

const Appointment = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <AppointmentContainer id="bookpage">
      <AppointmentWrapper>
        <Row>
          <Column1>
            <TextWrapper>
              <Header2>Welcome to the Official PLM Dental Clinic</Header2>
              <Header>Dental Health Matters</Header>
              <Paragraph>
                The Dental Clinic exclusive for PLM students offering one annual
                free oral service per student.
              </Paragraph>
              <AppointmentBtnWrapper>
                <AppointmentBtn
                  to="/BookingForm"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                >
                  Book Now
                </AppointmentBtn>
              </AppointmentBtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={dental} />
            </ImgWrapper>
          </Column2>
        </Row>
      </AppointmentWrapper>
    </AppointmentContainer>
  );
};

export default Appointment;
