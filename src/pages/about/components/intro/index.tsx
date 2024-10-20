import React from "react";
import styled from "styled-components";
import BackgroundGrid from "../../../../components/BackgroundGrid";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import { FlexBox } from "../../../../components/container-styles/styles";

interface IProps {
  data?: { headline: string; paragraph: string };
  metrics?: {
    metric1: string;
    metric2: string;
    metric3: string;
    figure1: string;
    figure2: string;
    figure3: string;
  };
}
const Intro = ({ data, metrics }: IProps) => {
  return (
    <Container>
      <Background>
        <BackgroundGrid
          web={{ width: "1800px", height: "1350px" }}
          mobile={{ width: "900px", height: "900px" }}
        />
      </Background>
      <BodyText>
        <Typography
          color="rgba(0, 131, 226, 1)"
          size={TextSize.md}
          mb="1.2"
          lh="2.4"
          weight={TextWeight.semibold}
        >
          Nice to meet you
        </Typography>
        <TextFlex>
          <FlexItem>
            <Typography
              size={TextSize.DisplayLg}
              m_size={TextSize.DisplayXs}
              m_lh="3.2"
              weight={TextWeight.semibold}
              lh="6"
              m_mb="2"
            >
              {data?.headline ||
                ` Our mission is to transform spaces into functional and
              aesthetically pleasing environments tailored to our clients’
              needs.`}
            </Typography>
          </FlexItem>
          <FlexItemTwo>
            <Typography
              size={TextSize.xl}
              m_size={TextSize.md}
              m_lh="2.4"
              lh="3"
            >
              {data?.paragraph ||
                `Alex & Associates is a premier interior design and architectural
              firm based in Vizag, dedicated to transforming spaces with
              innovative and high-quality design solutions. Founded by Flight
              Lieutenant Alex Bennett (Retd.), our firm has built a reputation
              for excellence over 20 years of experience.`}
            </Typography>
          </FlexItemTwo>
        </TextFlex>
      </BodyText>
      <Results>
        <ResultItem>
          <Typography
            size={TextSize.DisplayXl}
            m_size={TextSize.DisplayLg}
            weight={TextWeight.semibold}
          >
            {metrics?.figure1 || "400+"}
          </Typography>
          <Typography size={TextSize.lg} weight={TextWeight.medium} m_mb="3.2">
            {metrics?.metric1 || "Projects completed"}
          </Typography>
        </ResultItem>
        <ResultItem>
          <Typography
            size={TextSize.DisplayXl}
            m_size={TextSize.DisplayLg}
            weight={TextWeight.semibold}
          >
            {metrics?.figure2 || "600%"}
          </Typography>
          <Typography size={TextSize.lg} weight={TextWeight.medium} m_mb="3.2">
            {metrics?.metric2 || "Return on investment"}
          </Typography>
        </ResultItem>
        <ResultItem>
          <Typography
            size={TextSize.DisplayXl}
            m_size={TextSize.DisplayLg}
            weight={TextWeight.semibold}
          >
            {metrics?.figure3 || "10k"}
          </Typography>
          <Typography size={TextSize.lg} weight={TextWeight.medium} m_mb="3.2">
            {metrics?.metric3 || " Satisfied clients"}
          </Typography>
        </ResultItem>
      </Results>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  margin-bottom: 0.8rem;
  position: relative;
  padding: 9.6rem 11.2rem;
  color: white;
  @media only screen and (max-width: 769px) {
    padding: 6.4rem 1.6rem;
    overflow: hidden;
  }
`;
const Background = styled.div`
  max-width: 100vw;
  left: 0;
  top: 0;
  z-index: -1;
  overflow: hidden;
`;

const BodyText = styled.div`
  margin-bottom: 9.6rem;
  @media only screen and (max-width: 769px) {
    margin-bottom: 6.4rem;
  }
`;

const TextFlex = styled(FlexBox)`
  align-items: start;
  @media only screen and (max-width: 769px) {
    flex-direction: column;
  }
`;

const FlexItem = styled.div`
  width: 55%;
  color: rgba(250, 250, 250, 1);
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

const FlexItemTwo = styled(FlexItem)`
  width: 28%;
  color: rgba(228, 228, 228, 1);
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

const Results = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  align-items: center;
  justify-content: space-between;
  padding: 6.4rem;
  background: #0133503b;
  backdrop-filter: blur(5px);
  border: 1px solid #0496ff;
  border-radius: 1.6rem;
  -webkit-box-shadow: 0px 0px 240px 4px rgba(0, 132, 226, 0.7);
  -moz-box-shadow: 0px 0px 240px 4px rgba(0, 132, 226, 0.7);
  box-shadow: 0px 0px 240px 4px rgba(0, 132, 226, 0.7);
  @media only screen and (max-width: 769px) {
    -webkit-box-shadow: 0px 0px 34px 0px rgba(0, 132, 226, 0.7);
    -moz-box-shadow: 0px 0px 34px 0px rgba(0, 132, 226, 0.7);
    box-shadow: 0px 0px 34px 0px rgba(0, 132, 226, 0.7);
    grid-template-columns: 100%;
    padding: 4rem 2.4rem;
  }
`;

const ResultItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
