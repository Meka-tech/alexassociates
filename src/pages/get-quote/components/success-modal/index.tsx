import React from "react";
import styled from "styled-components";
import Typography from "../../../../components/typography";
import { TextSize, TextWeight } from "../../../../components/typography/enums";
import PrimaryButton from "../../../../components/buttons/primary";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const SuccessModal = () => {
  const navigate = useNavigate();
  const CloseModal = () => {
    navigate(-1);
  };
  return (
    <Container>
      <IoIosCheckmarkCircleOutline
        size={25}
        color="#079455"
        style={{ marginLeft: "1.2rem" }}
      />
      <CloseIcon onClick={CloseModal}>
        <RxCross2 size={25} color="#667085" />
      </CloseIcon>
      <Typography
        mt="2.8"
        color="#101828"
        weight={TextWeight.semibold}
        size={TextSize.lg}
        lh="2.8"
        mb="0.4"
      >
        Application submitted!
      </Typography>
      <Typography color="#475467" size={TextSize.sm} lh="2" mb="5.2" m_mb="4.4">
        Thank you for submitting your application for a quote. Our team will
        review your application and reach out to you
      </Typography>
      <PrimaryButton text="Confirm" onClick={CloseModal} />
    </Container>
  );
};

export default SuccessModal;

const Container = styled.div`
  background-color: white;
  padding: 2.4rem;
  padding-top: 3.8rem;
  border-radius: 1.2rem;
  width: 40rem;
  position: relative;
  @media only screen and (max-width: 769px) {
    padding: 1.6rem;
    width: 34.3rem;
    padding-top: 3.2rem;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  cursor: pointer;
  right: 3.2rem;
  top: 3.2rem;
  @media only screen and (max-width: 769px) {
    right: 2.8rem;
    top: 2.8rem;
  }
`;
