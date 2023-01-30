import styled from "styled-components";

export const FooterContainer = styled.div`
  padding-top: 20px;
  background: #83b7ac;
  bottom: 0;
  width: 100%;
  padding-bottom: 20px;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Logo = styled.img`
  height: 50px;
  width: 200px;
  color: white;
`;

export const ContactH = styled.h1`
  margin-top: 10px;
  font-size: 20px;
  color: #fff;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    padding-top: 50px;
  }
`;

export const ContactP = styled.p`
  color: #fff;
  margin-bottom: 10px;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
`;

export const Copyright = styled.p`
  color: #f8f8ff;
  margin-top: 80px;
  margin-bottom: 10px;
  font-size: 16px;
  text-decoration: none;
`;
