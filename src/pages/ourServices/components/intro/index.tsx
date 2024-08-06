import React from "react";
import styled from "styled-components";
import BackgroundGrid from "../../../../components/BackgroundGrid";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import { FlexBox } from "../../../../components/container-styles/styles";

interface IProps {
  data?: {
    headline: string;
    paragraph: string;
  };
}
const Intro = ({ data }: IProps) => {
  return (
    <Container>
      <BackgroundGrid
        web={{ width: "1800px", height: "1350px" }}
        mobile={{ width: "900px", height: "900px" }}
      />
      <Body>
        <Typography
          color="rgba(0, 131, 226, 1)"
          size={TextSize.md}
          mb="1.2"
          lh="2.4"
          weight={TextWeight.semibold}
        >
          Let’s work with you
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
                `Transforming spaces with innovative design, expert planning and
              seamless execution.`}
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
                `At Alex & Associates, we offer a comprehensive range of interior
              design and architectural services tailored to meet the unique
              needs of each client. Our expertise spans various sectors,
              ensuring that we deliver exceptional results for all types of
              projects`}
            </Typography>
          </FlexItemTwo>
        </TextFlex>
      </Body>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  border-bottom: 1px solid rgba(46, 59, 65, 1);
  margin-bottom: 0.8rem;
  position: relative;
  /* overflow: hidden; */
  @media only screen and (max-width: 769px) {
  }
`;

const Body = styled.div`
  padding: 9.6rem 11.2rem;
  @media only screen and (max-width: 769px) {
    padding: 6.4rem 1.6rem;
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
