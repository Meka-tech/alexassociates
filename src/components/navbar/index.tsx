import React, { useState } from "react";
import styled from "styled-components";
import Typography from "../typography";
import { TextSize, TextWeight } from "../typography/enums";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../logo";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const path = useLocation().pathname;
  const [isOpen, setOpen] = useState(false);

  return (
    <Container>
      <Logo />
      <NavItems>
        <NavItem>
          <Nav to="/">
            <Typography
              size={TextSize.md}
              weight={TextWeight.semibold}
              color={path === "/" ? "rgba(0, 131, 226, 1)" : "inherit"}
            >
              Home
            </Typography>
          </Nav>
        </NavItem>
        <NavItem>
          <Nav to="/about">
            <Typography
              size={TextSize.md}
              weight={TextWeight.semibold}
              color={
                path.includes("/about") ? "rgba(0, 131, 226, 1)" : "inherit"
              }
            >
              About
            </Typography>
          </Nav>
        </NavItem>
        <NavItem>
          <Nav to="/portfolio">
            <Typography
              size={TextSize.md}
              weight={TextWeight.semibold}
              color={
                path.includes("/portfolio") ? "rgba(0, 131, 226, 1)" : "inherit"
              }
            >
              Portfolio
            </Typography>
          </Nav>
          <ArrowIcon>
            <IoIosArrowDown size={18} />
          </ArrowIcon>
        </NavItem>
        <NavItem>
          <Nav to="/our-services">
            <Typography
              size={TextSize.md}
              weight={TextWeight.semibold}
              color={
                path.includes("/our-services")
                  ? "rgba(0, 131, 226, 1)"
                  : "inherit"
              }
            >
              Our Services
            </Typography>
          </Nav>
        </NavItem>
      </NavItems>
      <HamburgerButton>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </HamburgerButton>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  padding: 1.6rem 7rem;
  padding-left: 10.2rem;
  display: flex;
  @media only screen and (max-width: 769px) {
    padding: 1.6rem;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4rem;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;
const NavItem = styled.div`
  cursor: pointer;
  margin-right: 3.2rem;

  display: flex;
  align-items: center;
`;
const Nav = styled(Link)`
  text-decoration: none;
  color: white;
  :hover {
    color: rgba(0, 131, 226, 1);
  }
`;

const ArrowIcon = styled.div`
  margin-left: 0.8rem;
  display: flex;
  align-items: center;
  color: white;
`;

const HamburgerButton = styled.div`
  color: white;
  margin-left: auto;
  display: none;
  @media only screen and (max-width: 769px) {
    display: block;
  }
`;
