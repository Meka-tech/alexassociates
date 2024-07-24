import React, { useState } from "react";
import styled from "styled-components";
import StyledInput from "../../../../../components/input/primaryInput";
import PrimaryButton from "../../../../../components/buttons/primary";
import Dropdown from "../../../../../components/input/dropdown";
import Typography from "../../../../../components/typography";
import {
  TextSize,
  TextWeight
} from "../../../../../components/typography/enums";
import Check from "../../../../../components/input/check";
import DateInput from "../../../../../components/input/date_input";

interface IProps {
  goBack: () => void;
  Location: string;
  ProjectType: string;
  ChosenServices: string[];
  complete: (
    location: string,
    projectType: string,
    chosenServices: string[]
  ) => void;
}
const StepTwo = ({
  goBack,
  Location,
  ProjectType,
  ChosenServices,
  complete
}: IProps) => {
  const [location, setLocation] = useState(Location);
  const [projectType, setProjectType] = useState(ProjectType);
  const [chosenServices, setChosenServices] =
    useState<string[]>(ChosenServices);

  const servicesList = [
    "Interior design",
    "Architectural design",
    "Furniture & Furnishings",
    "Project execution"
  ];

  const AddToList = (item: string) => {
    setChosenServices((prev) => [...prev, item]);
  };
  const RemoveFromList = (item: string) => {
    const arr = chosenServices;
    const filtered = arr.filter((i) => i !== item);
    setChosenServices(filtered);
  };

  return (
    <Container>
      <GridItems>
        <StyledInput
          label="Location of project"
          placeholder="Enter location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <div>
          <Typography
            mb="0.6"
            lh="2"
            size={TextSize.sm}
            weight={TextWeight.medium}
            color="#CFCECE"
          >
            Type of project
          </Typography>
          <Dropdown
            placeholder="Select"
            items={["Residential", "Commercial"]}
            selectItem={(value) => {
              setProjectType(value);
            }}
          />
        </div>
        <div>
          <Typography
            mb="0.6"
            lh="2"
            size={TextSize.sm}
            weight={TextWeight.medium}
            color="#CFCECE"
          >
            Which services do you need? (Select all that apply)
          </Typography>
          {servicesList.map((service, i) => {
            const IsInArray = chosenServices.includes(service);
            return (
              <CheckItem key={i}>
                <Check
                  state={IsInArray}
                  setCheck={() => {
                    if (IsInArray) {
                      RemoveFromList(service);
                    } else {
                      AddToList(service);
                    }
                  }}
                />
                <Typography
                  ml="0.8"
                  size={TextSize.sm}
                  weight={TextWeight.medium}
                  lh="2"
                  color={IsInArray ? "#0083E2" : "white"}
                >
                  {service}
                </Typography>
              </CheckItem>
            );
          })}
        </div>
        <div>
          <Typography
            mb="0.6"
            lh="2"
            size={TextSize.sm}
            weight={TextWeight.medium}
            color="#CFCECE"
          >
            Expected start date - Expected completion date
          </Typography>
          <DateContainer>
            <DateInput />
          </DateContainer>
        </div>
      </GridItems>

      <ButtonGrid>
        <PrimaryButton variant={true} text="Back" onClick={goBack} />
        <PrimaryButton
          text="Proceed"
          onClick={() => {
            complete(location, projectType, chosenServices);
          }}
        />
      </ButtonGrid>
    </Container>
  );
};

export default StepTwo;

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
  grid-template-columns: 48% 48%;
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
