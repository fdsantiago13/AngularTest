import styled from "styled-components";
import { Link as routerLink } from "react-router-dom";
import { Link as scrollLink } from "react-scroll";

export const Nav = styled.nav`
  background: #83b7ac;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  font-size: 1rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.img`
margin-top: 15px;
         height: 50px;
         width: 150px;
         color: white;
       `;

export const MenuIcon = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 760px) {
    margin: 25px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate (-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 80px;
`;

export const NavLinks = styled(scrollLink)`
  color: #f6f4fc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  letter-spacing: 2px;

  &:hover {
    transition: all 0.2s ease-in-out;
    font-weight: 600;
    color: #ffff;
  }

  &.active {
    border-bottom: 5px solid #fff;
    color: #ffff;
  }
`;

export const NavButtonLink = styled(routerLink)`
  border-radius: 50px;
  background-color: transparent;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: 1px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
  }
`;
