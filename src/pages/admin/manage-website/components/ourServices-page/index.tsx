import React from "react";
import styled from "styled-components";
import Section from "../section";
import StyledInput from "../../../../../components/input/primaryInput";
import StyledTextArea from "../../../../../components/input/textArea";

const OurServicesEdit = () => {
  return (
    <Container>
      <Section
        header="Section 1 (Let’s work with you)"
        subheader="An introduction to the services page."
      >
        <InputGrid>
          <StyledTextArea limit={160} label="Headline" height="6" />
          <StyledTextArea label="Paragraph" height="6" />
        </InputGrid>
      </Section>
      <Section
        header="Section 2 (#1)"
        subheader="Information about the first service"
      >
        <InputGrid>
          <StyledInput limit={160} label="Headline" height="6" />
          <StyledInput label="Sub headline" height="6" limit={250} />
          <StyledInput limit={160} label="Headline" height="6" />
          <StyledInput label="Sub headline" height="6" limit={250} />
        </InputGrid>
      </Section>
      <Section
        header="Section 3 (#2)"
        subheader="Information about the second service"
      >
        <InputGrid>
          <StyledInput limit={160} label="Headline" height="6" />
          <StyledInput label="Sub headline" height="6" limit={250} />
          <StyledInput limit={160} label="Headline" height="6" />
          <StyledInput label="Sub headline" height="6" limit={250} />
        </InputGrid>
      </Section>
      <Section
        header="Section 4 (#3)"
        subheader="Information about the third service"
      >
        <InputGrid>
          <StyledInput limit={160} label="Headline" height="6" />
          <StyledInput label="Sub headline" height="6" limit={250} />
          <StyledInput limit={160} label="Headline" height="6" />
          <StyledInput label="Sub headline" height="6" limit={250} />
        </InputGrid>
      </Section>
      <Section
        header="Section 5 (#4)"
        subheader="Information about the fourth service"
      >
        <InputGrid>
          <StyledInput limit={160} label="Headline" height="6" />
          <StyledInput label="Sub headline" height="6" limit={250} />
          <StyledInput limit={160} label="Headline" height="6" />
          <StyledInput label="Sub headline" height="6" limit={250} />
        </InputGrid>
      </Section>
    </Container>
  );
};

export default OurServicesEdit;

const Container = styled.div`
  width: 100%;
`;

const InputGrid = styled.div`
  width: 100%;
  display: grid;
  align-items: start;
  justify-content: space-between;
  grid-template-columns: 48% 48%;
  grid-row-gap: 2.4rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
  }
`;
