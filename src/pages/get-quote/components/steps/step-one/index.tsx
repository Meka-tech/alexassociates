import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledInput from "../../../../../components/input/primaryInput";
import PhoneInput from "../../../../../components/input/phone_no/phone_input";
import PrimaryButton from "../../../../../components/buttons/primary";
import { useNavigate } from "react-router-dom";

interface IProps {
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  CountryIndex: number;
  complete: (
    firstname: string,
    lastname: string,
    email: string,
    phonenumber: string,
    countryindex: number
  ) => void;
}
const StepOne = ({
  FirstName,
  LastName,
  Email,
  PhoneNumber,
  CountryIndex,
  complete
}: IProps) => {
  const [firstName, setFirstName] = useState(FirstName);
  const [lastName, setLastName] = useState(LastName);
  const [email, setEmail] = useState(Email);
  const [phoneNumber, setPhoneNumber] = useState(PhoneNumber);
  const [countryIndex, setCountryIndex] = useState(CountryIndex);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      setEmail.length > 0 &&
      phoneNumber.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [firstName, lastName, email, phoneNumber]);
  return (
    <Container>
      <TwoInputItems>
        <StyledInput
          label="First name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <StyledInput
          label="Last name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </TwoInputItems>
      <InputItem>
        <StyledInput
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </InputItem>
      <InputItem>
        <PhoneInput
          defaultValue={phoneNumber}
          label="Phone number"
          setIndex={(value) => setCountryIndex(value)}
          defaultIndex={countryIndex ? countryIndex : -1}
          setPhoneValue={(value) => {
            setPhoneNumber(value);
          }}
        />
      </InputItem>
      <ButtonGrid>
        <PrimaryButton
          variant={true}
          text="Back"
          onClick={() => {
            navigate(-1);
          }}
        />
        <PrimaryButton
          disabled={buttonDisabled}
          text="Proceed"
          onClick={() =>
            complete(firstName, lastName, email, phoneNumber, countryIndex)
          }
        />
      </ButtonGrid>
    </Container>
  );
};

export default StepOne;

const Container = styled.div`
  border-top: 1px solid rgba(46, 59, 65, 1);
  padding: 6.4rem 8rem;
  @media only screen and (max-width: 769px) {
    padding: 4.8rem 1.6rem;
  }
`;

const TwoInputItems = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 2.4rem;
  }
`;

const InputItem = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;
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
