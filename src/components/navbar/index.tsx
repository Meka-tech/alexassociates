import React, { useRef, useState } from "react";
import styled from "styled-components";
import Typography from "../typography";
import { TextSize, TextWeight } from "../typography/enums";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../logo";
import Hamburger from "hamburger-react";
import Sidebar from "./mobileSidebar";
import { useClickOutside } from "../../hooks/UseClickOutside";
import { useAuth } from "../../context/authContext";
import { PiCaretDownBold } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  const path = useLocation().pathname;
  const [isOpen, setOpen] = useState(false);
  const [isportOpen, setPortOpen] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const portRef = useRef(null);
  const navigate = useNavigate();

  const { isLoggedIn, logout } = useAuth();

  const LogOut = () => {
    localStorage.removeItem("token");
    logout();
  };

  const Hamref = useRef(null);
  const LogOutref = useRef(null);

  useClickOutside(Hamref, () => {
    setOpen(false);
  });

  useClickOutside(portRef, () => {
    setPortOpen(false);
  });

  useClickOutside(LogOutref, () => {
    setLogoutOpen(false);
  });
  return (
    <Container ref={Hamref}>
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

          {isportOpen && (
            <PortfolioContainer ref={portRef}>
              <PortItem
                onClick={() => {
                  setPortOpen(false);
                  navigate("/portfolio?key=interior-design");
                }}
              >
                <Typography
                  size={TextSize.sm}
                  weight={TextWeight.medium}
                  lh="2"
                >
                  Interior Design
                </Typography>
              </PortItem>
              <PortItem
                onClick={() => {
                  setPortOpen(false);
                  navigate("/portfolio?key=architectural-design");
                }}
              >
                <Typography
                  size={TextSize.sm}
                  weight={TextWeight.medium}
                  lh="2"
                >
                  Architectural design
                </Typography>
              </PortItem>
              <PortItem
                onClick={() => {
                  setPortOpen(false);
                  navigate("/portfolio?key=furniture-furnishing");
                }}
              >
                <Typography
                  size={TextSize.sm}
                  weight={TextWeight.medium}
                  lh="2"
                >
                  Furniture & Furnishing
                </Typography>
              </PortItem>
              <PortItem
                onClick={() => {
                  setPortOpen(false);
                  navigate("/portfolio?key=project-execution");
                }}
              >
                <Typography
                  size={TextSize.sm}
                  weight={TextWeight.medium}
                  lh="2"
                >
                  Project Execution
                </Typography>
              </PortItem>
            </PortfolioContainer>
          )}
          <ArrowIcon
            isopen={isportOpen ? "true" : "false"}
            onClick={() => setPortOpen(!isportOpen)}
          >
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
        {isLoggedIn && (
          <>
            <NavItem>
              <Nav to="/admin/user-requests">
                <Typography
                  size={TextSize.md}
                  weight={TextWeight.semibold}
                  color={
                    path.includes("/admin/user-requests")
                      ? "rgba(0, 131, 226, 1)"
                      : "inherit"
                  }
                >
                  User requests
                </Typography>
              </Nav>
            </NavItem>
            <NavItem>
              <Nav to="/admin/manage-website">
                <Typography
                  size={TextSize.md}
                  weight={TextWeight.semibold}
                  color={
                    path.includes("/admin/manage-website")
                      ? "rgba(0, 131, 226, 1)"
                      : "inherit"
                  }
                >
                  Manage website
                </Typography>
              </Nav>
            </NavItem>
            <NavItem>
              <Nav to="/admin/archived">
                <Typography
                  size={TextSize.md}
                  weight={TextWeight.semibold}
                  color={
                    path.includes("/admin/archived")
                      ? "rgba(0, 131, 226, 1)"
                      : "inherit"
                  }
                >
                  Archived
                </Typography>
              </Nav>
            </NavItem>
          </>
        )}
      </NavItems>
      <NavRight>
        {isLoggedIn && (
          <ProfileContainer>
            <ProfileIcon>
              <Typography
                weight={TextWeight.semibold}
                lh="4"
                size={TextSize.DisplayXs}
              >
                A
              </Typography>
            </ProfileIcon>
            <CaretContainer
              visible={logoutOpen ? "true" : "false"}
              onClick={() => setLogoutOpen(!logoutOpen)}
            >
              <PiCaretDownBold size={20} />
            </CaretContainer>
            <LogOutArea
              visible={logoutOpen ? "true" : "false"}
              ref={LogOutref}
              onClick={LogOut}
            >
              <TbLogout size={20} />
              <Typography
                weight={TextWeight.medium}
                ml="0.8"
                size={TextSize.sm}
              >
                Log out
              </Typography>
            </LogOutArea>
          </ProfileContainer>
        )}

        <HamburgerButton>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </HamburgerButton>
      </NavRight>
      {isOpen && <Sidebar />}
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  padding: 1.6rem 7rem;
  padding-left: 10.2rem;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 15, 34, 1);

  @media only screen and (max-width: 769px) {
    padding: 1.6rem;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: 3.2rem;
  margin-left: 4rem;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;
const NavItem = styled.div`
  cursor: pointer;
  margin-right: 3.2rem;
  position: relative;
  display: flex;
  align-items: center;
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const CaretContainer = styled.div<{ visible: string }>`
  color: white;
  margin-left: 1rem;
  cursor: pointer;
  transform: ${(props) =>
    props.visible === "true" ? "rotate(180deg)" : "rotate(0deg)"};
  transition: all 0.2s ease-in-out;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;

const LogOutArea = styled.div<{ visible: string }>`
  background-color: white;
  padding: 2rem 1.6rem;
  position: absolute;
  border-radius: 0.8rem;
  opacity: ${(props) => (props.visible === "true" ? 1 : 0)};
  top: ${(props) => (props.visible === "true" ? "130% " : "0")};
  z-index: ${(props) => (props.visible === "true" ? "2" : "-1")};

  right: 10%;
  width: 15rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e71c23;
  transition: all 0.2s ease-in-out;
`;
const ProfileIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #990178;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media only screen and (max-width: 769px) {
    margin-right: 2.4rem;
  }
`;
const Nav = styled(Link)`
  text-decoration: none;
  color: white;
  :hover {
    color: rgba(0, 131, 226, 1);
  }
`;

const ArrowIcon = styled.div<{ isopen: string }>`
  margin-left: 0.8rem;
  display: flex;
  align-items: center;
  color: white;
  transform: ${(props) =>
    props.isopen === "true" ? "rotate(180deg)" : "rotate(0deg)"};
  transition: ease-in 0.2s all;
`;

const PortfolioContainer = styled.div`
  position: absolute;
  background-color: white;
  padding: 0.6rem 0.2rem;
  right: 1.2rem;
  top: 100%;
  z-index: 10;
  border-radius: 0.8rem;
  box-shadow: 0px 4px 6px -2px #10182808;

  box-shadow: 0px 12px 16px -4px #10182814;
`;

const PortItem = styled.div`
  padding: 0.9rem 1rem;
  width: 18rem;
  height: 3.8rem;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  color: rgba(52, 64, 84, 1);
`;

const NavRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const HamburgerButton = styled.div`
  color: white;
  display: none;
  @media only screen and (max-width: 769px) {
    display: block;
  }
`;
