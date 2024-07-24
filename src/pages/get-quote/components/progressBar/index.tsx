import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";

const ProgressBar = ({ currentStep }: { currentStep: number }) => {
  const list = [
    { title: "Your details", desc: "Please provide your contact information" },
    {
      title: "Project details",
      desc: "A few details about your project"
    },
    {
      title: "Project description",
      desc: "A brief description of your project"
    },
    {
      title: "Additional Information",
      desc: "Share any additional information"
    }
  ];
  return (
    <Container>
      <Steps>
        {list.map(({ title, desc }, i) => {
          const step = i + 1;
          return (
            <StepItem
              key={i}
              isactive={currentStep === step ? "true" : "false"}
            >
              <Bar isactive={currentStep >= step ? "true" : "false"} />
              <Typography
                lh="2.4"
                size={TextSize.md}
                weight={TextWeight.semibold}
                mb="0.2"
              >
                {title}
              </Typography>
              <Typography lh="2.4" size={TextSize.md}>
                {desc}
              </Typography>
            </StepItem>
          );
        })}
      </Steps>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  padding: 0rem 8rem;
  margin: 0.8rem 0rem;
  border-bottom: 1px solid rgba(46, 59, 65, 1);
  border-top: 1px solid rgba(46, 59, 65, 1);
  @media only screen and (max-width: 769px) {
    padding: 2.4rem 1.6rem;
    padding-bottom: 4.8rem;
  }
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 1.6rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 2rem;
  }
`;

const StepItem = styled.div<{ isactive: string }>`
  width: 100%;
  position: relative;
  color: ${(props) => (props.isactive === "true" ? "#0496FF" : "white")};
`;

const Bar = styled.div<{ isactive: string }>`
  border-bottom: 4px solid
    ${(props) => (props.isactive === "true" ? "#0496FF" : "white")};
  height: 1px;
  width: 100%;
  margin-bottom: 1.6rem;
`;
