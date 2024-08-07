import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import { MdOutlineRateReview } from "react-icons/md";

const NoData = () => {
  return (
    <Container>
      <Circle>
        <SvgContainer>
          <MdOutlineRateReview size={40} />
        </SvgContainer>
      </Circle>
      <Typography
        weight={TextWeight.semibold}
        size={TextSize.lg}
        lh="2.8"
        mb="0.8"
      >
        No archived Reviews
      </Typography>
      <Typography color="#CFCECE" size={TextSize.sm}>
        You currently have no archived reviews.
      </Typography>
    </Container>
  );
};

export default NoData;

const Container = styled.div`
  width: 100%;
  height: 72rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
  @media only screen and (max-width: 769px) {
    height: 48rem;
  }
`;

const Circle = styled.div`
  width: 10.4rem;
  height: 10.4rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;
const SvgContainer = styled.div`
  color: #0083e2;
`;
