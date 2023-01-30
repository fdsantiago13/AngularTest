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
  max-width: 2000px;
  height: 100vh;
  box-sizing: border-box;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 10%;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: -75px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row;
  justify-content: space-evenly;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-flow: column;
  border-radius: 15px;
  background: linear-gradient(180deg, #fb9364 0%, #fdd37e 100%);
  box-shadow: 0px 50px 100px -20px rgba(50, 50, 93, 0.15),
    0px 30px 60px -30px rgba(0, 0, 0, 0.1),
    inset 0px -2px 6px rgba(10, 37, 64, 0.1);
  border: 5px solid rgba(255, 255, 255, 1);
  width: 480px;
  height: 250px;
  margin-bottom: 10px;
  margin-right: 20px;
  margin-left: 20px;
  align-items: center;
  justify-content: center;

  display: grid;
  grid-template-columns: 1fr, 2fr;
  grid-template-areas: "colleft colright";

  @media screen and (max-width: 1200px) {
    width: 500px;
    height: 260px;
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 24px;
    margin-right: 20px;

    display: grid;
    grid-template-columns: 1fr, 2fr;
    grid-template-areas: "colleft colright";
  }

  @media screen and (max-width: 760px) {
    width: 400px;
    height: 260px;
    padding-left: 24px;
    padding-right: 16px;
    margin-bottom: 24px;

    display: grid;
    grid-template-columns: 1fr, 2fr;
    grid-template-areas: "colleft colright";
  }
`;

export const CCcolumn1 = styled.div`
  max-width: 140px;
  padding: 0 15px;
  grid-area: colleft;
  align-items: center;
`;

export const CCcolumn2 = styled.div`
  padding: 0 15px;
  grid-area: colright;
  align-items: center;
`;

export const TextWrapper = styled.div`
  max-width: 940px;
  padding-top: 0;
  padding-bottom: 50px;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  height: 50%;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 32px;
  padding-top: 50px;
  margin-bottom: 30px;
  margin-top: 20px;
  color: #48bca8;

  @media screen and (max-width: 1300px) {
    padding-top: 15px;
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    padding-top: 15px;
    text-align: center;
  }
`;

export const DentistName = styled.h1`
  margin-top: 30px;
  font-size: 22px;
  margin-bottom: 1px;
  text-align: left;
  color: white;
`;
export const Paragraph = styled.p`
  text-align: left;
  margin-top: 8px;
  justify-content: center;
  color: white;
`;
export const CardIcon = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 100px;
  border: 20px;
  align-items: left;
  margin-right: 30px;
  border: 5px solid rgba(255, 255, 255, 1);
`;

export const Span = styled.span`
  color: #edb16f;
`;
