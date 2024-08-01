import React from "react";
import styled from "styled-components";
import LoadingAnimation from "../loading-animation";
import Typography from "../typography";
import { TextSize, TextWeight } from "../typography/enums";

const LoadingData = () => {
  return (
    <Container>
      <LoadingAnimation size={4} color="#0083E2" />
      <Typography mt="3" weight={TextWeight.medium} size={TextSize.lg}>
        Loading...
      </Typography>
    </Container>
  );
};

export default LoadingData;

const Container = styled.div`
  width: 100%;
  height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
  @media only screen and (max-width: 769px) {
    height: 48rem;
  }
`;
