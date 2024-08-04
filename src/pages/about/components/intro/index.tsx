import React from "react";
import styled from "styled-components";
import BackgroundGrid from "../../../../components/BackgroundGrid";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import { FlexBox } from "../../../../components/container-styles/styles";

interface IProps {
  data?: { headline: string; paragraph: string };
}
const Intro = ({ data }: IProps) => {
  return (
    <Container>
      <BackgroundGrid
        web={{ width: "1800px", height: "1350px" }}
        mobile={{ width: "900px", height: "900px" }}
      />
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
            400+
          </Typography>
          <Typography size={TextSize.lg} weight={TextWeight.medium} m_mb="3.2">
            Projects completed
          </Typography>
        </ResultItem>
        <ResultItem>
          <Typography
            size={TextSize.DisplayXl}
            m_size={TextSize.DisplayLg}
            weight={TextWeight.semibold}
          >
            600%
          </Typography>
          <Typography size={TextSize.lg} weight={TextWeight.medium} m_mb="3.2">
            Return on investment
          </Typography>
        </ResultItem>
        <ResultItem>
          <Typography
            size={TextSize.DisplayXl}
            m_size={TextSize.DisplayLg}
            weight={TextWeight.semibold}
          >
            10k
          </Typography>
          <Typography size={TextSize.lg} weight={TextWeight.medium} m_mb="3.2">
            Satisfied clients
          </Typography>
        </ResultItem>
      </Results>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  /* border-bottom: 1px solid rgba(46, 59, 65, 1); */
  margin-bottom: 0.8rem;
  position: relative;
  overflow: hidden;
  padding: 9.6rem 11.2rem;
  color: white;
  @media only screen and (max-width: 769px) {
    padding: 6.4rem 1.6rem;
  }
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
  @media only screen and (max-width: 769px) {
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
