import React from "react";
import styled from "styled-components";
import Typography from "../../../../../components/typography";
import {
  TextSize,
  TextWeight
} from "../../../../../components/typography/enums";
import BackgroundGrid from "../../../../../components/BackgroundGrid";

interface IProps {
  header: string;
  subheader: string;
  children?: any;
}
const Section = ({ header, subheader, children }: IProps) => {
  return (
    <Container>
      <HeadeArea>
        <BackgroundGrid
          web={{ height: "1200px", width: "1600px" }}
          mobile={{ height: "720px", width: "960px" }}
        />
        <Typography
          size={TextSize.DisplayLg}
          weight={TextWeight.semibold}
          mt="8"
          lh="6"
        >
          {header}
        </Typography>
        <Typography color="#CFCECE" mt="2.4" size={TextSize.xl}>
          {subheader}
        </Typography>
      </HeadeArea>
      <BodyArea>{children}</BodyArea>
    </Container>
  );
};

export default Section;

const Container = styled.div`
  width: 100%;
  color: white;
  position: relative;
  border-top: 1px solid #2e3b41;
  border-bottom: 1px solid #2e3b41;
  padding: 0 8rem;
  margin-bottom: 0.8rem;
  @media only screen and (max-width: 769px) {
    padding: 0 1.6rem;
  }
`;

const HeadeArea = styled.div`
  position: relative;
  overflow: hidden;
`;

const BodyArea = styled.div`
  padding: 3.2rem 0;
`;
