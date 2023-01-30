import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";

export const AppointmentContainer = styled.div`
  color: #fff;
  background: #ffffff;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AppointmentWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

export const Row = styled.div`
  display: grid;
  align-items: center;
  margin-top: 5%;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "colleft colright";
  @media screen and (max-width: 768px) {
    margin-top: 0;
    grid-template-areas: "colleft colleft" "colright colright";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  grid-area: colleft;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  grid-area: colright;
`;

export const TextWrapper = styled.div`
  padding-left: 50px;
  /* max-width: 540px; */
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
  @media screen and (max-width: 480px) {
    padding-left: 0;
  }
`;

export const Header = styled.h1`
  margin-bottom: 24px;
  font-size: 72px;
  margin-left: 45px;
  line-height: 1.1;
  font-weight: 600;
  color: #000;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    font-size: 62px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    text-align: center;
    font-size: 52px;
  }
`;

export const Paragraph = styled.p`
  max-width: 460px;
  margin-left: 45px;
  margin-right: 45px;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  color: #010606;
`;

export const ImgWrapper = styled.div`
  /* max-width: 555px; */
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const AppointmentBtnWrapper = styled.div`
  margin-top: 45px;
  margin-left: 45px;
  flex-direction: column;
  align-items: left;
  margin-bottom: -60px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const AppointmentBtn = styled(routerLink)`
  border-radius: 10px;
  white-space: nowrap;
  padding: 10px 22px;
  background: #6fc8bf;
  color: white;
  font-size: 18px;
  outline: 1px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: white;
  }
`;

export const Header2 = styled.h2`
  color: #fcbc64;
  margin-left: 55px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    font-size: 20px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    margin-left: 0;
    font-size: 20px;
    text-align: center;
  }
`;
