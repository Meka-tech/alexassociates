import React from "react";
import styled from "styled-components";
import Typography from "../../../components/typography";
import { TextSize, TextWeight } from "../../../components/typography/enums";

interface IProps {
  data: {
    headline: string;
    subheadline: string;
    metric1: string;
    metric2: string;
    metric3: string;
    figure1: string;
    figure2: string;
    figure3: string;
  };
}
const ResultSection = ({ data }: IProps) => {
  return (
    <Container>
      <Body>
        <Typography
          weight={TextWeight.semibold}
          size={TextSize.DisplayMd}
          m_size={TextSize.DisplaySm}
          mb="2"
          m_mb="1.6"
        >
          {data?.headline || "Great results, better than ever"}
        </Typography>
        <Typography size={TextSize.xl} mb="6.4">
          {data?.subheadline || "Everything others do we do it better :)"}
        </Typography>
        <Results>
          <div>
            <Typography
              size={TextSize.DisplayXl}
              m_size={TextSize.DisplayLg}
              weight={TextWeight.semibold}
            >
              {data?.figure1 || "400+"}
            </Typography>
            <Typography
              size={TextSize.lg}
              weight={TextWeight.medium}
              m_mb="3.2"
            >
              {data?.metric1 || "Projects completed"}
            </Typography>
          </div>
          <div>
            <Typography
              size={TextSize.DisplayXl}
              m_size={TextSize.DisplayLg}
              weight={TextWeight.semibold}
            >
              {data?.figure2 || "600%"}
            </Typography>
            <Typography
              size={TextSize.lg}
              weight={TextWeight.medium}
              m_mb="3.2"
            >
              {data?.metric2 || "Return on investment"}
            </Typography>
          </div>
          <div>
            <Typography
              size={TextSize.DisplayXl}
              m_size={TextSize.DisplayLg}
              weight={TextWeight.semibold}
            >
              {data?.figure3 || "10k"}
            </Typography>
            <Typography
              size={TextSize.lg}
              weight={TextWeight.medium}
              m_mb="3.2"
            >
              {data?.metric3 || "Satisfied clients"}
            </Typography>
          </div>
        </Results>
      </Body>
    </Container>
  );
};

export default ResultSection;

const Container = styled.div`
  border-top: 1px solid rgba(46, 59, 65, 1);
  border-bottom: 1px solid rgba(46, 59, 65, 1);
  padding: 9.6rem 11.2rem;

  @media only screen and (max-width: 769px) {
    padding: 6.4rem 1.6rem;
  }
`;

const Body = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  @media only screen and (max-width: 769px) {
    background: #0133503b;
    border: 1px solid #0496ff;
    border-radius: 1.6rem;
    padding: 4rem 2.4rem;
  }
`;

const Results = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 6.4rem;
  background: #0133503b;
  border: 1px solid #0496ff;
  border-radius: 1.6rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: auto;
    padding: 0;
    border: none;
    background-color: transparent;
  }
`;
