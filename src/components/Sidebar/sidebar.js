import React from "react";
import {
  SbContainer,
  SbIcon,
  CloseIcon,
  SbWrapper,
  SbMenu,
  SbLink,
} from "./sidebarelements";

const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <>
      <SbContainer isOpen={isOpen} onClick={onToggle}>
        <SbIcon>
          <CloseIcon onClick={onToggle}></CloseIcon>
        </SbIcon>
        <SbWrapper>
          <SbMenu>
            <SbLink
              activeClass="active"
              to="bookpage"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
              onClick={onToggle}
            >
              Book
            </SbLink>
            <SbLink
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
              onClick={onToggle}
            >
              Services
            </SbLink>
            <SbLink
              activeClass="active"
              to="aboutpage"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
              onClick={onToggle}
            >
              Clinic
            </SbLink>
            <SbLink
              activeClass="active"
              to="dentist"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
              onClick={onToggle}
            >
              Dentist
            </SbLink>
            <SbLink
              activeClass="active"
              to="steps"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
              onClick={onToggle}
            >
              How To
            </SbLink>
          </SbMenu>
        </SbWrapper>
      </SbContainer>
    </>
  );
};

export default Sidebar;
