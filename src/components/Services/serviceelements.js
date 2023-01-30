import styled from "styled-components";

export const ServicesWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
  background: #ffffff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
  align-items: center;
`;

export const ServicesCardContainer = styled.div`
  padding-top: 30px;
  width: 250px;
  height: 340px;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid gray;
  border-radius: 15px;
  background-color: #83b7ac;

  &:hover {
    box-shadow: 0 0 5px black;
  }
`;

export const Header = styled.h1`
  margin-top: 20px;
  font-size: 24px;
  text-align: center;
  color: #fff;
`;
export const Paragraph = styled.p`
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
`;
export const ServicesCardIcon = styled.img`
  height: 100px;
  width: 100px;
`;

export const ServicesH = styled.h1`
  font-size: 32px;
  padding-top: 50px;
  padding-bottom: 10px;
  color: #48bca8;
  @media screen and (max-width: 768px) {
    padding-top: 15px;
    text-align: center;
    font-size: 28px;
  }
`;

export const ServicesP = styled.p`
  padding-bottom: 30px;
  color: grey;
  text-align: center;
`;

export const Span = styled.span`
  color: #edb16f;
`;
