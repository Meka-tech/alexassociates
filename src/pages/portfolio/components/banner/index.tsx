import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import SearchInput from "../../../../components/input/searchInput";
import BannerImg from "../../../../images/png/portfolio-banner.png";

interface IProps {
  setInputValue: (value: string) => void;
  inputValue: string;
}
const Banner = ({ setInputValue, inputValue }: IProps) => {
  return (
    <Container>
      <BannerContainer src={BannerImg} alt="portfolio-banner" />
      <Typography
        color="rgba(0, 131, 226, 1)"
        weight={TextWeight.semibold}
        size={TextSize.md}
        m_size={TextSize.sm}
        lh="2.4"
        m_lh="2"
        mb="1.2"
      >
        Our portfolio
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
        The best works from our team
      </Typography>
      <Typography
        color="white"
        size={TextSize.xl}
        m_size={TextSize.lg}
        lh="2.8"
        mb="4"
        m_mb="3.2"
      >
        The latest industry news, interviews, technologies, and resources.
      </Typography>
      <SearchContainer>
        <SearchInput
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </SearchContainer>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
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
    padding: 6.4rem 3.2rem;
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
  @media only screen and (max-width: 769px) {
    object-fit: cover;
  }
`;

const SearchContainer = styled.div`
  width: 32rem;

  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;
