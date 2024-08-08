import React, { useState } from "react";
import styled from "styled-components";
import Typography from "../typography";
import { TextSize, TextWeight } from "../typography/enums";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { PiInfo, PiUsers } from "react-icons/pi";
import { HiOutlineBriefcase, HiOutlineLightningBolt } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { useAuth } from "../../context/authContext";
import { IoArchiveOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

const Sidebar = () => {
  const path = useLocation().pathname;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownAuthOpen, setDropdownAuthOpen] = useState(false);
  const navigation = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  return (
    <Container>
      <Nav to={"/"}>
        <NavItem>
          <RiHome6Line
            size={20}
            color={path === "/" ? "rgba(0, 131, 226, 1)" : "inherit"}
          />
          <Typography
            size={TextSize.sm}
            weight={TextWeight.medium}
            lh="2"
            color={path === "/" ? "rgba(0, 131, 226, 1)" : "inherit"}
            ml="0.8"
          >
            Home
          </Typography>
        </NavItem>
      </Nav>
      <Nav to={"/about"}>
        <NavItem>
          <PiInfo
            size={20}
            color={path.includes("/about") ? "rgba(0, 131, 226, 1)" : "inherit"}
          />
          <Typography
            size={TextSize.sm}
            weight={TextWeight.medium}
            lh="2"
            color={path.includes("/about") ? "rgba(0, 131, 226, 1)" : "inherit"}
            ml="0.8"
          >
            About us
          </Typography>
        </NavItem>
      </Nav>
      <Dropdown>
        <DropdownBody>
          <Nav to={"/portfolio"} style={{ display: "flex" }}>
            <HiOutlineBriefcase
              size={20}
              color={
                path.includes("/portfolio")
                  ? "rgba(0, 131, 226, 1)"
                  : "rgba(52, 64, 84, 1)"
              }
            />
            <Typography
              size={TextSize.sm}
              weight={TextWeight.medium}
              lh="2"
              color={
                path.includes("/portfolio")
                  ? "rgba(0, 131, 226, 1)"
                  : "rgba(52, 64, 84, 1)"
              }
              ml="0.8"
            >
              Portfolio
            </Typography>
          </Nav>
          <Arrow
            onClick={() => setDropdownOpen(!dropdownOpen)}
            isopen={dropdownOpen ? "true" : "false"}
          >
            <IoIosArrowDown size={20} />
          </Arrow>
        </DropdownBody>
        {dropdownOpen && (
          <>
            <DropdownItem
              onClick={() => {
                navigation("/portfolio?key=interior-design");
              }}
            >
              <Typography size={TextSize.sm} weight={TextWeight.medium} lh="2">
                Interior design
              </Typography>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                navigation("/portfolio?key=architectural-design");
              }}
            >
              <Typography size={TextSize.sm} weight={TextWeight.medium} lh="2">
                Architectural design
              </Typography>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                navigation("/portfolio?key=furniture-furnishing");
              }}
            >
              <Typography size={TextSize.sm} weight={TextWeight.medium} lh="2">
                Furniture & Furnishing
              </Typography>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                navigation("/portfolio?key=project-execution");
              }}
            >
              <Typography size={TextSize.sm} weight={TextWeight.medium} lh="2">
                Project Execution
              </Typography>
            </DropdownItem>
          </>
        )}
      </Dropdown>
      <Nav to={"/our-services"}>
        <NavItem>
          <HiOutlineLightningBolt
            size={20}
            color={
              path.includes("/our-services")
                ? "rgba(0, 131, 226, 1)"
                : "inherit"
            }
          />
          <Typography
            size={TextSize.sm}
            weight={TextWeight.medium}
            lh="2"
            color={
              path.includes("/our-services")
                ? "rgba(0, 131, 226, 1)"
                : "inherit"
            }
            ml="0.8"
          >
            Our Services
          </Typography>
        </NavItem>
      </Nav>
      {isLoggedIn && (
        <>
          <Nav to={"/admin/user-requests"}>
            <NavItem>
              <PiUsers
                size={20}
                color={
                  path.includes("/admin/user-requests")
                    ? "rgba(0, 131, 226, 1)"
                    : "inherit"
                }
              />

              <Typography
                size={TextSize.sm}
                weight={TextWeight.medium}
                lh="2"
                color={
                  path.includes("/admin/user-requests")
                    ? "rgba(0, 131, 226, 1)"
                    : "inherit"
                }
                ml="0.8"
              >
                User requests
              </Typography>
            </NavItem>
          </Nav>
          <Dropdown>
            <DropdownBody>
              <Nav to={"/admin/manage-website"} style={{ display: "flex" }}>
                <HiOutlineBriefcase
                  size={20}
                  color={
                    path.includes("/admin/manage-website")
                      ? "rgba(0, 131, 226, 1)"
                      : "rgba(52, 64, 84, 1)"
                  }
                />
                <Typography
                  size={TextSize.sm}
                  weight={TextWeight.medium}
                  lh="2"
                  color={
                    path.includes("/admin/manage-website")
                      ? "rgba(0, 131, 226, 1)"
                      : "rgba(52, 64, 84, 1)"
                  }
                  ml="0.8"
                >
                  Manage website
                </Typography>
              </Nav>
              <Arrow
                onClick={() => setDropdownAuthOpen(!dropdownAuthOpen)}
                isopen={dropdownAuthOpen ? "true" : "false"}
              >
                <IoIosArrowDown size={20} />
              </Arrow>
            </DropdownBody>
            {dropdownAuthOpen && (
              <>
                <DropdownItem
                  onClick={() => {
                    navigation("/admin/manage-website?key=home");
                  }}
                >
                  <Typography
                    size={TextSize.sm}
                    weight={TextWeight.medium}
                    lh="2"
                  >
                    Home page
                  </Typography>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    navigation("/admin/manage-website?key=about");
                  }}
                >
                  <Typography
                    size={TextSize.sm}
                    weight={TextWeight.medium}
                    lh="2"
                  >
                    About page
                  </Typography>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    navigation("/admin/manage-website?key=services");
                  }}
                >
                  <Typography
                    size={TextSize.sm}
                    weight={TextWeight.medium}
                    lh="2"
                  >
                    Our services
                  </Typography>
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    navigation("/admin/manage-website?key=portfolio");
                  }}
                >
                  <Typography
                    size={TextSize.sm}
                    weight={TextWeight.medium}
                    lh="2"
                  >
                    Portfolio
                  </Typography>
                </DropdownItem>
              </>
            )}
          </Dropdown>
          <Nav to={"/admin/archived"}>
            <NavItem>
              <IoArchiveOutline
                size={20}
                color={
                  path.includes("/admin/archived")
                    ? "rgba(0, 131, 226, 1)"
                    : "inherit"
                }
              />

              <Typography
                size={TextSize.sm}
                weight={TextWeight.medium}
                lh="2"
                color={
                  path.includes("/admin/archived")
                    ? "rgba(0, 131, 226, 1)"
                    : "inherit"
                }
                ml="0.8"
              >
                Archived
              </Typography>
            </NavItem>
          </Nav>
          <NavItem onClick={logout}>
            <TbLogout size={20} color={"#E71C23"} />
            <Typography
              size={TextSize.sm}
              weight={TextWeight.medium}
              lh="2"
              color={"#E71C23"}
              ml="0.8"
            >
              Log out
            </Typography>
          </NavItem>
        </>
      )}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: absolute;
  background-color: white;
  display: none;
  padding: 0.6rem 0.2rem;
  right: 1.2rem;
  top: 100%;
  z-index: 10;

  border-radius: 0.8rem;
  box-shadow: 0px 4px 6px -2px #10182808;

  box-shadow: 0px 12px 16px -4px #10182814;

  @media only screen and (max-width: 769px) {
    display: block;
  }
`;

const NavItem = styled.div`
  padding: 0.9rem 1rem;
  width: 22.8rem;
  height: 3.8rem;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  color: rgba(52, 64, 84, 1);
`;

const Nav = styled(Link)`
  text-decoration: none;
  color: white;
  :hover {
    color: rgba(0, 131, 226, 1);
  }
`;

const Dropdown = styled.div`
  border-top: 1px solid rgba(234, 236, 240, 1);
  border-bottom: 1px solid rgba(234, 236, 240, 1);
  padding: 0.4rem 0rem;
  color: rgba(52, 64, 84, 1);
`;

const DropdownBody = styled.div`
  display: flex;
  align-items: center;
  padding: 0.9rem 1rem;
`;

const Arrow = styled.div<{ isopen: string }>`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(52, 64, 84, 1);
  transform: ${(props) =>
    props.isopen === "true" ? "rotate(180deg)" : "rotate(0deg)"};
  transition: ease-in-out 0.2s all;
`;

const DropdownItem = styled.div`
  width: 100%;
  padding: 1.1rem 1.6rem;
`;
