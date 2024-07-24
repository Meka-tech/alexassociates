import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledInput from "../../../../../components/input/primaryInput";
import PrimaryButton from "../../../../../components/buttons/primary";
import StyledTextArea from "../../../../../components/input/textArea";

interface IProps {
  goBack: () => void;
  Description: string;
  Requirements: string;
  Budget: string;
  complete: (description: string, requirements: string, budget: string) => void;
}
const StepThree = ({
  goBack,
  Description,
  Requirements,
  Budget,
  complete
}: IProps) => {
  const [description, setDescription] = useState(Description);
  const [requirements, setRequirements] = useState(Requirements);
  const [budget, setBudget] = useState(Budget);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      description.length > 0 &&
      requirements.length > 0 &&
      budget.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [description, requirements, budget]);

  return (
    <Container>
      <GridItems>
        <StyledTextArea
          label="Please provide a brief description of your project"
          placeholder="Leave us a message..."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <StyledTextArea
          label="Do you have any specific requirements or preferences?"
          placeholder="Leave us a message..."
          value={requirements}
          onChange={(e) => {
            setRequirements(e.target.value);
          }}
        />
        <StyledInput
          label="What is your estimated budget for this project?"
          currency="$"
          value={budget}
          onChange={(e) => {
            setBudget(e.target.value);
          }}
        />
      </GridItems>

      <ButtonGrid>
        <PrimaryButton variant={true} text="Back" onClick={goBack} />
        <PrimaryButton
          text="Proceed"
          onClick={() => {
            complete(description, requirements, budget);
          }}
          disabled={buttonDisabled}
        />
      </ButtonGrid>
    </Container>
  );
};

export default StepThree;

const Container = styled.div`
  border-top: 1px solid rgba(46, 59, 65, 1);
  padding: 6.4rem 8rem;
  color: white;
  @media only screen and (max-width: 769px) {
    padding: 4.8rem 1.6rem;
  }
`;

const GridItems = styled.div`
  display: grid;
  grid-template-columns: 100%;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  grid-row-gap: 2.4rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
  }
`;

const CheckItem = styled.div`
  padding: 0.8rem 1.6rem;
  display: flex;
  margin-bottom: 1.2rem;
`;

const DateContainer = styled.div`
  width: 32.1rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

const ButtonGrid = styled.div`
  margin-top: 0.8rem;
  display: grid;
  grid-template-columns: 10.5rem 10.5rem;
  grid-column-gap: 3.2rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 45% 45%;
    justify-content: space-between;
  }
`;
