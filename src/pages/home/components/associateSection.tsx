import React from "react";
import styled from "styled-components";
import Typography from "../../../components/typography";
import { TextSize, TextWeight } from "../../../components/typography/enums";

const AssociateSection = () => {
  return (
    <Container>
      <Typography size={TextSize.md} weight={TextWeight.medium} mb="3.2">
        We’ve worked with the best
      </Typography>
    </Container>
  );
};

export default AssociateSection;

const Container = styled.div`
  background-color: white;
  padding: 0rem 8rem;
  padding-top: 2.4rem;
  padding-bottom: 9.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 769px) {
    padding: 0rem 1.6rem;
    padding-top: 2.4rem;
    padding-bottom: 6.4rem;
  }
`;
