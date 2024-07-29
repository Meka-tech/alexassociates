import React, { useEffect, useState } from "react";
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
import Label from "../../../../../components/typography/label";
import DateConvert from "../../../../../utils/dateConvert";

interface IProps {
  goBack: () => void;
  Location: string;
  ProjectType: string;
  ChosenServices: string[];
  StartDate: Date | null;
  EndDate: Date | null;
  complete: (
    location: string,
    projectType: string,
    chosenServices: string[],
    startDate: Date | null,
    endDate: Date | null
  ) => void;
}
const StepTwo = ({
  goBack,
  Location,
  ProjectType,
  ChosenServices,
  complete,
  StartDate,
  EndDate
}: IProps) => {
  const [location, setLocation] = useState(Location);
  const [projectType, setProjectType] = useState(ProjectType);
  const [chosenServices, setChosenServices] =
    useState<string[]>(ChosenServices);
  const [startDate, setStartDate] = useState<Date | null>(StartDate);
  const [endDate, setEndDate] = useState<Date | null>(EndDate);
  const [disabled, setDisabled] = useState(true);

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

  useEffect(() => {
    if (
      location.length > 0 &&
      projectType.length > 0 &&
      chosenServices.length > 0 &&
      startDate &&
      endDate
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [location, projectType, chosenServices, startDate, endDate]);
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
        <Dates>
          <div>
            <Label>Expected start date</Label>
            <DateContainer>
              <DateInput
                selectDate={(date) => setStartDate(date)}
                placeholder={startDate ? DateConvert(startDate) : "Select date"}
              />
            </DateContainer>
          </div>
          <div>
            <Label>Expected completion date</Label>
            <DateContainer>
              <DateInput
                selectDate={(date) => setEndDate(date)}
                placeholder={endDate ? DateConvert(endDate) : "Select date"}
              />
            </DateContainer>
          </div>
        </Dates>
      </GridItems>

      <ButtonGrid>
        <PrimaryButton variant={true} text="Back" onClick={goBack} />
        <PrimaryButton
          text="Proceed"
          disabled={disabled}
          onClick={() => {
            complete(location, projectType, chosenServices, startDate, endDate);
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

const Dates = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 48% 48%;
  align-items: start;
  justify-content: space-between;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 48% 48%;
    padding: 0 2rem;
  }
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
