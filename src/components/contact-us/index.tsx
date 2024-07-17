import React, { useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../../components/buttons/primary";
import Typography from "../../components/typography";
import { TextSize, TextWeight } from "../../components/typography/enums";
import MapImage from "../../images/png/map.png";
import StyledInput from "../../components/input/primaryInput";
import StyledTextArea from "../../components/input/textArea";
import { Link } from "react-router-dom";
import Check from "../../components/input/check";
import PhoneInput from "../input/phone_no/phone_input";

const ContactUs = () => {
  const [checked, setChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Container>
      <TextArea>
        <Typography
          size={TextSize.DisplayLg}
          m_size={TextSize.DisplayMd}
          weight={TextWeight.semibold}
          mb="2.4"
          m_mb="1.6"
          lh="6"
          m_lh="4.4"
        >
          Contact us
        </Typography>
        <Typography size={TextSize.xl} mb="4.8">
          Our friendly team would love to hear from you.
        </Typography>
        <Form>
          <InputGrid>
            <StyledInput label="First name" placeholder="First name" />
            <StyledInput label="Last name" placeholder="Last name" />
          </InputGrid>
          <InputItem>
            <StyledInput label="Email" placeholder="you@company.com" />
          </InputItem>
          <InputItem>
            <PhoneInput
              label="Phone number"
              setPhoneValue={(value) => {
                setPhoneNumber(value);
              }}
            />
          </InputItem>
          <InputItem>
            <StyledTextArea
              label="Message"
              placeholder="Leave us a message..."
            />
          </InputItem>
          <PrivacyPolicyContainer>
            <Check setCheck={(state) => setChecked(state)} />
            <Typography size={TextSize.md} ml="1.2">
              You agree to our friendly{" "}
              <Link to={"/"} style={{ color: "white" }}>
                privacy policy.
              </Link>
            </Typography>
          </PrivacyPolicyContainer>
          <PrimaryButton text="Send message" disabled={!checked} />
        </Form>
      </TextArea>
      <Image src={MapImage} alt="map-image" />
    </Container>
  );
};

export default ContactUs;

const Container = styled.div`
  border-top: 1px solid rgba(46, 59, 65, 1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 45%;
  height: 100%;
  object-fit: cover;
  @media only screen and (max-width: 769px) {
    display: none;
  }
`;
const TextArea = styled.div`
  width: 50%;
  padding: 11.4rem 12rem;

  @media only screen and (max-width: 769px) {
    width: 100%;
    padding: 6.4rem 1.6rem;
  }
`;

const Form = styled.form``;

const InputGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 46% 46%;
  margin-bottom: 2.4rem;
  justify-content: space-between;
  @media only screen and (max-width: 769px) {
    grid-template-columns: 100%;
    grid-row-gap: 2.4rem;
  }
`;
const InputItem = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;
`;

const PrivacyPolicyContainer = styled.div`
  display: flex;
  margin-bottom: 3.2rem;
  display: flex;
  align-items: center;
`;
