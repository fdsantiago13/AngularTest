import styled from "styled-components";
// import { FaTooth } from "react-icons/fa";

export const Container = styled.div`
  color: #fff;
  background: #ffffff;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const Wrapper = styled.div`
  padding-top: 75px;
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: -70px;
  }
`;
export const Row = styled.div`
  display: grid;
  align-items: center;
  margin-top: 5%;
  grid-auto-columns: minmax(1fr, 1fr, 2fr);
  grid-template-areas: "colleft colcenter colright";

  @media screen and (max-width: 768px) {
    margin-top: -10px;
    grid-template-columns: 1fr, 1fr;
    grid-template-rows: 1fr 5fr;
    grid-template-areas:
      "colleft colleft colleft"
      "colcenter colright colright";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 2px;
  padding: 0 15px;
  grid-area: colleft;

  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 0;
  padding: 0;
  grid-area: colcenter;
`;

export const Column3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: colright;
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  padding-top: 0;
  padding-bottom: 20px;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    margin-top: -10px;
  }
`;

export const Paragraph = styled.p`
  max-width: 500px;
  margin-bottom: 80px;
  margin-left: 45px;
  margin-right: 45px;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  /* text-align: justify; */
  color: #010606;

  @media screen and (max-width: 1100px) {
    max-width: 300px;
    height: 30%;
    font-size: 16px;
    margin-bottom: 90px;
    margin-left: 30px;
  }

  @media screen and (max-width: 980px) {
    max-width: 160px;
    font-size: 14px;
    margin-bottom: 80px;
    margin-left: 30px;
  }

  @media screen and (max-width: 768px) {
    max-width: 400px;
    font-size: 16px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 50px;
  margin-right: 45px;
  font-weight: 600;
  color: #83b7ac;
  text-align: right;

  @media screen and (max-width: 1100px) {
    font-size: 30px;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 30px;
    margin-right: 0;
    margin-bottom: -35px;
  }
  @media screen and (max-width: 480px) {
    margin-right: 0;
    text-align: right;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 120px;
  height: 25%;
  margin-bottom: 110px;

  @media screen and (max-width: 980px) {
    margin-bottom: 55px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 70px;
    margin-top: -50px;
  }
`;

export const Img = styled.img`
  width: 100px;
  margin: 10px;
  padding-right: 0px;

  @media screen and (max-width: 1100px) {
    width: 90px;
    height: 15%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 980px) {
    width: 80px;
    margin-bottom: 55px;
    margin-left: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 90px;
    margin-bottom: 25px;
    margin-left: 30px;
  }
`;
