import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #fff;
  background: #ffffff;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

export const Row = styled.div`
  display: grid;
  align-items: center;
  margin-top: 10%;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "colright colleft";

  @media screen and (max-width: 768px) {
    margin-top: 0;
    grid-template-areas: "colleft" "colright";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: colleft;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: colright;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Header = styled.h1`
  margin-bottom: 30px;
  font-size: 50px;
  line-height: 1.1;
  margin-right: 45px;
  font-weight: 600;
  color: #83b7ac;
  text-align: right;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    text-align: center;
    font-size: 42px;
  }
  @media screen and (max-width: 480px) {
    margin-right: 0;
    text-align: center;
  }
`;

export const ParagraphWrapper = styled.div`
  flex-direction: column;
`;

export const Paragraph = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  margin-left: 45px;
  margin-right: 45px;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  /* text-align: justify; */
  color: #010606;
`;

export const ImgWrapper = styled.div`
  display: flex;
`;

export const Img = styled.img`
  max-width: 500px;
  max-height: 500px;
  margin: 0 0 10px 0;
  padding-right: 0;
  margin-top: -10px;

  @media screen and (max-width: 768px) {
    margin-top: -50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  }
`;

export const Span = styled.span`
  color: #e7b474;
`;

export const SpanP = styled.span`
  font-weight: bold;
`;
