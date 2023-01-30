import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  ContentContainer,
  Logo,
  ContactH,
  ContactP,
  Copyright,
} from "./footerelements";
import logo from "../../pictures/LOGO.png";



const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <ContentContainer>
          <Logo src={logo} />
        </ContentContainer>
        <FooterWrapper>
          <Copyright>
            © Copyright 2022 by Rein Macho. All rights reserved.
          </Copyright>
        </FooterWrapper>
        <ContentContainer>
          <ContactH>CONTACT US</ContactH>
          <ContactP> emailniclinic@gmail.com</ContactP>
          <ContactP> 4444-4444</ContactP>
        </ContentContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};
export default Footer;
