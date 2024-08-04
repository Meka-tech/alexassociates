import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../../components/container-styles/styles";
import Typography from "../../../components/typography";
import { TextSize, TextWeight } from "../../../components/typography/enums";
import PrimaryButton from "../../../components/buttons/primary";
import BackgroundGrid from "../../../components/BackgroundGrid";
import Check from "../../../images/png/check.png";
import { ReactComponent as OrnamentOne } from "../../../images/svg/ornaments/ornamentOne.svg";
import Slideshow from "./slideshow";
import { useNavigate } from "react-router-dom";

interface IProps {
  handleContact: () => void;
  data?: {
    headline?: string;
    subheadline?: string;
    keypoint1?: string;
    keypoint2?: string;
    keypoint3?: string;
  };
}

const HeroSection = ({ handleContact, data }: IProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Ornament>
        <OrnamentOne />
      </Ornament>
      <BackgroundGrid
        web={{ width: "1780px", height: "1380px" }}
        mobile={{ width: "1100px", height: "1100px" }}
      />
      <TextArea>
        <Header>
          <Typography
            size={TextSize.DisplayXl}
            m_size={TextSize.DisplayMd}
            weight={TextWeight.semibold}
            color="white"
          >
            {data?.headline ||
              "Beautiful, Practical and Sustainable Spaces by Design"}
          </Typography>
        </Header>
        <SubHeader>
          <Typography
            size={TextSize.xl}
            m_size={TextSize.lg}
            weight={TextWeight.regular}
            lh="2.4"
            mt="2.4"
            m_mt="1.6"
            color="white"
          >
            {data?.subheadline ||
              `Discover the Art of Elegant Design and Innovative Architecture with
            Alex & Associates.`}
          </Typography>
        </SubHeader>
        <MobileFlip>
          <CTAButtons>
            <CTAButton>
              <PrimaryButton text="Contact us" onClick={handleContact} />
            </CTAButton>
            <CTAButton>
              <PrimaryButton
                text="Get a quote"
                variant={true}
                onClick={() => navigate("/get-quote")}
              />
            </CTAButton>
          </CTAButtons>
          <HeroItems>
            <HeroItem>
              <CheckImage src={Check} />
              <Typography
                size={TextSize.lg}
                weight={TextWeight.regular}
                lh="2.8"
              >
                {data?.keypoint1 ||
                  "Expert craftsmanship and innovative design"}
              </Typography>
            </HeroItem>
            <HeroItem>
              <CheckImage src={Check} />
              <Typography
                size={TextSize.lg}
                weight={TextWeight.regular}
                lh="2.8"
              >
                {data?.keypoint2 || "Tailored solutions for every space"}
              </Typography>
            </HeroItem>
            <HeroItem>
              <CheckImage src={Check} />
              <Typography
                size={TextSize.lg}
                weight={TextWeight.regular}
                lh="2.8"
              >
                {data?.keypoint3 ||
                  " Unmatched quality and client satisfaction"}
              </Typography>
            </HeroItem>
          </HeroItems>
        </MobileFlip>
      </TextArea>
      <SlideshowContainer>
        <Slideshow
          images={[
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb",
            "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb",
            "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb",
            "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb",
            "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb",
            "https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb",
            "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb"
          ]}
        />
      </SlideshowContainer>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 9.6rem 0rem;
  overflow: hidden;
  @media only screen and (max-width: 769px) {
    flex-direction: column-reverse;
    padding: 6.4rem 0rem;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 8rem;

  @media only screen and (max-width: 769px) {
    padding: 0rem 1.6rem;
    margin-top: 6.4rem;
  }
`;

const Header = styled.h1`
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 769px) {
    width: 100%;
    text-align: left;
  }
`;

const SubHeader = styled.h2`
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 769px) {
    width: 100%;
    text-align: left;
  }
`;
const MobileFlip = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 769px) {
    flex-direction: column-reverse;
  }
`;
const CTAButtons = styled.div`
  display: flex;
  margin-top: 4.8rem;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  z-index: 1;

  @media only screen and (max-width: 769px) {
    flex-direction: column;
    width: 100%;
    margin-top: 3.2rem;
  }
`;

const CTAButton = styled.div`
  width: 48%;
  @media only screen and (max-width: 769px) {
    width: 100%;
    margin-bottom: 1.6rem;
  }
`;

const HeroItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin-top: 4.8rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 769px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    margin-top: 3.2rem;
  }
`;

const HeroItem = styled(FlexBox)`
  @media only screen and (max-width: 769px) {
    margin-bottom: 1.6rem;
    align-items: start;
  }
`;

const CheckImage = styled.img`
  margin-right: 1.2rem;
`;

const SlideshowContainer = styled.div`
  margin-top: 6.4rem;
  padding-left: 11.7rem;
  padding-right: 11.7rem;

  @media only screen and (max-width: 769px) {
    margin-top: 0rem;
    padding: 0rem;
  }
`;

const Ornament = styled.div`
  position: absolute;
  top: 0;
  right: 20rem;
  z-index: 0;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;
