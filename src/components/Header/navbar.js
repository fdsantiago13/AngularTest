import React from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavItems,
  MenuIcon,
  NavLinks,
  NavMenu,
} from "./navelements";
import { FaBars } from "react-icons/fa";
import logo from "../../pictures/LOGO.png";

const Navbar = ({ onToggle }) => {
  return (
    <Nav scrollNav>
      <NavContainer>
        <NavLogo src={logo}/>
        <MenuIcon onClick={onToggle}>
          <FaBars />
        </MenuIcon>
        <NavMenu>
          <NavItems>
            <NavLinks
              activeClass="active"
              to="bookpage"
              spy={true}
              offset={-80}
              smooth={true}
              duration={500}
              exact="true"
            >
              Book
            </NavLinks>
          </NavItems>
          <NavItems>
            <NavLinks
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
            >
              Services
            </NavLinks>
          </NavItems>
          <NavItems>
            <NavLinks
              activeClass="active"
              to="aboutpage"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
            >
              Clinic
            </NavLinks>
          </NavItems>
          <NavItems>
            <NavLinks
              activeClass="active"
              to="dentist"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
            >
              Dentist
            </NavLinks>
          </NavItems>
          <NavItems>
            <NavLinks
              activeClass="active"
              to="steps"
              spy={true}
              smooth={true}
              duration={500}
              exact="true"
            >
              Steps
            </NavLinks>
          </NavItems>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
