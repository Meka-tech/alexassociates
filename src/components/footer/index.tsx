import React from "react";
import styled from "styled-components";
import Logo from "../logo";
import { Link } from "react-router-dom";
import Typography from "../typography";
import { TextSize, TextWeight } from "../typography/enums";
import { FlexBox } from "../container-styles/styles";

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Links>
        <FooterLink to="/">
          <Typography size={TextSize.md} weight={TextWeight.semibold} lh="2.4">
            Home
          </Typography>
        </FooterLink>
        <FooterLink to="/about">
          <Typography size={TextSize.md} weight={TextWeight.semibold} lh="2.4">
            About
          </Typography>
        </FooterLink>
        <FooterLink to="/portfolio">
          <Typography size={TextSize.md} weight={TextWeight.semibold} lh="2.4">
            Portfolio
          </Typography>
        </FooterLink>
        <FooterLink to="/our-services">
          <Typography size={TextSize.md} weight={TextWeight.semibold} lh="2.4">
            Our Services
          </Typography>
        </FooterLink>
        <FooterLink to="https://wa.link/w8lzhk">
          <Typography size={TextSize.md} weight={TextWeight.semibold} lh="2.4">
            Help
          </Typography>
        </FooterLink>
        {/* <FooterLink to="/">
          <Typography size={TextSize.md} weight={TextWeight.semibold} lh="2.4">
            Privacy
          </Typography>
        </FooterLink> */}
      </Links>
      <Bottom>
        <Typography size={TextSize.md} m_mt="1.6">
          © {new Date().getFullYear()} Alex & Associates. All rights reserved.
        </Typography>
        <FlexBox>
          {/* <BottomLink to="">
            <Typography size={TextSize.md}>Terms</Typography>
          </BottomLink> */}
          <BottomLink to="/privacy-policy">
            <Typography size={TextSize.md}>Privacy</Typography>
          </BottomLink>
        </FlexBox>
      </Bottom>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: rgba(0, 54, 92, 1);
  padding: 6.4rem 8rem;
  color: white;
  overflow: hidden;
  @media only screen and (max-width: 769px) {
    padding: 4.8rem 1.6rem;
  }
`;

const LogoContainer = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  margin-bottom: 3.2rem;
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-column-gap: 3.2rem;
  width: fit-content;
  margin-bottom: 6.4rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: auto auto;
    grid-column-gap: 11.35rem;
    grid-row-gap: 1.2rem;
    margin-bottom: 4.8rem;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Bottom = styled.div`
  border-top: 1px solid rgba(234, 236, 240, 1);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3.2rem;
  @media only screen and (max-width: 769px) {
    flex-direction: column-reverse;
    align-items: start;
  }
`;

const BottomLink = styled(FooterLink)`
  margin-right: 1.6rem;
`;
