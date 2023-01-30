import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as scrollLink } from "react-scroll";


export const SbContainer = styled.aside`
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: #83b7ac;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 2rem;
`;

export const SbIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
`;

export const SbWrapper = styled.div`
  color: #fff;
`;
export const SbMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: (repeat 5, 60px);
  }
`;

export const SbLink = styled(scrollLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #f6f4fc;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: 0.5s ease-in-out;
    font-weight: 600;
  }
`;
