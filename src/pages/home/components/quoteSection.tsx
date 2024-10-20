import React from "react";
import styled from "styled-components";
import Typography from "../../../components/typography";
import { TextSize, TextWeight } from "../../../components/typography/enums";
import PrimaryButton from "../../../components/buttons/primary";
import Image from "../../../images/png/quoteImage.png";
import { ReactComponent as QuoteOrnament } from "../../../images/svg/ornaments/quoteOrnament.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Glow } from "../../../images/svg/glow/apply-glow.svg";

interface IProps {
  data?: { headline: string; subheadline: string };
}
const QuoteSection = ({ data }: IProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Ornament>
        <QuoteOrnament />
      </Ornament>
      <Body>
        <TextArea>
          <Typography
            size={TextSize.DisplayMd}
            weight={TextWeight.semibold}
            mb="2"
          >
            {data?.headline || "Apply for a Quote"}
          </Typography>
          <Typography size={TextSize.xl} mb="4" lh="3">
            {data?.subheadline ||
              ` Ready to transform your space? Fill out our quick form to receive a
            personalized quote tailored to your needs. Lets bring your vision to
            life!`}
          </Typography>
          <ButtonContainer>
            <PrimaryButton
              text="Get started"
              onClick={() => navigate("/get-quote")}
            />
          </ButtonContainer>
        </TextArea>
        <QuoteImage src={Image} alt="quote images" />
      </Body>
      <BackgroundGlowDiv />
    </Container>
  );
};

export default QuoteSection;

const Container = styled.div`
  border-top: 1px solid rgba(46, 59, 65, 1);
  border-bottom: 1px solid rgba(46, 59, 65, 1);
  padding: 9.6rem 11.2rem;
  position: relative;
  @media only screen and (max-width: 769px) {
    padding: 6.4rem 1.6rem;
  }
`;

const Body = styled.div`
  width: 100%;
  padding: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.6rem;
  background: #0133503b;
  backdrop-filter: blur(10px);
  overflow: hidden;
  position: relative;
  z-index: 2;
  @media only screen and (max-width: 769px) {
    flex-direction: column;
    padding: 0rem;
  }
`;

const TextArea = styled.div`
  padding: 6.4rem;
  color: white;
  width: 45%;
  @media only screen and (max-width: 769px) {
    padding: 4rem 2.4rem;
    width: 100%;
  }
`;
const ButtonContainer = styled.div`
  width: 12.9rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
    margin-bottom: 0.8rem;
  }
`;

const QuoteImage = styled.img`
  width: 45%;
  height: 40rem;
  object-fit: cover;
  overflow: hidden;
  @media only screen and (max-width: 769px) {
    width: 100%;
    height: 28rem;
  }
`;

const Ornament = styled.div`
  position: absolute;
  top: 6.9rem;
  right: 8rem;
  width: 23.9rem;
  z-index: 0;
  @media only screen and (max-width: 769px) {
    top: 1.8rem;
    right: 0;
    width: 12.8rem;
  }
`;
const BackgroundGlowDiv = styled.div`
  position: absolute;
  z-index: -1;
  top: 18rem;
  right: 20rem;
  width: 1rem;
  height: 1rem;
  background-color: rgba(0, 131, 226, 0.4);
  -webkit-box-shadow: 0px 0px 300px 183px rgba(0, 132, 226, 0.7);
  -moz-box-shadow: 0px 0px 300px 183px rgba(0, 132, 226, 0.7);
  box-shadow: 0px 0px 300px 183px rgba(0, 132, 226, 0.7);
  border-radius: 50%;
  @media only screen and (max-width: 769px) {
    -webkit-box-shadow: 0px 0px 173px 81px rgba(0, 132, 226, 0.7);
    -moz-box-shadow: 0px 0px 173px 81px rgba(0, 132, 226, 0.7);
    box-shadow: 0px 0px 173px 81px rgba(0, 132, 226, 0.7);
    top: 5rem;
    right: 5rem;
  }
`;
