import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import BannerImg from "../../../../images/png/about-banner.png";

const Banner = () => {
  return (
    <Container>
      <BannerContainer src={BannerImg} alt="services-banner" />
      <Typography
        color="rgba(0, 131, 226, 1)"
        weight={TextWeight.semibold}
        size={TextSize.md}
        m_size={TextSize.sm}
        lh="2.4"
        m_lh="2"
        mb="1.2"
      >
        About us
      </Typography>
      <Typography
        color="white"
        size={TextSize.DisplayLg}
        m_size={TextSize.DisplayMd}
        weight={TextWeight.semibold}
        m_lh="4.4"
        lh="6"
        mb="2.4"
        m_mb="1.6"
      >
        About the company
      </Typography>
      <Typography
        color="white"
        size={TextSize.xl}
        m_size={TextSize.lg}
        lh="2.8"
      >
        Learn more about the company and the team behind it.
      </Typography>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: 34.4rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 9.6rem;
  text-align: center;
  background: linear-gradient(
    172.66deg,
    #000000 -0.31%,
    rgba(0, 0, 0, 0) 229.81%
  );
  position: relative;
  @media only screen and (max-width: 769px) {
    padding: 6.4rem 1.6rem;
  }
`;

const BannerContainer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: -1;
`;
